import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class GetPartiesProvider {


constructor(public db: AngularFireDatabase) {}

getParties(){

    return this.db.list("/party_details/");
  
}

}