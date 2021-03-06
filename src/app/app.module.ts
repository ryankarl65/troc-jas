import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

const config = {
  apiKey: "AIzaSyAXl207M9aCRYMbVe174-Ddo0DCzKzZ3bU",
  authDomain: "ecommerce-fd258.firebaseapp.com",
  databaseURL: "https://ecommerce-fd258.firebaseio.com",
  projectId: "ecommerce-fd258",
  storageBucket: "ecommerce-fd258.appspot.com",
  messagingSenderId: "458699216231"
};

import { MyApp } from "./app.component";
import { AuthService } from "../providers/auth/auth.service";
import { DataProvider } from '../providers/data/data';

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    DataProvider
  ]
})
export class AppModule {}
