import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import {
  ApplicationConfig,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  TitleStrategy,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';
import { routes } from './app.routes';
import { authInterceptor } from './interceptors/auth.interceptor';
import { TitleStrategyService } from './shared/title-strategy.service';

// Utilisation de la locale "fr-FR" pour les pipes.
registerLocaleData(localeFr, 'fr-FR');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withComponentInputBinding(),

      // Stratégie de récupération des paramètres de route.
      // { paramsInheritanceStrategy: 'always' } permet de récupérer les
      // paramètres de route parent, même si le composant enfant n'a pas de
      // route dédiée.
      withRouterConfig({ paramsInheritanceStrategy: 'always' })
    ),
    // Stratégie de titre pour l’application.
    // https://angular.dev/api/router/TitleStrategy
    {
      provide: TitleStrategy,
      useClass: TitleStrategyService,
    },
    provideHttpClient(withInterceptors([authInterceptor])),
    {
      // Définition de la locale par défaut.
      provide: LOCALE_ID,
      useValue: 'fr-FR',
    },
  ],
};
