import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { AngularFireModule,  AuthProviders, AuthMethods } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCQfHyYcgSoZJUvqngmeLGZPOFv_hYoPtg",
  authDomain: "thefirstproject-65f50.firebaseapp.com",
  databaseURL: "https://thefirstproject-65f50.firebaseio.com",
  storageBucket: "thefirstproject-65f50.appspot.com",
  messagingSenderId: "352896976477"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }