import { registerLocaleData } from '@angular/common';
import localDe from '@angular/common/locales/de';
import localFr from '@angular/common/locales/fr';
import {
  ApplicationConfig,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
registerLocaleData(localFr, 'fr-FR');
registerLocaleData(localDe, 'de-DE');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR',
    },
    // {
    //   provide: NumbersService,
    //   useClass: NumbersService
    // }
  ],
};
