import { Component, inject } from '@angular/core';
import { AtomicElementComponent } from '../atomic-element/atomic-element.component';
import { elements } from '../../period-table';
import { MaDependance } from '../../ma-dependance';
import { AtomicElement } from '../../types/atomic-element.type';
import { NumbersService } from '../../services/numbers.service';

@Component({
  selector: 'app-period-table',
  standalone: true,
  imports: [AtomicElementComponent],
  templateUrl: './period-table.component.html',
  styleUrl: './period-table.component.scss'
})
export class PeriodTableComponent {
  numbersServiceAMoi = inject(NumbersService)
  elements: AtomicElement[] = elements;
  maDep = new MaDependance('Toto');

  constructor() {
    console.log('AtomicElementComponent', this.maDep.name);
    console.log('Dans AtomicElementComponent', this.numbersServiceAMoi.rand);

  }
  onPick(element: AtomicElement) {
    console.log('Parent', element);
  }
}
