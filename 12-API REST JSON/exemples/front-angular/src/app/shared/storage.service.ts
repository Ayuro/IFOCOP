import { Injectable } from '@angular/core';
import { UserProfile } from '../auth/auth.service';

interface StorageSchema {
  userProfile: UserProfile;
  token: string;
}

/**
 * Service d’accès à localStorage avec gestion des types.
 * (https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
 *
 * Ce service encapsule 2 fonctionnalités :
 * - le typage des données stockées (interface `StorageSchema` ci-dessus),
 * - la sérialisation / dé-sérialisation des données stockées
 *   (via JSON.stringify() et JSON.parse()).
 * @see https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage
 */
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  write<T extends keyof StorageSchema>(key: T, value: StorageSchema[T]): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  read<T extends keyof StorageSchema>(key: T): StorageSchema[T] | null {
    const value = localStorage.getItem(key);
    if (value === null) {
      return null;
    }
    return JSON.parse(value) as StorageSchema[T];
  }

  remove(key: keyof StorageSchema): void {
    localStorage.removeItem(key);
  }
}
