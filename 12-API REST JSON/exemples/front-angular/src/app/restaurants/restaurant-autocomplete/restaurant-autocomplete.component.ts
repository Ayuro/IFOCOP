import { AsyncPipe, NgClass } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  of,
  startWith,
  switchMap,
} from 'rxjs';
import { AsyncState } from '../../shared/async-state.type';
import { ErrorMessageComponent } from '../../shared/error-message/error-message.component';
import { ClickOutsideDirective } from '../../shared/pipes/click-outside.directive';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { RestaurantsApiService } from '../restaurants-api.service';
import { RestaurantPreview } from '../restaurants.types';

@Component({
  selector: 'app-restaurant-autocomplete',
  standalone: true,
  imports: [
    AsyncPipe,
    NgClass,
    ReactiveFormsModule,
    SpinnerComponent,
    ErrorMessageComponent,
    RouterLink,
    ClickOutsideDirective,
  ],
  templateUrl: './restaurant-autocomplete.component.html',
  styleUrl: './restaurant-autocomplete.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantAutocompleteComponent implements AfterViewInit {
  /**
   * @ViewChild() permet de récupérer une référence à un élément de la vue
   * de ce composant.
   * Ici `searchInput` (dans @ViewChild('searchInput')) est le nom utilisé
   * dans le template (`#searchInput`) pour désigner l'élément à récupérer.
   * Voir aussi : https://angular.dev/guide/components/dom-apis
   */
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  q = new FormControl('', {
    validators: [Validators.required, Validators.minLength(2)],
    nonNullable: true,
  });
  suggestions$ = this.getSuggestions();
  closed = false;
  inputFocused = false;
  private restaurantsApiService = inject(RestaurantsApiService);

  /**
   * Méthode appelée après l'initialisation des vues enfants.
   * Il faut attendre cet événement pour pouvoir manipuler les éléments du DOM.
   */
  ngAfterViewInit(): void {
    this.searchInput.nativeElement.focus();
  }

  closeList() {
    if (this.inputFocused) {
      this.closed = false;
      return;
    }

    this.closed = true;
  }

  getSuggestions(): Observable<AsyncState<RestaurantPreview[], string>> {
    // On observe les changements de valeur du champ de recherche pour
    // déclencher une requête à l'API à chaque nouvelle saisie.
    return this.q.valueChanges.pipe(
      // L’opérateur filter() permet de filtrer les valeurs émises par un
      // Observable.
      // Les valeurs qui ne passent pas le test ne seront pas émises.
      //
      // POURQUOI l’utiliser ici ?
      // On ne veut pas émettre de valeurs si le champ de recherche n'est pas
      // valide, afin de ne jamais effectuer de requête si le critère de
      // recherche ne fait pas au moins 2 caractères (voir règles de
      // validation du champ).
      filter(() => this.q.valid),

      // L’opérateur distinctUntilChanged() permet de ne pas émettre une valeur
      // si elle est identique à la précédente.
      //
      // POURQUOI l’utiliser ici ?
      // On ne veut pas émettre de valeur si le champ de recherche n'a pas
      // changé, afin de ne pas effectuer de requête inutile.
      distinctUntilChanged(),

      // L’opérateur debounceTime() permet de retarder l'émission des valeurs,
      // en attendant un délai spécifié après la dernière valeur émise.
      //
      // POURQUOI l’utiliser ici ?
      // On veut éviter de faire une requête à chaque caractère tapé par
      // l'utilisateur, pour ne pas surcharger le serveur.
      debounceTime(300),

      // L’opérateur switchMap() permet de retourner un nouvel Observable pour
      // chaque valeur émise en amont (switch), puis d'appliquer une fonction
      // de transformation à chaque valeur émise par cet Observable (map).
      //
      // POURQUOI l’utiliser ici ?
      // On veut effectuer une requête HTTP à chaque fois que l'utilisateur tape
      // quelque chose dans le champ de recherche, et on veut que les
      // requêtes précédentes soient annulées si une nouvelle valeur est
      // émise.
      // On veut également que la valeur finale émise soit celle de la
      // réponse à la requête et non la valeur saisie dans le champ.
      switchMap((query: string) => {
        return this.restaurantsApiService
          .getAutocompleteSuggestions(query)
          .pipe(
            map((suggestions) => {
              return { data: suggestions, loading: false, error: '' };
            }),
            startWith({ data: null, loading: true, error: '' }),
            catchError((error) => {
              console.error(error);
              return of({ data: null, loading: false, error });
            })
          );
      })
    );
  }
}
