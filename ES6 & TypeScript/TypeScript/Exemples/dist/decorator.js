"use strict";
class MacBook {
    constructor() {
        this.cost = () => {
            return 1000;
        };
        this.screenSize = () => {
            return 15;
        };
    }
}
;
/*Decorator 1*/
const Memory = (macbook) => {
    const originalCost = macbook.cost();
    macbook.cost = function () {
        return originalCost + 75;
    };
};
/*Decorator 2*/
const Engraving = (macbook) => {
    const originalCost = macbook.cost();
    macbook.cost = function () {
        return originalCost + 200;
    };
};
/*Decorator 3*/
const Insurance = (macbook) => {
    const originalCost = macbook.cost();
    macbook.cost = function () {
        return originalCost + 250;
    };
};
const myMacBook = new MacBook();
console.log('myMacBook: ', myMacBook);
console.log('Coût originel de mon MacBook sans option : ', myMacBook.cost());
Memory(myMacBook);
// console.log('Coût de mon MacBook avec plus de mémoire : ', myMacBook.cost());
Engraving(myMacBook);
// console.log('Coût de mon MacBook avec une gravure : ', myMacBook.cost());
Insurance(myMacBook);
// console.log('Coût de mon MacBook avec une assurance : ', myMacBook.cost());
console.log('Coût total de mon MacBook avec toutes les optoins: ', myMacBook.cost());
console.log('Taille de mon écran : ' + myMacBook.screenSize() + ' pouces.'); //15
