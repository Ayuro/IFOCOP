import { Component, inject } from '@angular/core';
import { JsonPlaceholderActiveUserService } from '../json-placeholder-active-user.service';

@Component({
  selector: 'app-json-placeholder-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './json-placeholder-user-profile.component.html',
  styleUrl: './json-placeholder-user-profile.component.scss',
})
export class JsonPlaceholderUserProfileComponent {
  activeUserService = inject(JsonPlaceholderActiveUserService);
}
