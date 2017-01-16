import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
  export class UserService {
  public db: any;
  constructor(private af: AngularFire) {

  }

  signUp(email: string, password: string) {
    var creds: any = {email: email, password: password};
    this.af.auth.createUser(creds);
  }
  
  logout() {
    this.af.auth.logout();
  }

  login(email: string, password: string): Promise<boolean> {
    var creds: any = {email: email, password: password};
    var res: Promise<boolean> = new Promise((resolve, reject) => {
      this.af.auth.login(creds).then(result => {
        resolve(result);
      })
    });
    return res;
  }

}