import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice-a3',
  standalone: true,
  imports: [],
  templateUrl: './exercice-a3.component.html',
  styleUrl: './exercice-a3.component.css'
})
export class ExerciceA3Component {
  str: string = '';
  sayHi() {
    return "Bonjour !";
  }

  ftDivision(x: number, y: number) {
    return x / y;
  }

  ftConcat(tab: [string, string, string]) {
    return tab[0] + ' ' + tab[1] + ' ' + tab[2];
  }
}
