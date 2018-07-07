
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelper} from 'angular2-jwt';
import { Storage } from "@ionic/storage";
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  user: string;
  isAuth: boolean;
  
  private LOGIN_URL = "https://sheltered-temple-30239.herokuapp.com/users/login";
  private SIGNUP_URL = "https://sheltered-temple-30239.herokuapp.com/users/create";
  private CHAT_URL = "https://sheltered-temple-30239.herokuapp.com/chats";
  /*
  private LOGIN_URL = "http://localhost:3001/users/login";
  private SIGNUP_URL = "http://localhost:3001/users/create";
  private CHAT_URL = "http://localhost:3001/chats";
  */

  httpHeader = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
  jwtHelper = null;

  constructor(
    private storage: Storage,
    private http: HttpClient) {
           
      this.isAuth = false;

      console.log('AuthProvider Provider');
      storage.ready().then(() => {
        storage.get('user').then(user => {
          
          
          if (user) { 
            console.log("logged in user found = " + user);
            this.user = user;
            this.isAuth = true;
          } else {
            console.log("no logged in user found");
          }
          
        }).catch(console.log);
      });

      this.jwtHelper = new JwtHelper();

  }



  logout() {
    this.storage.remove('token');
    this.storage.remove('user');
    this.user = null;
    this.isAuth = false;
  }

  public getAuthStatus() {
    return this.isAuth;
  }

  signup(formData) {
    return this.http.post(this.SIGNUP_URL, JSON.stringify(formData),
    { headers: this.httpHeader });
  }

  loginUser(credentials) {
    return this.http.post(this.LOGIN_URL, JSON.stringify(credentials),
    { headers: this.httpHeader });
  }

  loadSavedMessages() {
    console.log("load saved messages");
    console.log("this.getAuthStatus() = " + this.getAuthStatus());

    //if (this.getAuthStatus()) {
      console.log("returnin chats");
      return this.http.get(this.CHAT_URL,
        { headers: this.httpHeader });
        
   // } else {
    //  console.log("return null");
    //  return Observable.empty();
   // }
    
  }

  authSuccess(token) {
    console.log("authSuccess");
    console.log(token);
    this.storage.set('token', token);
    this.user = this.jwtHelper.decodeToken(token).name;
    console.log("logged in user name is " + this.user);
    this.storage.set('user', this.user);
    this.isAuth = true;
  }

  getUserData() {
    return this.user;
  }

}
