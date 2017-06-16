import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FirebaseDirective } from '../../directives/firebase/firebase';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})


export class TabsPage {

  
    constructor(private Fire: FirebaseDirective, private Nav: NavController) {
        
      this.Fire.afAuth.auth.onAuthStateChanged(function(user){
        var Login = LoginPage;
        if(user) {
            // User logged in
            Nav.popToRoot();
            
        } else {
          // User not logged in
          alert('asdfasdf');
          Nav.setRoot(Login);
        }
      })


    }

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  settings = SettingsPage;

  
}
