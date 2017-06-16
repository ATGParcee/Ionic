import { Directive } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { EmailConfirmationPage } from '../../pages/email-confirmation/email-confirmation';

@Directive({
  selector: '[firebase]' // Attribute selector
})
export class FirebaseDirective {

  constructor(public afAuth: AngularFireAuth) { 

    
   }
   Confirmation = EmailConfirmationPage;

  Login(email, password) {

    var User = this.afAuth.auth.currentUser;
      
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
     
  } 
    

   Register(email, password) {

    this.afAuth.auth.createUserWithEmailAndPassword(email, password).catch(function(error){

      var errorMessage = error.message;
      alert(errorMessage);
    })
   }

  getCurrentUser(){

    var User = this.afAuth.auth.currentUser
    return User;    
  }
updateUserProfile(displayName, photoURL) {

    var User = this.afAuth.auth.currentUser;

    User.updateProfile({displayName, photoURL}).then(function(){
      //Worked

  }, function(error){
    //Didnt work

  });
}

updateUserEmail(newEmail) {

  var User = this.afAuth.auth.currentUser;

  User.updateEmail(newEmail).then(function(){
      //Worked

  }, function(error){
    //Didnt work

  });
}


updateUserPassword(newPassword) {

  var User = this.afAuth.auth.currentUser;

  User.updatePassword(newPassword).then(function(){
      //Worked

  }, function(error){
    //Didnt work

  });
}

deleteUser(){
  var User = this.afAuth.auth.currentUser;

  User.delete();

}


sendVerificationEmail () {

  this.afAuth.auth.currentUser.sendEmailVerification();
}


Logout(){
    this.afAuth.auth.signOut();
    

}

}
