import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserService } from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;
  email: string;
  pw: string;
  authed: boolean;
  constructor(af: AngularFire, private _us: UserService) {
    af.auth.subscribe(auth => {
      console.log('auth', auth);
      this.authed = auth !== null;
      if(auth){
        this.items = af.database.list('/items');
      }
      else{
        this.items = null;
      }
    });
  }

  signup() {
    this._us.signUp(this.email, this.pw);
  }
  
  login() {
    this._us.login(this.email, this.pw).then((res) => {
      console.log(res);
    });
  }
  signOut() {
     this._us.logout();
  }
  title = 'app works!';
}
