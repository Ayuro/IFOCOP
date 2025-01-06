import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

/**
 * On vérifie que l'utilisateur est authentifié.
 * Si l'utilisateur est authentifié, on retourne true.
 * Sinon, on redirige l'utilisateur vers la page de connexion.
 */
export const authGuard: CanMatchFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    return router.createUrlTree(['/login']);
  }
  return true;
};
