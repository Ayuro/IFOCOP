import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuthenticated = false;
  private readonly defaultUser = {
    email: 'a@a',
    password: '123456',
  };

  login(email: string, password: string) {
    if (
      email === this.defaultUser.email &&
      password === this.defaultUser.password
    ) {
      this._isAuthenticated = true;
    }
  }

  get isAuthenticated() {
    return this._isAuthenticated;
  }
}
