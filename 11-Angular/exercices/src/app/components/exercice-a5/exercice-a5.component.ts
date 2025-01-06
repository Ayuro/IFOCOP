import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-exercice-a5',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './exercice-a5.component.html',
  styleUrl: './exercice-a5.component.css'
})
export class ExerciceA5Component {
  heure = new Date().getHours();
  annee = new Date().getFullYear();

  ftBissextile(annee: number) {
    if (annee % 4 == 0 && annee % 100 != 0 || annee % 400 == 0) {
      return true;
    } else
      return false;
  }
}
