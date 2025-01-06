let uneChaineDeCaracteres: string = 'Une chaîne de caractères';
let unNombre: number = 42;
let unBooleen: boolean = true;
let unBooleenOuUnNombre: boolean | number = 42;
unBooleenOuUnNombre = false;
let test: () => void = () => undefined;

// unBooleen = 'Hihihii je suis.. eh attends voir !'; // Incorrect car unBooleen est de type "boolean" et sa valeur ne peut donc pas être réattribué avec un autre type que booléen.

type FnWhichReturnsNothing = (name: string) => void; // Ce type représente une fonction qui ne prend pas d'argument et ne retourne rien.

// On définit un type Typescript réutilisable
export interface Person {
  firstname: string,
  lastname: string | undefined,
  age: number,
  email: string,
  sayName: FnWhichReturnsNothing
}

const anneLaure: Person = {
  firstname: 'Anne-Laure',
  lastname: 'Charles',
  age: 25,
  email: 'annelaure.charles@gmail.com',
  sayName(name: string) {
    console.log(`Coucou je m'appelle ${name}`);
  }
}

console.log('anneLaure: ', anneLaure, anneLaure.sayName('Anne-Laure'));

// Voir Record<K,T>, ReturnType<T>

interface Props {
  readonly a: number;
  b?: string;
}
 
const obj: Props = { a: 5 };
// obj.a = 45; // ne fonctionnera pas car la propriété est en lecture seule
const obj1: Props = { a: 1, b: 'Coucou' };
obj1.b = 'World';

console.log('obj: ', obj, 'obj1: ', obj1);
 
// const obj2: Required<Props> = { a: 5 }; // Ne fonctionne pas car on a défini que toutes les propriétés de Props étaient requises pour la création de obj2 en utilisant le type utilitaire Required<T>

interface Todo {
  title: string;
  description: string;
}
 
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
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

interface Post {
  readonly userId: number,
  readonly id: number,
  title: string,
  completed: boolean
};

type MyPromiseType = Readonly<Awaited<Promise<Post>>>;

const awaitedPromise = async (url: string): Promise<Post>  => {
  const fetchedData: Response = await fetch(url);
  const jsonData: MyPromiseType = await fetchedData.json();
  // jsonData.title = 'Toto'; // Impossible car nous avons défini que toutes les propriétés du type passé en argument au type utilitaire Readonly sont read only (non modifiables).
  console.log('Data received: ', jsonData);
  return jsonData;
};

// En assignant la valeur de la propriété "module" du fichier tsconfig.json à "ES2022" ou "ESNext", on peut utiliser le mot-clé await au niveau global (sans avoir à l'imbriquer dans une fonction asynchrone) et donc faire la chose suivante :

await awaitedPromise('https://jsonplaceholder.typicode.com/todos/1');


// Sinon, on doit créer une fonction synchrone, qui va retourner une fonction asynchrone qui elle-même va await la valeur de retour de la fonction awaitedPromise avant de retourner les données reçues...
const displayData = (dataFetchingFn: (url: string) => Promise<Post>): (url: string) => Promise<Post> => {
  return async (url: string) => {
    const data: Post = await dataFetchingFn(url);
    console.log('Data received: ', data);
    return data;
  }
}

displayData(awaitedPromise)('https://jsonplaceholder.typicode.com/todos/1');


type PersonWithoutLastname = Omit<Person, 'lastname'>;
type SimplePerson = Pick<Person, 'firstname' | 'lastname'>;
type SpeechlessPerson = Omit<Person, 'sayName'>;

const personneStandard: Person = {
  firstname: 'Alex',
  lastname: 'Masson',
  age: 36,
  email: 'alexandre.masson@virtuoworks.com',
  sayName() {
    console.log(`Bonjour je m'appelle ${this.firstname} !`);
  }
}

const personneSansNomDeFamille: PersonWithoutLastname = {
  firstname: 'Aurore',
  age: 38,
  email: 'aurore.sifflet@ifocop.fr',
  sayName() {
    console.log(`Bonjour je m'appelle ${this.firstname} !`);
  }
}

const personneSimpliste: SimplePerson = {
  firstname: 'Wiliam',
  lastname: 'Mercier'
}

type Chelou = string | number | boolean | SpeechlessPerson;

type MonTableauChelou = Array<Chelou>;

let unTableauChelou: MonTableauChelou = [
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

const unTableauNormal: Array<string> = ['Toto', 'Titi', 'Tata', 'Tutu'];

let monPremierTuple: [number, string, Person];

monPremierTuple = [
  42,
  'Toto',
  {
    firstname: 'Juan',
    lastname: 'Gimenez',
    age: 47,
    email: 'juan.gimenez@ifocop.fr',
    sayName() { console.log(`Hello my name is ${this.firstname}!`)}
  }];

// Le type suivant est appelé "Type littéral" :
type CitrusFruits = "orange" | "citron" | "mandarine" | "clémentine" | "pamplemousse";

type FavouriteCitrusFruits = Exclude<CitrusFruits, "orange">;

type OliverFavFoods = "pistache" | "mandarine" | "raclette" | "kebab" | "citron";

type OlivierFavCitrusFruits = Extract<CitrusFruits, OliverFavFoods>;

enum CitrusFruitsList {
  oran = "orange",
  citr = "citron",
  mand = "mandarine",
  clem = "clémentine",
  pamp = "pamplemousse"
};

const citron: CitrusFruits = CitrusFruitsList.citr;

type ErrorTypes = 401 | 402 | 403 | 404 | 503 | 301 | 307 | 302 | 308;

type WriteUserRole = 'Admin' | 'User';

type MyFirstTypeFnType = (firstname: string, lastname: string) => string;

type MyFirstTypeFnParameters = Parameters<(firstname: string, lastname: string) => string>;

const myFirstTypedFn = (firstname: string, lastname: string): string => {
  console.log('function arguments: ',);
  return `${firstname} ${lastname}`;
};

type myFirstTypeFnReturnType = ReturnType<MyFirstTypeFnType>;

console.log('Bonjour ' + myFirstTypedFn('Eli', 'Azoura') + ' !');

const hw: string = 'Hello World!';
let unknownVar: unknown;
unknownVar = hw;
console.log('longueur de la chaîne de caractères : ', (<string>unknownVar).length);
unknownVar = 42;
console.log('Voici mon nombre : ', (isNaN(<number>unknownVar))); // Sans le type casting, TypeScript ne sait pas que notre variable unknownVar est de type number, même si nous avons réassigné sa valeur une ligne plus haut.

interface CatInfo {
  age: number;
  breed: string;
  isSleepy: boolean;
}
 
type CatName = "MiFfy" | "BORis" | "MorDRed" | "OliVIer";

const partialCats: Record<Lowercase<CatName>, Partial<Readonly<CatInfo>>> = {
  mordred: { age: 16, breed: "British Shorthair" },
  boris: { age: 5, breed: "Maine Coon" },
  miffy: { age: 10, breed: "Persian" },
  olivier: { age: 40, breed: "Animus Watchus", isSleepy: true}
};
 
console.log(partialCats.olivier);

type Aurore = Record<string, string | boolean>;

const aurore: Aurore = {
  hasQuestion: true,
  isSleepy: false,
  firstname: 'Aurore',
  lastname: 'Sifflet',
  42: 'Yeah'
}

console.log('Aurore: ', aurore);

const firstFunction = (arg1: string): (arg2: string) => (arg3: string) => string => {
  return (arg2: string) => {
    return (arg3: string) => {
      console.log(`${arg1}, ${arg2}, ${arg3}`);
      return `${arg1}, ${arg2}, ${arg3}`;
    }
  }
};

firstFunction('Titi')('Tata')('Toto');