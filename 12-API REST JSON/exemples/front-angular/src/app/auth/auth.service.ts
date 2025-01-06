import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { StorageService } from '../shared/storage.service';

interface LoggedInUser {
  userName: string;
  email: string;
  token: string;
}

export interface UserProfile {
  userName: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly storageService = inject(StorageService);
  private readonly baseUrl = 'http://localhost:8080';
  private _isAuthenticated = signal(false);

  constructor() {
    this._isAuthenticated.set(!!this.readToken());
  }

  login(email: string, password: string): Observable<LoggedInUser> {
    console.log('AuthService.login()', email, password);

    return this.http
      .post<LoggedInUser>(`${this.baseUrl}/login`, { email, password })
      .pipe(
        tap((response: LoggedInUser) => {
          console.log('AuthService.login() response', response);
          this._isAuthenticated.set(true);
          this.writeToken(response.token);
          this.writeProfile({
            userName: response.userName,
            email: response.email,
          });
          this.router.navigate(['/', 'restaurants']);
        })
      );
  }

  logout(): void {
    this._isAuthenticated.set(false);
    this.storageService.remove('token');
    this.storageService.remove('userProfile');
    this.router.navigate(['/']);
  }

  get isAuthenticated(): Signal<boolean> {
    return this._isAuthenticated.asReadonly();
  }

  readProfile(): UserProfile | null {
    return this.storageService.read('userProfile');
  }

  writeProfile(userProfile: UserProfile): void {
    this.storageService.write('userProfile', userProfile);
  }

  readToken(): string | null {
    return this.storageService.read('token');
  }

  writeToken(token: string): void {
    this.storageService.write('token', token);
  }
}
