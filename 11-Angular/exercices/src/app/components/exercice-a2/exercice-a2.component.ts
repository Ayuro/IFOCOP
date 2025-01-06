import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice-a2',
  standalone: true,
  imports: [],
  templateUrl: './exercice-a2.component.html',
  styleUrl: './exercice-a2.component.css'
})
export class ExerciceA2Component {
  sessions = [2020, 2021, 2022, 2023, 2024];

  maClasse = {
    name: "DEV-FS-P13-H21FL2",
    speciality: "Developpeur FullStack Javascript",
    subs: 9
  }
}
