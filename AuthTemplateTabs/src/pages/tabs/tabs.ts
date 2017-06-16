import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { BlankPage } from '../blank/blank';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // TabsPage
  // This is the page where we set our tabs.
  profile: any = HomePage;
  tab: any = BlankPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
