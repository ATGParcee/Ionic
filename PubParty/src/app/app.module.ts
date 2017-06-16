import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { GooglePlus } from '@ionic-native/google-plus';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { AccountPage } from '../pages/account/account';
import { VerificationPage } from '../pages/verification/verification';
import { TrialPage } from '../pages/trial/trial';
import { TabsPage } from '../pages/tabs/tabs';
import { BlankPage } from '../pages/blank/blank';
import { LoginProvider } from '../providers/login';
import { LogoutProvider } from '../providers/logout';
import { LoadingProvider } from '../providers/loading';
import { AlertProvider } from '../providers/alert';
import { ImageProvider } from '../providers/image';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Login } from '../login';
import { HomePage } from '../pages/home/home';
import { PartyProvider } from '../providers/party';
import { AddPartyPage } from '../pages/add-party/add-party';

firebase.initializeApp(Login.firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AccountPage,
    VerificationPage,
    TrialPage,
    TabsPage,
    BlankPage,
    HomePage,
    AddPartyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios'
    }),
    AngularFireModule.initializeApp(Login.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AccountPage,
    VerificationPage,
    TrialPage,
    TabsPage,
    BlankPage,
    HomePage,
    AddPartyPage
  ],
  providers: [StatusBar, SplashScreen, Camera, GooglePlus, { provide: ErrorHandler, useClass: IonicErrorHandler }, LoginProvider, LogoutProvider, LoadingProvider, AlertProvider, ImageProvider,
    PartyProvider]
})
export class AppModule { }
