import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ClockComponent } from '../clock/clock.component';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgClass, ClockComponent],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  isBig = false;
  isImportant = true;
  afficher = false;

  constructor() {
    // setInterval(() => {
    //   this.isBig = !this.isBig;
    //   this.isImportant = !this.isImportant;
    // }, 1000);
  }

  basculer(toto: MouseEvent) {
    console.log(toto.clientX);
    this.afficher = !this.afficher;
  }

  toggleImportant() {
    this.isImportant = !this.isImportant
  }


}
