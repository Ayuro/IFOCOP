import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authBaseUrl = 'http://localhost:8080/api';
  const authServices = inject(AuthService);
  const token = authServices.readToken();

  if (req.url.startsWith(authBaseUrl) && token) {
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    return next(modifiedReq);
  }

  return next(req);
};
