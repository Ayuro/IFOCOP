import { Component, Input, numberAttribute } from '@angular/core';
import { elements } from '../../period-table';
import { AtomicElement } from '../../types/atomic-element.type';

@Component({
  selector: 'app-atomic-element-details',
  standalone: true,
  imports: [],
  templateUrl: './atomic-element-details.component.html',
  styleUrl: './atomic-element-details.component.scss',
})
export class AtomicElementDetailsComponent {
  // route = inject(ActivatedRoute);
  @Input({ transform: numberAttribute }) numero = 0;
  tableau = elements;
  elementAtomique?: AtomicElement;

  constructor() {
    console.log('AtomicElementDetailsComponent.constructor()');
  }

  ngOnInit() {
    console.log('AtomicElementDetailsComponent.ngOnInit()');

    this.elementAtomique = this.tableau.find((el) => el.number === this.numero);

    // Ancienne méthode avec le service ActivatedRoute :=
    // const numero = this.route.snapshot.params['numero'];
    // console.log('AtomicElementDetailsComponent numero', numero);

    // const num = parseInt(numero);
    // if (num) {
    //   const obj = this.tableau.find((el) => el.number === num);

    //   if (obj) {
    //     this.elementAtomique = obj;
    //   }
    // }
  }
}

// Fonctionnement de la liaison de données avec ngOnInit
/*
const inst = new AtomicElementDetailsComponent();
inst.numero; // Valeur par défaut (0)
// ...
// Angular :
inst.numero = 7; // (valeur du param dynamic dans la route)
// Ensuite, Angular appelle inst.ngOnInit();
*/
