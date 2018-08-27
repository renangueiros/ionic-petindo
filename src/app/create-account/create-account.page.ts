import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage {

  criarContaForm = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl('')
  });

  constructor(public fireAuth: AngularFireAuth, public router: Router) { }

  onCriarConta() {
    this.fireAuth.auth.createUserWithEmailAndPassword(this.email, this.senha)
      .then(() => {
        this.router.navigate(['/home']);
      });
  }

  get email() { return this.criarContaForm.get('email').value; }
  get senha() { return this.criarContaForm.get('senha').value; }

}

