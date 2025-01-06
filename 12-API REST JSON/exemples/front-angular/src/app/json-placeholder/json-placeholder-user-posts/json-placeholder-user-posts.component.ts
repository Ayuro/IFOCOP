import { AsyncPipe } from '@angular/common';
import {
  Component,
  inject,
  Input,
  numberAttribute,
  OnInit,
} from '@angular/core';
import { catchError, EMPTY, Observable, tap } from 'rxjs';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { JsonPlaceholderAPIService } from '../json-placeholder-api.service';
import { JpPost } from '../json-placeholder.types';

@Component({
  selector: 'app-json-placeholder-user-posts',
  standalone: true,
  imports: [AsyncPipe, LoadingComponent],
  templateUrl: './json-placeholder-user-posts.component.html',
  styleUrl: './json-placeholder-user-posts.component.scss',
})
export class JsonPlaceholderUserPostsComponent implements OnInit {
  // Récupération d'un paramètre de route (parent) via un @Input
  // (voir app.config.ts).
  @Input({ transform: numberAttribute }) userId = 0;
  jsonPlaceholderAPIService = inject(JsonPlaceholderAPIService);
  error: string | null = null;
  loading = true;
  posts$: Observable<JpPost[]> | null = null;

  // Ici la requête doit être créée après la liaison de données, afin
  // de s'assurer que l'identifiant de l'utilisateur, reçu en input, est
  // disponible.
  ngOnInit(): void {
    this.posts$ = this.jsonPlaceholderAPIService.getUserPosts(this.userId).pipe(
      tap(() => {
        this.loading = false;
      }),
      catchError((error) => {
        console.error(error);
        this.error = 'Impossible de charger les commentaires de l’utilisateur';
        this.loading = false;
        return EMPTY;
      })
    );
  }
}
