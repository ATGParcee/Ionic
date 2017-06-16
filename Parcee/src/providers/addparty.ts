import * as firebase from 'firebase';




export class AddPartyProvider {


constructor() {}


addParty (party) {

// get the party id from createPartyID function
var partyId = this.createPartyId();

// create party details object
firebase.database().ref('party_details/' + partyId).set({

    PartyName: party.PartyName,
    PartyDescription: party.PartyDescription,
    PartyLocation: party.PartyLocation,
    PartyTime: party.PartyTime
})

}


createPartyId() {
// get user id of current user to add to the party being created
var userId = firebase.auth().currentUser.uid;

// generate a party id
var partyId = firebase.database().ref('parties/').push().key;

// create a party and user the generated party id
firebase.database().ref('parties/' + partyId).set({

    PartyCreator: userId,
    PID: partyId,
    
})

// send the party id back
return partyId;
}





}