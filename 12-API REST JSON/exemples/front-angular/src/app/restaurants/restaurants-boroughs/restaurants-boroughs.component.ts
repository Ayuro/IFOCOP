import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { AsyncState } from '../../shared/async-state.type';
import { ErrorMessageComponent } from '../../shared/error-message/error-message.component';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { RestaurantsApiService } from '../restaurants-api.service';

@Component({
  selector: 'app-restaurants-boroughs',
  standalone: true,
  imports: [LoadingComponent, ErrorMessageComponent, AsyncPipe],
  templateUrl: './restaurants-boroughs.component.html',
  styleUrl: './restaurants-boroughs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantsBoroughsComponent {
  restaurantsApiService = inject(RestaurantsApiService);
  boroughs$: Observable<AsyncState<string[], string>> =
    this.restaurantsApiService.getBoroughs().pipe(
      map((restaurant) => {
        return { data: restaurant, loading: false, error: '' };
      }),
      startWith({ data: null, loading: true, error: '' }),
      catchError((error) => {
        console.error(error);
        return of({
          data: null,
          loading: false,
          error: 'Impossible de charger les quartiers',
        });
      })
    );
}
