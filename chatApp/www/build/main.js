webpackJsonp([1],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_email__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_name__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_phone__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SignupModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupModalPage = /** @class */ (function () {
    function SignupModalPage(navCtrl, navParams, formBuilder, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.signupForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__validators_name__["a" /* NameValidator */].isValid, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__validators_email__["a" /* EmailValidator */].isValid, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__validators_phone__["a" /* PhoneValidator */].isValid, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
    }
    SignupModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupModalPage');
    };
    SignupModalPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    SignupModalPage.prototype.signupUser = function () {
        var _this = this;
        if (!this.signupForm.valid) {
            var alert_1 = this.alertCtrl.create({
                message: "Fill the form correctly!",
                buttons: [
                    {
                        text: "OK",
                        role: 'cancel'
                    }
                ]
            });
            alert_1.present();
        }
        else {
            var email = this.signupForm.value.email;
            var phone = this.signupForm.value.phone;
            var name_1 = this.signupForm.value.name;
            var password = this.signupForm.value.password;
            console.log("name = " + name_1);
            console.log("email = " + email);
            console.log("phone = " + phone);
            console.log("password = " + password);
            var formData = {
                name: name_1,
                email: email,
                phone: phone,
                password: password
            };
            this.auth.signup(formData)
                .subscribe(function (response) {
                _this.auth.authSuccess(response["id_token"]);
                _this.closeModal();
            }, function (err) {
                console.log(err);
                var alert = _this.alertCtrl.create({
                    message: err.error,
                    buttons: [
                        {
                            text: "OK",
                            role: 'cancel'
                        }
                    ]
                });
                alert.present();
            });
        }
    };
    SignupModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup-modal',template:/*ion-inline-start:"/Users/macuser/ionicApps/chatApp/src/pages/signup-modal/signup-modal.html"*/'<!--\n  Generated template for the SignupModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons end>\n        <button ion-button (click)="closeModal()">\n          <ion-icon name="close"></ion-icon>\n        </button>\n    </ion-buttons>\n    <ion-title>Create An Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <p style="text-align:center;margin:10px;" >\n\n        <img src="../assets/imgs/profile.png" alt=""\n          class="img-circle" style="width: 35vw; min-width: 35vw;border-radius: 50%;"><br>\n       \n    </p>\n\n  <form [formGroup]="signupForm" (submit)="signupUser()" novalidate>\n\n    <ion-item>\n      <ion-label stacked>Name</ion-label>\n      <ion-input formControlName="name" type="text" placeholder="Your name"\n        [class.invalid]="!signupForm.controls.name.valid && \n         signupForm.controls[\'name\'].dirty"></ion-input>\n    </ion-item>\n\n    <ion-item class="error-message" *ngIf="!signupForm.controls.name.valid  && \n      signupForm.controls[\'name\'].dirty">\n      <p>Name must be between 2 and 20 characters</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input formControlName="email" type="email" placeholder="Your email address"\n        [class.invalid]="!signupForm.controls.email.valid && \n        signupForm.controls[\'email\'].dirty"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!signupForm.controls.email.valid  && \n    signupForm.controls[\'email\'].dirty">\n      <p>Please enter a valid email.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input formControlName="password" type="password"  placeholder="Your password"\n        [class.invalid]="!signupForm.controls.password.valid && \n        signupForm.controls[\'password\'].dirty"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!signupForm.controls.password.valid  && \n      signupForm.controls[\'password\'].dirty">\n      <p>Your password needs more than 6 characters.</p>\n    </ion-item>\n\n    <ion-item>\n        <ion-label stacked>Phone</ion-label>\n        <ion-input formControlName="phone" type="text"  placeholder="Your phone"\n          [class.invalid]="!signupForm.controls.phone.valid && \n          signupForm.controls[\'phone\'].dirty"></ion-input>\n      </ion-item>\n      <ion-item class="error-message" *ngIf="!signupForm.controls.phone.valid  && \n        signupForm.controls[\'phone\'].dirty">\n        <p>Your phone number must be 10 digits.</p>\n      </ion-item>\n\n    <button ion-button block type="submit">\n      Create an Account\n    </button>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/macuser/ionicApps/chatApp/src/pages/signup-modal/signup-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupModalPage);
    return SignupModalPage;
}());

//# sourceMappingURL=signup-modal.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/signup-modal/signup-modal.module": [
		340,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);
        if (re) {
            return null;
        }
        return {
            invalidEmail: true,
        };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_email__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_modal_signup_modal__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_socket_io__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, formBuilder, auth, toast, socket, modalController) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.toast = toast;
        this.socket = socket;
        this.modalController = modalController;
        this.chatMessages = [];
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
        //
        /*
  
        this.socket.on("Message", (data) => {
          console.log(data);
          let d = new Date(data.datetime);
          let formattedDate = d.getDate() + "-" +
            (d.getMonth() + 1) + "-" + d.getFullYear() + " " +
            d.getHours() + ":" + d.getMinutes();
          
          let m = {
            text: data.text,
            user: data.user,
            datetime: formattedDate
          };
  
          this.chatMessages.push(m);
  
        });*/
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.auth.loadSavedMessages()
            .subscribe(function (response) {
            // console.log(response);
            for (var index in response) {
                var data = response[index];
                console.log(data);
                var d = new Date(data.datetime);
                var formattedDate = d.getDate() + "-" +
                    (d.getMonth() + 1) + "-" + d.getFullYear() + " " +
                    d.getHours() + ":" + d.getMinutes();
                var m = {
                    text: data.text,
                    user: data.user,
                    datetime: formattedDate
                };
                _this.chatMessages.push(m);
            }
        }, function (err) {
            console.log(err);
        });
        this.socket.on("Message", function (data) {
            console.log(data);
            var d = new Date(data.datetime);
            var formattedDate = d.getDate() + "-" +
                (d.getMonth() + 1) + "-" + d.getFullYear() + " " +
                d.getHours() + ":" + d.getMinutes();
            var m = {
                text: data.text,
                user: data.user,
                datetime: formattedDate
            };
            _this.chatMessages.push(m);
        });
    };
    HomePage.prototype.sendMessage = function () {
        this.socket.emit("Message", {
            text: this.message,
            user: this.auth.getUserData(),
            datetime: new Date()
        });
        console.log("this.text = " + this.message);
        console.log("this.user = " + this.auth.getUserData());
        this.message = "";
    };
    HomePage.prototype.createAccount = function () {
        console.log("createAccount()");
        var signupModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_5__signup_modal_signup_modal__["a" /* SignupModalPage */]);
        signupModal.present();
    };
    HomePage.prototype.logout = function () {
        this.auth.logout();
        var toastMessage = this.toast.create({
            message: 'Logged out!',
            duration: 3000,
            position: 'bottom'
        });
        toastMessage.present();
    };
    HomePage.prototype.getAuthStatus = function () {
        return this.auth.getAuthStatus();
    };
    HomePage.prototype.loginUser = function () {
        var _this = this;
        console.log("loginUser()");
        if (!this.loginForm.valid) {
            var toastMessage = this.toast.create({
                message: 'Fill the form correctly!',
                duration: 3000,
                position: 'bottom'
            });
            toastMessage.present();
        }
        else {
            console.log(this.loginForm.value.email, this.loginForm.value.password);
            var credentials = {
                email: this.loginForm.value.email,
                password: this.loginForm.value.password
            };
            this.auth.loginUser(credentials)
                .subscribe(function (response) {
                _this.auth.authSuccess(response["id_token"]);
                var toastMessage = _this.toast.create({
                    message: 'Logged In Successfully!',
                    duration: 3000,
                    position: 'bottom'
                });
                toastMessage.present();
            }, function (err) {
                var toastMessage = _this.toast.create({
                    message: err.error,
                    duration: 3000,
                    position: 'bottom'
                });
                toastMessage.present();
                console.log(err);
            });
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/macuser/ionicApps/chatApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Chat Example App\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content >\n  <div *ngIf="getAuthStatus()">\n        <div class="headerArea">\n            \n       \n            \n            <ion-list>\n                <ion-item>\n                  <h1 item-start>Welcome, {{ auth.getUserData() }}</h1>\n                  <button ion-button item-end color="dark" (click)="logout()">Log Out</button>\n                </ion-item>\n            </ion-list>\n        </div>\n        <div class="middleArea">\n          <div *ngFor="let message of chatMessages">\n              [{{message.user}} ({{message.datetime}}) ] : {{message.text}}\n          </div>\n          \n        </div>\n        <div class="bottomArea">\n            <ion-input   type="text" [(ngModel)]="message" placeholder="Type a message">\n              </ion-input>\n              <button ion-button block (click)="sendMessage()">\n                  Send\n              </button>\n        </div>\n        \n\n        \n  </div>\n\n  <div *ngIf="!getAuthStatus()">\n  <form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input #email formControlName="email" type="email" placeholder="Your email address"\n        [class.invalid]="!loginForm.controls.email.valid && loginForm.controls[\'email\'].dirty"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!loginForm.controls.email.valid  &&\n      loginForm.controls[\'email\'].dirty">\n      <p>Please enter a valid email.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input #password formControlName="password" type="password" placeholder="Your password"\n        [class.invalid]="!loginForm.controls.password.valid &&\n          loginForm.controls[\'password\'].dirty"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!loginForm.controls.password.valid  &&\n      loginForm.controls[\'password\'].dirty">\n      <p>Your password needs more than 6 characters.</p>\n    </ion-item>\n\n    <button ion-button block type="submit">\n      Login\n    </button>\n\n  </form>\n\n  \n  <button ion-button block clear (click)="createAccount()">\n      Need an account?\n  </button>\n\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/macuser/ionicApps/chatApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6_ng_socket_io__["Socket"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(247);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_modal_signup_modal__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng_socket_io__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var config = {
    url: "https://sheltered-temple-30239.herokuapp.com",
    //url: "http://localhost:3001",
    options: {}
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_modal_signup_modal__["a" /* SignupModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/signup-modal/signup-modal.module#SignupModalPageModule', name: 'SignupModalPage', segment: 'signup-modal', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_ng_socket_io__["SocketIoModule"].forRoot(config),
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_modal_signup_modal__["a" /* SignupModalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameValidator; });
var NameValidator = /** @class */ (function () {
    function NameValidator() {
    }
    NameValidator.isValid = function (control) {
        var re = /^[A-Za-z ]{2,20}$/.test(control.value);
        if (re) {
            return null;
        }
        return {
            invalidName: true,
        };
    };
    return NameValidator;
}());

//# sourceMappingURL=name.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneValidator; });
var PhoneValidator = /** @class */ (function () {
    function PhoneValidator() {
    }
    PhoneValidator.isValid = function (control) {
        var re = /^\d{10}$/.test(control.value);
        if (re) {
            return null;
        }
        return {
            invalidPhone: true,
        };
    };
    return PhoneValidator;
}());

//# sourceMappingURL=phone.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/macuser/ionicApps/chatApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/macuser/ionicApps/chatApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(storage, http) {
        var _this = this;
        this.storage = storage;
        this.http = http;
        this.LOGIN_URL = "https://sheltered-temple-30239.herokuapp.com/users/login";
        this.SIGNUP_URL = "https://sheltered-temple-30239.herokuapp.com/users/create";
        this.CHAT_URL = "https://sheltered-temple-30239.herokuapp.com/chats";
        /*
        private LOGIN_URL = "http://localhost:3001/users/login";
        private SIGNUP_URL = "http://localhost:3001/users/create";
        private CHAT_URL = "http://localhost:3001/chats";
        */
        this.httpHeader = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json; charset=utf-8' });
        this.jwtHelper = null;
        this.isAuth = false;
        console.log('AuthProvider Provider');
        storage.ready().then(function () {
            storage.get('user').then(function (user) {
                if (user) {
                    console.log("logged in user found = " + user);
                    _this.user = user;
                    _this.isAuth = true;
                }
                else {
                    console.log("no logged in user found");
                }
            }).catch(console.log);
        });
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
    }
    AuthProvider.prototype.logout = function () {
        this.storage.remove('token');
        this.storage.remove('user');
        this.user = null;
        this.isAuth = false;
    };
    AuthProvider.prototype.getAuthStatus = function () {
        return this.isAuth;
    };
    AuthProvider.prototype.signup = function (formData) {
        return this.http.post(this.SIGNUP_URL, JSON.stringify(formData), { headers: this.httpHeader });
    };
    AuthProvider.prototype.loginUser = function (credentials) {
        return this.http.post(this.LOGIN_URL, JSON.stringify(credentials), { headers: this.httpHeader });
    };
    AuthProvider.prototype.loadSavedMessages = function () {
        console.log("load saved messages");
        console.log("this.getAuthStatus() = " + this.getAuthStatus());
        //if (this.getAuthStatus()) {
        console.log("returnin chats");
        return this.http.get(this.CHAT_URL, { headers: this.httpHeader });
        // } else {
        //  console.log("return null");
        //  return Observable.empty();
        // }
    };
    AuthProvider.prototype.authSuccess = function (token) {
        console.log("authSuccess");
        console.log(token);
        this.storage.set('token', token);
        this.user = this.jwtHelper.decodeToken(token).name;
        console.log("logged in user name is " + this.user);
        this.storage.set('user', this.user);
        this.isAuth = true;
    };
    AuthProvider.prototype.getUserData = function () {
        return this.user;
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ })

},[227]);
//# sourceMappingURL=main.js.map