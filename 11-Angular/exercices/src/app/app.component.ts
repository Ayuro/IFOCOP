import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExerciceA1Component } from './components/exercice-a1/exercice-a1.component';
import { ExerciceA2Component } from './components/exercice-a2/exercice-a2.component';
import { ExerciceA3Component } from "./components/exercice-a3/exercice-a3.component";
import { ExerciceA4Component } from "./components/exercice-a4/exercice-a4.component";
import { ExerciceA5Component } from "./components/exercice-a5/exercice-a5.component";
import { ExerciceA7Component } from "./components/exercice-a7/exercice-a7.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExerciceA1Component, ExerciceA2Component, ExerciceA3Component, ExerciceA4Component, ExerciceA5Component, ExerciceA7Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
}
