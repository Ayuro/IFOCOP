import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AtomicElement } from '../../types/atomic-element.type';

@Component({
  selector: 'app-atomic-element',
  standalone: true,
  imports: [],
  templateUrl: './atomic-element.component.html',
  styleUrl: './atomic-element.component.scss'
})
export class AtomicElementComponent {
  @Input({required:true}) atomicElement!: AtomicElement;
  @Output() picked = new EventEmitter<AtomicElement>();

  pick() {
    console.log('emit', this.atomicElement);

    this.picked.emit(this.atomicElement);
  }
}
