import { AsyncPipe, NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, EMPTY, Observable, tap } from 'rxjs';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { JsonPlaceholderAPIService } from '../json-placeholder-api.service';
import { JpAlbum } from '../json-placeholder.types';

@Component({
  selector: 'app-json-placeholder-albums',
  standalone: true,
  imports: [AsyncPipe, LoadingComponent, RouterLink, NgClass],
  templateUrl: './json-placeholder-albums.component.html',
  styleUrl: './json-placeholder-albums.component.scss',
})
export class JsonPlaceholderAlbumsComponent implements OnInit {
  jsonPlaceholderAPIService = inject(JsonPlaceholderAPIService);
  currentPage = 1;
  albums$?: Observable<JpAlbum[]>;
  /**
   * L'API JSONplaceholder ne permet pas de récupérer le nombre total d'albums,
   * mais on connaît ce nombre (100).
   */
  nbPages = 10;
  pages: number[] = Array.from({ length: this.nbPages }, (_, i) => i + 1);
  error: string | null = null;
  loading = true;

  ngOnInit() {
    this.loadResults();
  }

  loadResults() {
    this.error = null;
    this.loading = true;
    this.albums$ = this.jsonPlaceholderAPIService
      .getAlbums(this.currentPage)
      .pipe(
        tap(() => {
          this.loading = false;
        }),
        catchError((error) => {
          console.error(error);
          this.error = 'Impossible de charger les albums';
          this.loading = false;
          return EMPTY;
        })
      );
  }

  setPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.loadResults();
  }
}
