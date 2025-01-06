console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => { return x + x }));
// expected output: Array [2, 4, 6]

// créer une instance d'Array à partir de l'objet arguments qui est semblable à un tableau
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);
// [1, 2, 3]


// Ça fonctionne avec tous les objets itérables...
// Set
const s = new Set(["toto", "truc", "truc", "bidule"]);
Array.from(s);
// ["toto", "truc", "bidule"]


// Map
const m = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(m);
// [[1, 2], [2, 4], [4, 8]]  

const mapper = new Map([["1", "a"], ["2", "b"]]);
Array.from(mapper.values());
// ["a", "b"] 

Array.from(mapper.keys());
// ["1", "2"]

// String
Array.from("toto");
// ["t", "o", "t", "o"]


// En utilisant une fonction fléchée pour remplacer map
// et manipuler des éléments
Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]


// Pour générer une séquence de nombres
Array.from({ length: 5 }, (v, k) => k);
// [0, 1, 2, 3, 4]


function myFunction() {
  console.log('arguments: ', arguments, 'arguments[0]: ', arguments[0]);
}
myFunction();
myFunction(1, 'Toto', true);