import { DatePipe } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { NumbersService } from '../../services/numbers.service';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})
export class ClockComponent implements OnDestroy {
  date = new Date();
  intervalId = 0;
  numbersService = inject(NumbersService);

  constructor() {
    console.log('Dans ClockComponent', this.numbersService.rand);

    this.intervalId = window.setInterval(() => {
      console.log('tic toc');
      this.date = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    console.log('Destruction de l\'horloge');
    clearInterval(this.intervalId);
  }
}
