import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  loginForm = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl('')
  });

  constructor(public fireAuth: AngularFireAuth, public router: Router) { }

  onLogin() {
    this.fireAuth.auth.signInWithEmailAndPassword(this.email, this.senha)
      .then(() => {
        this.router.navigate(['/home']);
      });
  }

  get email() { return this.loginForm.get('email').value; }
  get senha() { return this.loginForm.get('senha').value; }

}
