import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-restaurants-home',
  standalone: true,
  imports: [],
  templateUrl: './restaurants-home.component.html',
  styleUrl: './restaurants-home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantsHomeComponent {

}
