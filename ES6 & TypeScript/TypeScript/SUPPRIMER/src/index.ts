enum Toto {
  a = 'aaaa',
  b = 'bbbb'
};

enum Tata {
  'a',
  'b'
};
const p2: HTMLParagraphElement = document.createElement('p');
console.log(p2);
const turlututu = {
  a: 'Toto',
  b: 'Tata'
} as const;

const test2 = Object.freeze({
  a: 'Mr',
  b: 'Mme'
});

let a: string;

// console.log('a: ', a);

// a = 1;

a = 'Toto';

const b = undefined;

// Generic typing
// type Type = any;
function identity<Type>(a: Type): Type {
  return a;
};

// function identity(a: any): any {
//   return a;
// };

identity(42);  // Typescript is infering the type from that of the argument
identity<string>('Toto');

const res = identity({ a: 'Toto', b: 'Tata', c: ['coucou', 42] });

// Type is defined upon execution of the code

class GenericNumber<NumType> {
  zeroValue?: NumType;
  add?: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

// typeof operator

function f() {
  return { x: 10, y: 3 };
}
/* type P = ReturnType<f>; */ /* 'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'? */

type P = ReturnType<typeof f>;

// We have access to all the differents types available in the DOM thanks to the lib.dom.d.ts file
const p: HTMLParagraphElement | null = document.querySelector('p');