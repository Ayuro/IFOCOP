import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NumbersService {
  rand = Math.random();
  count = 1;
  countSignal = signal(1);
  squaredCount = computed(() => {
    return this.countSignal() * this.countSignal();
  });

  constructor() {
    console.log('Service NumbersService instancié');
  }

  add(a: number, b: number) {
    return a * b;
  }

  inc() {
    this.count++;
    // this.countSignal.set(this.count);
    // attention ligne en dessous à la post incrémentation
    this.countSignal.update((valeurActuelle) => ++valeurActuelle);

    console.log('NumbersService', this.count);
  }
}
