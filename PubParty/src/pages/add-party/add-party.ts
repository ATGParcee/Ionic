import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-add-party',
  templateUrl: 'add-party.html',
})
export class AddPartyPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private afd: AngularFireDatabase, private alert: AlertController) {
  }



   name;
   description;




presentAlert() {
  let a = this.alert.create({
    title: 'Fields Empty',
    subTitle: 'Please fill in all fields',
    buttons: ['Ok']
  });
  a.present();
}

addParty() {

if(this.name == undefined || this.description == undefined) {  this.presentAlert()} else {



  this.afd.list("/parties/").push({

    PartyName: this.name,
    PartyDescription: this.description,
  })

this.name = "";
this.description = "";

}



}
}
