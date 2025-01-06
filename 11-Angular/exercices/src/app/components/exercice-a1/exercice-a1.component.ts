import { Component } from '@angular/core';

export interface Questions {
  index: number;
  question: string;
  x: any;
  y: any;
}

@Component({
  selector: 'app-exercice-a1',
  standalone: true,
  imports: [],
  templateUrl: './exercice-a1.component.html',
  styleUrl: './exercice-a1.component.css'
})

export class ExerciceA1Component {
  
  titres: Questions[]  = [
    {index: 1, question: "Que donne la somme de 36344.789 et 5422.995432 ?", x: 36344.789, y: 5422.995432},
    {index: 2, question: "Que donne la concaténation de “Bonjour” et “le Monde” ?", x: "Bonjour", y: "le Monde"},
    {index: 3, question: "Quel est le reste de la division entière de 4321 par 1234 ?", x: 4321, y: 1234},
    {index: 4, question: "Est-il vrai que 0.000005 est strictement supérieur à 0.00005 ?", x: 0.000005, y: 0.00005},
    {index: 5, question: "Que donne l équation ((3x + 2) - (43x * (9y + 6))) / (2y - 7) si x vaut 4 et y vaut 19 ?", x: 4, y: 9}
  ]
}