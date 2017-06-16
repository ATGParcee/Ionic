import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDirective } from '../../directives/firebase/firebase';
import { EmailConfirmationPage } from '../email-confirmation/email-confirmation';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public Fire: FirebaseDirective) {
  }

Email;
Password;
Confirmation = EmailConfirmationPage;
  Register() {

      try{
            (this.Fire.Register(this.Email, this.Password))
            this.navCtrl.setRoot(this.Confirmation)
      }
    catch (error) {
        var errorMessage = error.message;
        alert(errorMessage);

    }
    
  }

}
