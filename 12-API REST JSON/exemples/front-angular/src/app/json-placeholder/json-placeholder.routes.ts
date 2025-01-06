import { Routes } from '@angular/router';
import { JsonPlaceholderAlbumComponent } from './json-placeholder-album/json-placeholder-album.component';
import { JsonPlaceholderAlbumsComponent } from './json-placeholder-albums/json-placeholder-albums.component';
import { JsonPlaceholderHomeComponent } from './json-placeholder-home/json-placeholder-home.component';
import { JsonPlaceholderSectionComponent } from './json-placeholder-section/json-placeholder-section.component';
import { JsonPlaceholderUserAlbumsComponent } from './json-placeholder-user-albums/json-placeholder-user-albums.component';
import { JsonPlaceholderUserPostsComponent } from './json-placeholder-user-posts/json-placeholder-user-posts.component';
import { JsonPlaceholderUserProfileComponent } from './json-placeholder-user-profile/json-placeholder-user-profile.component';
import { JsonPlaceholderUserComponent } from './json-placeholder-user/json-placeholder-user.component';
import { JsonPlaceholderUsersComponent } from './json-placeholder-users/json-placeholder-users.component';

export const jsonPlaceholderRoutes: Routes = [
  {
    path: '',
    component: JsonPlaceholderSectionComponent,
    children: [
      {
        path: '',
        title: 'JSONPlaceholder',
        component: JsonPlaceholderHomeComponent,
      },
      {
        path: 'users',
        title: 'Utilisateurs - JSONPlaceholder',
        component: JsonPlaceholderUsersComponent,
      },
      {
        path: 'users/:userId',
        title: 'Utilisateurs - JSONPlaceholder',
        component: JsonPlaceholderUserComponent,
        children: [
          {
            path: '',
            component: JsonPlaceholderUserProfileComponent,
          },
          {
            path: 'albums',
            component: JsonPlaceholderUserAlbumsComponent,
          },
          {
            path: 'posts',
            component: JsonPlaceholderUserPostsComponent,
          },
        ],
      },
      {
        path: 'albums',
        title: 'Albums - JSONPlaceholder',
        component: JsonPlaceholderAlbumsComponent,
      },
      {
        path: 'albums/:albumId',
        title: 'Albums - JSONPlaceholder',
        component: JsonPlaceholderAlbumComponent,
      },
    ],
  },
];
