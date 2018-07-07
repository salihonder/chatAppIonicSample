import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { IonicStorageModule } from "@ionic/storage";
import { HttpClientModule } from '@angular/common/http';
import { SignupModalPage } from '../pages/signup-modal/signup-modal';
import { SocketIoModule, SocketIoConfig } from "ng-socket-io";


let config :SocketIoConfig = {
  url : "https://sheltered-temple-30239.herokuapp.com",
  //url: "http://localhost:3001",
  options: {}
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    SocketIoModule.forRoot(config),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
