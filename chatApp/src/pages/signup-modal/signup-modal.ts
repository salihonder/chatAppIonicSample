import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { NameValidator } from '../../validators/name';
import { PhoneValidator } from '../../validators/phone';
import { AuthProvider } from "../../providers/auth/auth";
/**
 * Generated class for the SignupModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup-modal',
  templateUrl: 'signup-modal.html',
})
export class SignupModalPage {
  public signupForm: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private auth: AuthProvider,
    public alertCtrl: AlertController) {

      this.signupForm = formBuilder.group({
        name: ['', Validators.compose([NameValidator.isValid, Validators.minLength(2),Validators.maxLength(20), Validators.required])],
        email: ['', Validators.compose([EmailValidator.isValid, Validators.required])],
        password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
        phone: ['', Validators.compose([PhoneValidator.isValid, Validators.required])],
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupModalPage');
  }

  closeModal(){
    this.navCtrl.pop();
  }

  signupUser(){
    if (!this.signupForm.valid){
      let alert = this.alertCtrl.create({
        message: "Fill the form correctly!",
        buttons: [
          {
            text: "OK",
            role: 'cancel'
          }
        ]
      });
    alert.present();
    } else {
      
        let email = this.signupForm.value.email;
        let phone = this.signupForm.value.phone;
        let name = this.signupForm.value.name;
        let password = this.signupForm.value.password;
       

        console.log("name = " + name);
        console.log("email = " + email);
        console.log("phone = " + phone);
        console.log("password = " + password);

        
      let formData = {
        name: name,
        email: email,
        phone: phone,
        password: password
      };
      

     this.auth.signup(formData)
      .subscribe(response => {
        this.auth.authSuccess(response["id_token"]);
        this.closeModal();

    },  err => {
      console.log( err );
      let alert = this.alertCtrl.create({
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
  }

}
