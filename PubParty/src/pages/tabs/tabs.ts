import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AccountPage } from '../account/account';
import { BlankPage } from '../blank/blank';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // TabsPage
  // This is the page where we set our tabs.
  account: any = AccountPage;
  tab: any = BlankPage;
  home: any = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
