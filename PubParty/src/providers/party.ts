import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';




@Injectable()
export class PartyProvider {

  constructor(public http: Http, public afd: AngularFireDatabase) {
 
  }


addParty(name, description) {

  this.afd.list("/parties/").push("dsafasdf")

}

editParty(partyDetails) {



}

deleteParty(id) {

  this.afd.list("/parties/").remove(id);

}

getParties() {

  return this.afd.list("/parties/")
}
}
