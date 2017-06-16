import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AddPartyPage } from '../add-party/add-party';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

parties: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,  
              public mc: ModalController, private afd: AngularFireDatabase) {
                
               this.parties = this.afd.list("/parties/");
  }
addPartyModale = AddPartyPage;




}
