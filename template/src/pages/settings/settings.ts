import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDirective } from '../../directives/firebase/firebase';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private Fire: FirebaseDirective) {
  }

  Logout() {

    this.Fire.Logout();
  }

}
