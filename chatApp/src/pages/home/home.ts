import { Component } from '@angular/core';
import { NavController, ModalController, ToastController } from 'ionic-angular';
import { 
  FormBuilder, 
  FormGroup, 
  Validators 
} from '@angular/forms';

import { EmailValidator } from '../../validators/email';
import { AuthProvider } from "../../providers/auth/auth";
import { SignupModalPage } from "../signup-modal/signup-modal";
import { Socket } from "ng-socket-io";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public loginForm: FormGroup;
  message: string;
  chatMessages: any[];
  isMessageBoxFocused:boolean;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public auth: AuthProvider,
    private toast: ToastController,
    private socket: Socket,
    private modalController:ModalController) {
      this.chatMessages = [];

      this.loginForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
        password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
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

  ionViewDidLoad() {

    this.auth.loadSavedMessages()
        .subscribe(response => {
         // console.log(response);
      
         
          for (let index in response) {
            let data = response[index];
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
          }
  
        }, err => {
          console.log( err );
      });

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

    });
  }

  sendMessage(){
    this.socket.emit("Message", { 
      text : this.message, 
      user: this.auth.getUserData(), 
      datetime: new Date() 
    });

    console.log("this.text = " + this.message);
    console.log("this.user = " + this.auth.getUserData());
    this.message = "";
   
  }

  createAccount() {
    console.log("createAccount()");
    let signupModal = this.modalController.create(SignupModalPage);
    signupModal.present();
  }

  logout() {
    this.auth.logout();
    let toastMessage = this.toast.create({
      message: 'Logged out!',
      duration: 3000,
      position: 'bottom'
    });
  
    toastMessage.present();
  }

  getAuthStatus(){
    return this.auth.getAuthStatus();
  }

  loginUser() {
    console.log("loginUser()");
    if (!this.loginForm.valid){
      let toastMessage = this.toast.create({
        message: 'Fill the form correctly!',
        duration: 3000,
        position: 'bottom'
      });
    
      toastMessage.present();
    } else {
      console.log(this.loginForm.value.email, 
        this.loginForm.value.password);
  
        let credentials = {
          email: this.loginForm.value.email,
          password: this.loginForm.value.password
        };
        
  
      this.auth.loginUser(credentials)
        .subscribe(response => {
          this.auth.authSuccess(response["id_token"]);
          let toastMessage = this.toast.create({
            message: 'Logged In Successfully!',
            duration: 3000,
            position: 'bottom'
          });
        
          toastMessage.present();
      },  err => {
        let toastMessage = this.toast.create({
          message: err.error,
          duration: 3000,
          position: 'bottom'
        });
      
        toastMessage.present();
        console.log( err );
      });
    }    
    
  }

}
