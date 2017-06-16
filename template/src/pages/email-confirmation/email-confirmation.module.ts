import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailConfirmationPage } from './email-confirmation';

@NgModule({
  declarations: [
    EmailConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(EmailConfirmationPage),
  ],
  exports: [
    EmailConfirmationPage
  ]
})
export class EmailConfirmationPageModule {}
