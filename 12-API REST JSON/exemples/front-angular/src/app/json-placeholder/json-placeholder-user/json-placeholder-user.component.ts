import { AsyncPipe } from '@angular/common';
import {
  Component,
  inject,
  Input,
  numberAttribute,
  OnInit,
} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { catchError, EMPTY, Observable, tap } from 'rxjs';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { JsonPlaceholderActiveUserService } from '../json-placeholder-active-user.service';
import { JsonPlaceholderAPIService } from '../json-placeholder-api.service';
import { JpUser } from '../json-placeholder.types';

@Component({
  selector: 'app-json-placeholder-user',
  standalone: true,
  imports: [
    AsyncPipe,
    LoadingComponent,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
  ],
  templateUrl: './json-placeholder-user.component.html',
  styleUrl: './json-placeholder-user.component.scss',
})
export class JsonPlaceholderUserComponent implements OnInit {
  // Récupération d'un paramètre de route via un @Input
  @Input({ transform: numberAttribute }) userId = 0;
  jsonPlaceholderAPIService = inject(JsonPlaceholderAPIService);
  activeUserService = inject(JsonPlaceholderActiveUserService);
  error: string | null = null;
  loading = true;
  user$: Observable<JpUser> | null = null;

  // Ici, la requête doit être créée après la liaison de données, afin
  // de s'assurer que l'identifiant de l'utilisateur, reçu en input, est
  // disponible.
  ngOnInit(): void {
    this.user$ = this.jsonPlaceholderAPIService.getUser(this.userId).pipe(
      tap((user) => {
        this.loading = false;
        this.activeUserService.activeUser = user;
      }),
      catchError((error) => {
        console.error(error);
        this.error = 'Impossible de charger les information de l’utilisateur';
        this.loading = false;
        return EMPTY;
      })
    );
  }
}
