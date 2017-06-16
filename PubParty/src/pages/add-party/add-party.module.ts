import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPartyPage } from './add-party';

@NgModule({
  declarations: [
    AddPartyPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPartyPage),
  ],
  exports: [
    AddPartyPage
  ]
})
export class AddPartyPageModule {}
