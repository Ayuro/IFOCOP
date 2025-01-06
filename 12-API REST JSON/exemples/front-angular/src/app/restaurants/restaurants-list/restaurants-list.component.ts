import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  catchError,
  map,
  Observable,
  of,
  startWith,
  Subject,
  switchMap,
} from 'rxjs';
import { AsyncState } from '../../shared/async-state.type';
import { ErrorMessageComponent } from '../../shared/error-message/error-message.component';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { PaginationComponent } from '../../shared/pagination/pagination.component';
import { RestaurantAutocompleteComponent } from '../restaurant-autocomplete/restaurant-autocomplete.component';
import { RestaurantsApiService } from '../restaurants-api.service';
import { PaginatedRestaurants } from '../restaurants.types';

@Component({
  selector: 'app-restaurants-list',
  standalone: true,
  imports: [
    PaginationComponent,
    ErrorMessageComponent,
    RestaurantAutocompleteComponent,
    LoadingComponent,
    RouterLink,
    AsyncPipe,
    JsonPipe,
  ],
  templateUrl: './restaurants-list.component.html',
  styleUrl: './restaurants-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantsListComponent {
  private restaurantsService = inject(RestaurantsApiService);
  private readonly page$ = new Subject<number>();
  readonly rpp = 10;
  currentPage = 1;
  total = 0;
  paginatedRestaurants$: Observable<AsyncState<PaginatedRestaurants, string>> =
    this.page$.pipe(
      startWith(this.currentPage),
      switchMap((page) => {
        const offset = (page - 1) * this.rpp;
        return this.restaurantsService.getRestaurants(offset).pipe(
          map((paginatedRestaurants) => {
            this.total = paginatedRestaurants.total;
            return {
              data: paginatedRestaurants,
              loading: false,
              error: '',
            };
          }),
          startWith({ data: null, loading: true, error: '' }),
          catchError((error) => {
            console.error(error);
            return of({
              data: null,
              loading: false,
              error: 'Impossible de récupérer la liste des restaurants',
            });
          })
        );
      })
    );

  onPageChange(page: number): void {
    this.currentPage = page;
    this.page$.next(page);
  }
}
