import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ApiStatus,
  PaginatedRestaurants,
  Restaurant,
  RestaurantPreview,
} from './restaurants.types';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsApiService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:8080';

  getStatus(): Observable<ApiStatus> {
    return this.http.get<ApiStatus>(`${this.baseUrl}/api-test`);
  }

  getBoroughs(): Observable<string[]> {
    /**
     * Cet endpoint requiert une authentification JWT, via un en-tête
     * Authorization.
     * Sans le HttpInterceptor, il faudrait ajouter l'en-tête manuellement à
     * chaque requête.
     */
    // return this.http.get<string[]>(`${this.baseUrl}/api/boroughs`, {
    //   headers: {
    //     Authorization: `Bearer ...}`,
    //   },
    // });

    return this.http.get<string[]>(`${this.baseUrl}/api/boroughs`);
  }

  getRestaurants(offset = 0): Observable<PaginatedRestaurants> {
    // HttpParams permet de construire des paramètres de requête de manière
    // structurée au lieu de concaténer les chaînes de caractères.
    const params = new HttpParams().set('offset', offset.toString());
    const options = { params };

    const url = `${this.baseUrl}/api/restaurants`;
    return this.http.get<PaginatedRestaurants>(url, options);
  }

  getRestaurantById(id: string): Observable<Restaurant> {
    const url = `${this.baseUrl}/api/restaurants/${id}`;
    return this.http.get<Restaurant>(url);
  }

  getAutocompleteSuggestions(query: string): Observable<RestaurantPreview[]> {
    const params = new HttpParams().set('q', query);
    const options = { params };

    const url = `${this.baseUrl}/api/restaurants/suggest`;
    return this.http.get<RestaurantPreview[]>(url, options);
  }

  /**
   * Endpoint de test pour recevoir une erreur 404 de la part du serveur.
   */
  getFakeRoute(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/not-a-route`);
  }
}
