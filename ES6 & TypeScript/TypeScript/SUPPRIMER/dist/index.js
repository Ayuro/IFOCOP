"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Toto;
(function (Toto) {
    Toto["a"] = "aaaa";
    Toto["b"] = "bbbb";
})(Toto || (Toto = {}));
;
var Tata;
(function (Tata) {
    Tata[Tata["a"] = 0] = "a";
    Tata[Tata["b"] = 1] = "b";
})(Tata || (Tata = {}));
;
const test = {
    a: 'Toto',
    b: 'Tata'
};
const test2 = Object.freeze({
    a: 'Mr',
    b: 'Mme'
});
let a;
// console.log('a: ', a);
// a = 1;
a = 'Toto';
const b = undefined;
// Generic typing
// type Type = any;
function identity(a) {
    return a;
}
;
// function identity(a: any): any {
//   return a;
// };
identity(42); // Typescript is infering the type from that of the argument
identity('Toto');
const res = identity({ a: 'Toto', b: 'Tata', c: ['coucou', 42] });
// Type is defined upon execution of the code
class GenericNumber {
    zeroValue;
    add;
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
// typeof operator
function f() {
    return { x: 10, y: 3 };
}
//# sourceMappingURL=index.js.map