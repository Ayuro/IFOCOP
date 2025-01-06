import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice-b3',
  standalone: true,
  imports: [],
  templateUrl: './exercice-b3.component.html',
  styleUrl: './exercice-b3.component.scss'
})
export class ExerciceB3Component {
  compteur = 0;
  texteBouton = 'Incrémentation';
  private incrementation = true;

  modifier(): void {
    if (this.incrementation) {
      console.log('this.compteur : ',++this.compteur);
      if (++this.compteur >= 10) {
        this.incrementation = false;
        this.texteBouton = 'Decrémentation';
      }
    } else {
      if (--this.compteur <= 0) {
        this.incrementation = true;
        this.texteBouton = 'Incrémentation';
      }
    }
  }
}
