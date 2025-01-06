import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MaDependance } from '../../ma-dependance';

@Component({
  selector: 'app-form-demo',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './form-demo.component.html',
  styleUrl: './form-demo.component.scss',
})
export class FormDemoComponent {
  // userName = new FormControl('', [Validators.required, Validators.minLength(4)]);
  maDep = new MaDependance('Toto');

  formBuilder = new FormBuilder().nonNullable;

  form = this.formBuilder.group({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]), // Constructeur générique, n'applique pas la config de this.formBuilder
    email2: this.formBuilder.control('email2@hjklhljk', [Validators.email]),
    email: [
      'toto',
      [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)],
    ],
  });

  constructor() {
    console.log(this.form);
    this.maDep.name = 'Titi';
    console.log('FormDemoComponent', this.maDep.name);
  }

  envoyerLesDonnees() {
    if (this.form.valid) {
      console.log('Formulaire soumis');
      console.log(this.form);
      const data = { ...this.form.value, page: 'contact' };
      console.log('data', data);
      this.form.reset();
    }
  }

  get userName() {
    return this.form.controls.userName;
  }

  get email() {
    return this.form.controls.email;
  }
}
