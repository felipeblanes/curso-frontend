import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabase} from "angularfire2/database";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCFRFJ_4C3GD0iKlbHqYV47GwEUL70ehbk",
      authDomain: "masterzapp-94380.firebaseapp.com",
      databaseURL: "https://masterzapp-94380.firebaseio.com",
      projectId: "masterzapp-94380",
      storageBucket: "masterzapp-94380.appspot.com",
      messagingSenderId: "574532071789"
      }
    ),
    AngularFireDatabase
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
