import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  numberAttribute,
  OnInit,
} from '@angular/core';
import {
  catchError,
  combineLatest,
  EMPTY,
  map,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { JsonPlaceholderAPIService } from '../json-placeholder-api.service';
import { JpAlbum, JpPhoto, JpUser } from '../json-placeholder.types';

@Component({
  selector: 'app-json-placeholder-album',
  standalone: true,
  imports: [AsyncPipe, LoadingComponent, SpinnerComponent],
  templateUrl: './json-placeholder-album.component.html',
  styleUrl: './json-placeholder-album.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonPlaceholderAlbumComponent implements OnInit {
  @Input({ transform: numberAttribute }) albumId = 0;
  jsonPlaceholderAPIService = inject(JsonPlaceholderAPIService);
  error: string | null = null;
  loading = true;
  albumData$: Observable<{
    album: JpAlbum;
    user: JpUser;
    photos: JpPhoto[];
  }> | null = null;

  ngOnInit(): void {
    this.albumData$ = this.jsonPlaceholderAPIService
      .getAlbum(this.albumId)
      .pipe(
        switchMap((album) =>
          combineLatest<[JpUser, JpPhoto[], JpAlbum]>([
            this.jsonPlaceholderAPIService.getUser(album.userId),
            this.jsonPlaceholderAPIService.getAlbumPhotos(album.id),
            of(album),
          ])
        ),
        tap(() => {
          this.loading = false;
        }),
        map(([user, photos, album]) => {
          console.log(`%c[] user, photos`, 'color:#cc9fec', user, photos);

          return {
            album,
            user,
            photos,
          };
        }),
        catchError((error) => {
          console.error(error);
          this.error = 'Impossible de charger l’album';
          this.loading = false;
          return EMPTY;
        })
      );
  }
}
