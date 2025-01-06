import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  SectionMenuComponent,
  SectionMenuLink,
} from '../../layout/section-menu/section-menu.component';
import { RestaurantsApiService } from '../restaurants-api.service';

@Component({
  selector: 'app-restaurants-section',
  standalone: true,
  imports: [RouterOutlet, SectionMenuComponent, AsyncPipe],
  templateUrl: './restaurants-section.component.html',
  styleUrl: './restaurants-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantsSectionComponent {
  restaurantsApiService = inject(RestaurantsApiService);
  status$ = this.restaurantsApiService.getStatus();

  links: SectionMenuLink[] = [
    { url: '.', text: 'Intro', exact: true },
    { url: 'recherche', text: 'Recherche' },
    { url: 'liste', text: 'Liste' },
    { url: 'quartiers', text: 'Quartiers' },
  ];
}
