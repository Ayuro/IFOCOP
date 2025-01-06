import { Injectable } from '@angular/core';
import { JpUser } from './json-placeholder.types';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderActiveUserService {
  activeUser: JpUser | null = null;
}
