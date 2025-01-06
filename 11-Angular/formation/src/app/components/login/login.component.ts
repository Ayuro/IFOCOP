import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  authService = inject(AuthService);
  formBuilder = new FormBuilder().nonNullable;
  loginForm = this.formBuilder.group({
    email: ['', Validators.email],
    password: [''],
  });

  login() {
    console.log('Avant : ', this.authService.isAuthenticated);

    this.authService.login(
      this.loginForm.controls.email.value,
      this.loginForm.controls.password.value
    );
    console.log('Après : ', this.authService.isAuthenticated);
  }
}
