import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NumbersService } from '../services/numbers.service';
import { ClockComponent } from './clock/clock.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ClockComponent, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  // encapsulation: ViewEncapsulation.ShadowDom
  providers: [
    {
      provide: NumbersService,
      useClass: NumbersService,
    },
  ],
})
export class HeaderComponent {
  numbersServiceDansHeader = inject(NumbersService);
  authService = inject(AuthService);
  title = 'Cours Angular';
  tagline = 'Un cours sur Angular';
  count = this.numbersServiceDansHeader.count;
  countSignal = this.numbersServiceDansHeader.countSignal;

  constructor() {
    console.log('Dans HeaderComponent', this.numbersServiceDansHeader.rand);
    console.log(this.numbersServiceDansHeader.add(6, 7));
  }
}
