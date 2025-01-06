import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    title: 'Connexion',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'restaurants',
    loadChildren: () =>
      import('./restaurants/restaurants.routes').then(
        (m) => m.restaurantRoutes
      ),
    /**
     * Toutes les routes enfants de `/restaurants` sont protégées par le garde
     * `authGuard`.
     */
    canMatch: [authGuard],
  },
  {
    path: 'json-placeholder',
    loadChildren: () =>
      import('./json-placeholder/json-placeholder.routes').then(
        (m) => m.jsonPlaceholderRoutes
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Page non trouvée',
  },
];
