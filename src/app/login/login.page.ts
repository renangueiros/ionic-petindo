import { Component } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(public fireAuth: AngularFireAuth) { }

  login() {
    this.fireAuth.auth.signInWithEmailAndPassword(null, null);
  }

}
