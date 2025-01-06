import { Component } from '@angular/core';
import { add } from '../../util/add.function';

@Component({
  selector: 'app-syntax',
  standalone: true,
  imports: [],
  templateUrl: './syntax.component.html',
  styleUrl: './syntax.component.scss'
})
export class SyntaxComponent {
  firsName = "Sébastien";
  lastName = "Guillon";
  today = new Date();
  sum = add(3,2);
  product = this.multiply(2, 3);
  elements = ['Hydrogène', "Hélium", "Lithium", "Béryllium"];
  condition = false;
  index = 999;
  border: string | null = null;
  display= "none";
  disabled = false;
  ariaLabel = "Hello World";

  constructor() {
    setInterval(() => {
      this.condition = !this.condition;
      this.disabled = !this.disabled;
    }, 1000);


    setTimeout(() => {
      this.elements.push('Bore');
      this.border= "10px solid #f08";
      this.display = "block";
    }, 3000);
  }

  multiply(a:number, b:number) {
    return a * b;
  }


}
