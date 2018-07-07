var logger          = require('morgan'),
    cors            = require('cors'),
    http            = require('http'),
    express         = require('express'),
    errorhandler    = require('errorhandler'),
    dotenv          = require('dotenv'),
    bodyParser      = require('body-parser'),
    mongoose        = require('mongoose'),
    config          = require('./config'),
    jwt             = require('jsonwebtoken')
    _               = require('lodash');
    socketio        = require('socket.io');


var app = express();
var server = http.createServer(app);
var io = socketio.listen(server);
// Configuration
mongoose.connect('mongodb://heroku_chlr2hgp:mjfgpdjpmhs20pj562cbuocl4e@ds229701.mlab.com:29701/heroku_chlr2hgp', { useMongoClient: true });

dotenv.load();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(function(err, req, res, next) {
  if (err.name === 'StatusError') {
    res.send(err.status, err.message);
  } else {
    next(err);
  }
});


if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
  app.use(errorhandler())
}



function createIdToken(user) {
  return jwt.sign(_.omit(user, 'password'), config.secret, { expiresIn: 60*60*5 });
}

function createAccessToken() {
  return jwt.sign({
    iss: config.issuer,
    aud: config.audience,
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    scope: 'full_access',
    sub: "salihonder",
    jti: genJti(), // unique identifier for the token
    alg: 'HS256'
  }, config.secret);
}

// Generate Unique Identifier for the access token
function genJti() {
  let jti = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 16; i++) {
      jti += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return jti;
}

// Models
var User = mongoose.model('User', {
    name: String,
    email: String,
    phone: String,
    password: String
});

var Chat = mongoose.model('Chat', {
    user: String,
    datetime: String,
    text: String
});


io.on("connection", function(socket){
  console.log("new client connected... socket id = " + socket.id);

  socket.on("disconnect", function(data) {
    console.log("the client disconnected...");
  });

  socket.on("Message", function(data) {
    console.log(data.text);
    console.log(data.user);
    console.log(data.datetime);


    let chat = new Chat({
      user: data.user,
      datetime: data.datetime,
      text: data.text});

    chat.save();


    io.emit("Message", data);
  });
});

app.post('/users/create', function(req, res) {
  let name = req.body.name,
      email = req.body.email,
      phone = req.body.phone,
      password = req.body.password;

  if (!name || !email || !phone || !password) {
    return res.status(400).send("You must send all the form data!");
  }
  console.log("look for email = " + email);
  var query = User.find({ email: email});
  var promise = query.exec();
  promise.addBack(function (err, docs) {
    console.log(docs);
    if (docs.length == 0) {
      console.log("new user");
      let user = new User({
        name: name,
        email: email,
        phone: phone,
        password: password});



      // I didnt add if err return some data..since this is just example
      user.save().then(() => {
        console.log('a new user saved');
        res.status(201).send({
          id_token: createIdToken(user),
          access_token: createAccessToken()
        });
      });


    } else {
       return res.status(400).send("A user with that username already exists");
    }
  });



});

app.post('/users/login', function(req, res) {
console.log("login service");
  let email = req.body.email,
      password = req.body.password;

      console.log("email = " + email);
      console.log("password = " + password);

  if (!email || !password) {
    return res.status(400).send("You must send the username and the password");
  }


  var query = User.find({ email: email});
  var promise = query.exec();
  promise.addBack(function (err, docs) {
    console.log(docs);
    let user = null;
    if (docs.length == 1) {
      user = docs[0];
      console.log("user password = " + user.password);
      console.log("typed password = " + password);
      if (user.password !== password) {
        return res.status(401).send("The username or password don't match");
      }
      res.status(201).send({
        id_token: createIdToken(user),
        access_token: createAccessToken()
      });
    } else {
      return res.status(401).send("The username or password don't match");
    }

  });
});

app.get('/users', function (req, res) {

	console.log("users service requested");

  User.find({}, function(err, users) {
     var userMap = {};

     users.forEach(function(user) {
       userMap[user._id] = user;
     });

     res.send(userMap);
   });



});

app.get('/chats', function (req, res) {

	console.log("chats service requested");

  Chat.find({}, function(err, chats) {
     var chatMap = [];

     chats.forEach(function(chat) {
       chatMap.push(chat);
     });

     res.send(chatMap);
   });

});


var port = process.env.PORT || 3001;

server.listen(port, function (err) {
  console.log('listening in http://localhost:' + port);
});
