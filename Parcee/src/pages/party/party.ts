import { GetPartiesProvider } from './../../providers/getparties';
import { FormBuilder, FormGroup } from '@angular/forms';
import { party } from './../../interfaces/party';
import { AddPartyProvider } from './../../providers/addparty';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-party',
  templateUrl: 'party.html',
})
export class PartyPage {


  public addPartyForm: FormGroup;

  Parties;
  Party = {} as party;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
  public addPartyProvider: AddPartyProvider, public formBuilder: FormBuilder, public getPartiesProvider: GetPartiesProvider) {
  
    this.mode = "main";
    this.Parties = this.getPartiesProvider.getParties();
}

mode: string;

 // creates new party
  addParty() {
    this.addPartyProvider.addParty(this.Party);
    this.clearForm();
  }
clearForm(){
  this.Party.PartyDescription = "";
  this.Party.PartyLocation = "";
  this.Party.PartyName = "";
    this.Party.PartyTime = "";
  

}
}
