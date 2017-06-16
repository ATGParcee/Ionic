import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { FirebaseDirective } from '../../directives/firebase/firebase';
import { EmailConfirmationPage } from '../email-confirmation/email-confirmation';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  Home = HomePage;
  constructor(public Nav: NavController, public navParams: NavParams, private Fire: FirebaseDirective) {
   var User = this.Fire.afAuth.auth.currentUser;
   
   this.Fire.afAuth.auth.onAuthStateChanged(function(user){
        var Login = LoginPage;
        if(user) {
            // User logged in
            Nav.setRoot(this.Home);
            
        }
      })

  }

Register = RegisterPage;
Email;
Password;
Confirmation = EmailConfirmationPage;

Login(){


  
    try {
      
      this.Fire.Login(this.Email, this.Password); 
    }
     catch (error) {

      var errorMessage = error.message;
      alert(errorMessage);
    }
  

 
  
}


}
