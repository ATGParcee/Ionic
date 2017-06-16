import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, NavController } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseDirective } from '../directives/firebase/firebase';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { EmailConfirmationPage } from '../pages/email-confirmation/email-confirmation';
import { SettingsPage } from '../pages/settings/settings';


 var config = {
    apiKey: "AIzaSyDsqag_JC0-IqcY1aIGLorlVwYkalNmacQ",
    authDomain: "project-1-2ddce.firebaseapp.com",
    databaseURL: "https://project-1-2ddce.firebaseio.com",
    projectId: "project-1-2ddce",
    storageBucket: "project-1-2ddce.appspot.com",
    messagingSenderId: "236506213439"
  };
  firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FirebaseDirective,
    LoginPage,
    RegisterPage,
    EmailConfirmationPage,
    SettingsPage,
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    EmailConfirmationPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseDirective,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
