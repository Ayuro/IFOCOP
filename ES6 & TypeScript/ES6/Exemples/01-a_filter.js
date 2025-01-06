const mots = ['ciel', 'lune', 'lentille', 'matin', 'loir'];

const resultat = mots.filter(lemot => lemot.substring(0,1) == 'l');

console.log(resultat);
// [ "lune", "lentille", "loir" ]

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

const numberArray = [1, 52, 32, 16, 19];

const numberArrayTimes2 = numberArray.map((num) => {return num * 2}) // ou .map(num => num * 2);

console.log('numberArray: ', numberArray, 'numberArrayTimes2: ', numberArrayTimes2)

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

console.log(sumWithInitial);

/**
// Creation d'une fonction basique:
function myArrowFn() {};
// La même fonction mais en "flèche", c'est juste la façon de faire qui est différente
const myArrowFn = () => {};
*/