import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { inject } from '@angular/core';

@Component({
  selector: 'app-exercice-a7',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './exercice-a7.component.html',
  styleUrl: './exercice-a7.component.css'
})
export class ExerciceA7Component {

  voitures = [
    {model: 'gtr nismo', power: '441hp', price: 121090, date: 1718402400000},
    {model: 'challerger', power: '375hp', price: 76590, date: 1675983600000},
    {model: 'megane sport gt', power: '205hp', price: 32100, date: 1442181600000}
  ]

  ftToUpperFirst(model: string): string {
    return model.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  }
  ftToUpperAll(model: string): string {
    return model.split(' ').map(word => word.slice(0).toUpperCase()).join(' ');
  }

  ftToDate(timestamp: number): string {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
