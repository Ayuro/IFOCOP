import { AsyncPipe, DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { AsyncState } from '../../shared/async-state.type';
import { ErrorMessageComponent } from '../../shared/error-message/error-message.component';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { RestaurantsApiService } from '../restaurants-api.service';
import { Restaurant } from '../restaurants.types';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [AsyncPipe, LoadingComponent, ErrorMessageComponent, DatePipe],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantComponent implements OnInit {
  // Récupération d'un paramètre de route via un @Input
  @Input() restaurantId = '';
  restaurantApiService = inject(RestaurantsApiService);
  restaurant$?: Observable<AsyncState<Restaurant, string>>;
  loading$?: Observable<boolean>;
  error$?: Observable<string>;

  // Ici, la requête doit être créée après la liaison de données, afin
  // de s'assurer que l'identifiant de l'utilisateur, reçu en input, est
  // disponible.
  ngOnInit(): void {
    if (this.restaurantId) {
      this.restaurant$ = this.restaurantApiService
        .getRestaurantById(this.restaurantId)
        .pipe(
          // L’opérateur map() permet de transformer la valeur émise.
          //
          // POURQUOI l’utiliser ici ?
          // Lorsque l’observable `restaurant$` émet une valeur, on veut
          // émettre false (au lieu de la valeur du restaurant) pour arrêter
          // l’affichage du spinner de chargement.
          map((restaurant) => {
            return { data: restaurant, loading: false, error: '' };
          }),

          // L’opérateur startWith() permet d’émettre une valeur au démarrage,
          // avant même que l’Observable source n’ait émis une valeur.
          //
          // POURQUOI l’utiliser ici ?
          // On veut émettre une valeur true pour afficher le spinner
          // de chargement dès le démarrage du composant.
          startWith({ data: null, loading: true, error: '' }),

          // L’opérateur catchError() permet de gérer les erreurs émises par
          // un Observable en retournant un nouvel Observable ou une valeur
          // par défaut.
          //
          // POURQUOI l’utiliser ici ?
          // Si la requête échoue, on veut émettre false pour arrêter
          // l’affichage du spinner de chargement.
          catchError((error) => {
            console.error(error);
            return of({
              data: null,
              loading: false,
              error: 'Impossible de récupérer le restaurant',
            });
          })
        );
    }
  }
}
