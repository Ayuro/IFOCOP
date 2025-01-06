import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, EMPTY, tap } from 'rxjs';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { PageNotesComponent } from '../../shared/page-notes/page-notes.component';
import { JsonPlaceholderAPIService } from '../json-placeholder-api.service';

@Component({
  selector: 'app-json-placeholder-users',
  standalone: true,
  imports: [RouterLink, AsyncPipe, LoadingComponent, PageNotesComponent],
  templateUrl: './json-placeholder-users.component.html',
  styleUrl: './json-placeholder-users.component.scss',
})
export class JsonPlaceholderUsersComponent {
  jsonPlaceholderAPIService = inject(JsonPlaceholderAPIService);
  error: string | null = null;
  loading = true;

  // On peut directement récupérer un Observable de la liste des utilisateurs
  // et l'assigner à une propriété de la classe.
  users$ = this.jsonPlaceholderAPIService
    .getUsers()

    // On utilise un pipe pour exécuter plusieurs opérateurs de RxJS pour gérer
    // les erreurs et l'état de chargement.
    .pipe(
      // L’opérateur tap() permet d'effectuer une action sur les valeurs émises
      // sans modifier le flux de données.
      //
      // POURQUOI l'utiliser ici ?
      // Lorsque l'observable `users$` émet une valeur, on veut arrêter
      // l'affichage du spinner de chargement.
      tap(() => (this.loading = false)),

      // L'opérateur catchError() permet de gérer les erreurs survenant dans un
      // flux Observable, de façon réactive.
      // Il intercepte les erreurs émises par l'Observable source et permet soit
      // de les remplacer par une nouvelle valeur ou un nouvel Observable, soit
      // de les relancer.
      //
      // POURQUOI l'utiliser ici ?
      // On veut gérer les erreurs émises par l'observable `users$` pour
      // afficher un message d'erreur à l'utilisateur et arrêter l'affichage
      // du spinner de chargement.
      catchError(() => {
        this.error = 'Impossible de charger les utilisateurs';
        this.loading = false;

        // EMPTY est un Observable qui complète immédiatement sans émettre de
        // valeur.
        //
        // POURQUOI l'utiliser ici ?
        // On veut arrêter l'exécution du flux de données après avoir géré
        // l'erreur.
        return EMPTY;
      })
    );
}
