const object1 = {
  a: 'somestring',
  b: 42
};

for (let [cle, valeur] of Object.entries(object1)) {
  console.log(`${cle}: ${valeur}`);
}

// expected output:
// "a: somestring"
// "b: 42"
// order is not guaranteed



var obj = { toto: "truc", machin: 42 };
console.log(Object.values(obj)); // ['truc', 42]

// un objet semblable à un tableau
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// un objet semblable à un tableau
// dont les clés sont ordonnées aléatoirement
// lorsque des clés numériques sont utilisées, les valeurs sont
// renvoyées selon l'ordre numérique des clés
var un_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(un_obj)); // ['b', 'c', 'a']

// getToto est une propriété qui
// n'est pas énumérable
var mon_obj = Object.create({}, { getToto: { value: function() { return this.toto; } } });
mon_obj.toto = "truc";
console.log(Object.values(mon_obj)); // ['truc']

// un argument de type primitif sera
// converti en un objet
console.log(Object.values("toto")); // ['t', 'o', 't', 'o']

const person = {
isHuman: false,
printIntroduction: function () {
  console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
},
};

const me = Object.create(person);

console.log('me: ', me, 'person: ', person, 'me.prototype: ', Object.getPrototypeOf(me), 'me === person? ', person === Object.getPrototypeOf(me));
me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"

const CONSTANTS = Object.freeze({
adminPwd: 'dlkjd7554dflsdfjµ*$^4584',
domain: 'google.com',
obj1: Object.freeze([12, Object.freeze({test: 'Hello'}), 69])
});

CONSTANTS.obj1[1].test = 'World';

console.log('CONSTANTS: ', CONSTANTS);
