let uneChaineDeCaracteres = 'Une chaîne de caractères';
let unNombre = 42;
let unBooleen = true;
let unBooleenOuUnNombre = 42;
unBooleenOuUnNombre = false;
const obj = { a: 5 };
function updateTodo(todo, fieldsToUpdate) {
    return { ...todo, ...fieldsToUpdate };
}
const todo1 = {
    title: "organize desk",
    description: "clear clutter",
};
const updatedTodo = updateTodo(todo1, {
    title: 'clean up the house',
    // message: 'and do it quickly!' // Interdit car même si le type de cet objet est Partial<Todo> il faut néanmoins quand même que les propriétés spécifiées existent dans le type d'origine, à savoir Todo.
});
console.log('updatedTodo: ', updatedTodo);
;
const awaitedPromise = async (url) => {
    const fetchedData = await fetch(url);
    const jsonData = await fetchedData.json();
    // jsonData.title = 'Toto'; // Impossible car nous avons défini que toutes les propriétés du type passé en argument au type utilitaire Readonly sont read only (non modifiables).
    console.log('Data received: ', jsonData);
    return jsonData;
};
// En assignant la valeur de la propriété "module" du fichier tsconfig.json à "ES2022" ou "ESNext", on peut utiliser le mot-clé await au niveau global (sans avoir à l'imbriquer dans une fonction asynchrone) et donc faire la chose suivante :
await awaitedPromise('https://jsonplaceholder.typicode.com/todos/1');
// Sinon, on doit créer une fonction synchrone, qui va retourner une fonction asynchrone qui elle-même va await la valeur de retour de la fonction awaitedPromise avant de retourner les données reçues...
const displayData = (dataFetchingFn) => {
    return async (url) => {
        const data = await dataFetchingFn(url);
        console.log('Data received: ', data);
        return data;
    };
};
displayData(awaitedPromise)('https://jsonplaceholder.typicode.com/todos/1');
const personneStandard = {
    firstname: 'Alex',
    lastname: 'Masson',
    age: 36,
    email: 'alexandre.masson@virtuoworks.com',
    sayName() {
        console.log(`Bonjour je m'appelle ${this.firstname} !`);
    }
};
const personneSansNomDeFamille = {
    firstname: 'Aurore',
    age: 38,
    email: 'aurore.sifflet@ifocop.fr',
    sayName() {
        console.log(`Bonjour je m'appelle ${this.firstname} !`);
    }
};
const personneSimpliste = {
    firstname: 'Wiliam',
    lastname: 'Mercier'
};
let unTableauChelou = [
    'Toto',
    42,
    false,
    {
        firstname: 'Olivier',
        lastname: 'Machelart',
        age: 40,
        email: 'olivier.machelart@ifocop.fr'
    },
    45,
    true
];
// unTableauChelou.push(() => { return 'Coucou' }); // Interdit car le type Function ne fait pas partie du type Chelou
const unTableauNormal = ['Toto', 'Titi', 'Tata', 'Tutu'];
let monPremierTuple;
monPremierTuple = [
    42,
    'Toto',
    {
        firstname: 'Juan',
        lastname: 'Gimenez',
        age: 47,
        email: 'juan.gimenez@ifocop.fr',
        sayName() { console.log(`Hello my name is ${this.firstname}!`); }
    }
];
var CitrusFruitsList;
(function (CitrusFruitsList) {
    CitrusFruitsList["oran"] = "orange";
    CitrusFruitsList["citr"] = "citron";
    CitrusFruitsList["mand"] = "mandarine";
    CitrusFruitsList["clem"] = "cl\u00E9mentine";
    CitrusFruitsList["pamp"] = "pamplemousse";
})(CitrusFruitsList || (CitrusFruitsList = {}));
;
const citron = CitrusFruitsList.citr;
const myFirstTypedFn = (firstname, lastname) => {
    console.log('function arguments: ');
    return `${firstname} ${lastname}`;
};
console.log('Bonjour ' + myFirstTypedFn('Eli', 'Azoura') + ' !');
const hw = 'Hello World!';
let unknownVar;
unknownVar = hw;
console.log('longueur de la chaîne de caractères : ', unknownVar.length);
unknownVar = 42;
console.log('Voici mon nombre : ', (isNaN(unknownVar))); // Sans le type casting, TypeScript ne sait pas que notre variable unknownVar est de type number, même si nous avons réassigné sa valeur une ligne plus haut.
const partialCats = {
    mordred: { age: 16, breed: "British Shorthair" },
    boris: { age: 5, breed: "Maine Coon" },
    miffy: { age: 10, breed: "Persian" },
    olivier: { age: 40, breed: "Animus Watchus", isSleepy: true }
};
console.log(partialCats.olivier);
const aurore = {
    hasQuestion: true,
    isSleepy: false,
    firstname: 'Aurore',
    lastname: 'Sifflet',
    42: 'Yeah'
};
console.log('Aurore: ', aurore);
const firstFunction = (arg1) => {
    return (arg2) => {
        return (arg3) => {
            console.log(`${arg1}, ${arg2}, ${arg3}`);
            return `${arg1}, ${arg2}, ${arg3}`;
        };
    };
};
firstFunction('Titi')('Tata')('Toto');
export {};
