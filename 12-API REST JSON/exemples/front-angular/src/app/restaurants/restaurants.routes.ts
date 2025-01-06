import { Routes } from '@angular/router';
import { RestaurantAutocompleteComponent } from './restaurant-autocomplete/restaurant-autocomplete.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantsBoroughsComponent } from './restaurants-boroughs/restaurants-boroughs.component';
import { RestaurantsHomeComponent } from './restaurants-home/restaurants-home.component';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { RestaurantsSectionComponent } from './restaurants-section/restaurants-section-component';

export const restaurantRoutes: Routes = [
  {
    path: '',
    component: RestaurantsSectionComponent,
    children: [
      {
        path: '',
        component: RestaurantsHomeComponent,
      },
      {
        path: 'quartiers',
        component: RestaurantsBoroughsComponent,
        title: 'Quartiers',
      },
      {
        path: 'liste',
        component: RestaurantsListComponent,
        title: 'Restaurants',
      },
      {
        path: 'recherche',
        component: RestaurantAutocompleteComponent,
        title: 'Rechercher un restaurant',
      },
      {
        path: 'restaurant/:restaurantId',
        component: RestaurantComponent,
        title: 'Restaurant',
      },
    ],
  },
];
