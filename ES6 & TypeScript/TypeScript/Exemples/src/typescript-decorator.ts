const ScellerLeConstructeur = (constructor: Function) => {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

// Ci-après un décorateur de méthode. Il prendra toujours en argument target, propertyKey, descriptor.
const ModifyTitle = (newTitle: string): (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) => void => {
  return (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) => {
    descriptor.value = function () {
      console.log(`Le titre est : ${newTitle}`);
    }
  }
}

const uppercase = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const result = originalMethod.apply(this, args);
    console.log('typeof result: ', typeof result);
    if (typeof result === "string") {
      console.log('Type of result is string');
      return result.toUpperCase();
    }
    console.log('Type of result is NOT string');
    return result;
  };
  console.log(JSON.stringify(descriptor));
  return descriptor;
}

@ScellerLeConstructeur
class RapportDeBug {
  type = "rapport";
  title: string;

  constructor(t: string) {
    this.title = t;
  }
  
    // @ModifyTitle('Un ouvrage magnifique !')
    @uppercase
    readTitle() {
      return this.title;
    }
};

console.log('Rapport de bug: ', RapportDeBug);

const monRapport = new RapportDeBug('Super titre');

console.log(monRapport.readTitle());
// Ci-dessous le typage des différents décorateurs principaux, comme décrits par TypeScript :

type ClasseDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;

type ProprieteDecorator = (target: Object, propertyKey: string | symbol) => void;

type MethodeDecorator = <T>(
  target: Object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<T>
) => TypedPropertyDescriptor<T> | void;

// Accessor Decorator = Method Decorator, globalement. Seule différence : les propriétés de l'objet 'descriptor' qui ne sont plus value, writable, enumerable, configurable comme pour une méthode, mais get, set, enumerable, configurable.

type ParametreDecorator = (
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) => void;

/* 
target: The prototype of the class (Object).
propertyKey: The name of the method (string | symbol).
descriptor: A TypedPropertyDescriptor — {
    enumerable?: boolean;
    configurable?: boolean;
    writable?: boolean;
    value?: T;
    get?: () => T;
    set?: (value: T) => void;
  }). 
*/


/* NE PAS RETIRER CE COMMENTAIRE
  @classDecorator
  class Bird {
    @propertyDecorator
    name: string;
    
    @methodDecorator
    fly(
      @parameterDecorator
        meters: number
    ) {}
    
    @accessorDecorator
    get egg() {}
  }

*/

function Immutable(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.set;

  descriptor.set = function (value: any) {
    return original!.call(this, { ...value })
  }
}

class C {
  private _point = { x: 0, y: 0 }

  @Immutable
  set point(value: { x: number, y: number }) {
    this._point = value;
  }

  get point() {
    return this._point;
  }
}

const c = new C();
const point = { x: 1, y: 1 }
c.point = point;

console.log(c.point === point); // Renvoie false car on ne peut pas modifier la valeur du setter point puisqu'il est décoré par immutable qui le rend immuable.

// REFAIRE L'EXEMPLE OLIVIER MACHELART EN TS DECORATOR

type IfocopStudent = {
  firstname: string,
  lastname: string,
  age: number,
  sayName: () => string
};

const student1: Partial<IfocopStudent> = {
  firstname: 'Toto',
  lastname: 'Dupont',
};

const student2: IfocopStudent = {
  firstname: 'Aurore',
  lastname: 'Sifflet',
  age: 38,
  sayName() {
    return `Coucou je suis ${this.firstname} !`
  }
};

const student3: IfocopStudent = {
  firstname: 'William',
  lastname: 'Mercier',
  age: 33,
  sayName() {
    return `Coucou je suis ${this.firstname} !`
  }
};

const student4: Partial<IfocopStudent> = {
  firstname: 'Titi',
  lastname: 'Dugenou',
  age: 24
};

const students: Array<Partial<IfocopStudent> | any> = [student1, 42, student4, 'Coucou', student2, true, student3];

const isRealIfocopStudent = (student: IfocopStudent | any): student is IfocopStudent => {
  return <IfocopStudent>student.sayName !== undefined;
  // return (student as IfocopStudent).sayName !== undefined; // Autre syntaxe pour la phrase du dessus
}

const calculateNumberOfRealIfocopStudents = (studentsArray: Array<Partial<IfocopStudent>>): number => {
  let numberOfIfocopStudents = 0;

  studentsArray.forEach(student => {
    if (isRealIfocopStudent(student)) {
      numberOfIfocopStudents += 1;
    }
  })

  return numberOfIfocopStudents;
};

console.log('Nombre de véritables étudiants de l\'IFOCOP: ', calculateNumberOfRealIfocopStudents(students));

type Post = {};
type MyPromiseType = Awaited<Promise<Post>>;

const awaitedPromise = async (url: string): Promise<Post>  => {
  const fetchedData: Response = await fetch(url);
  const jsonData: MyPromiseType = await fetchedData.json();
  return jsonData;
};

const displayData = (dataFetchingFn: (url: string) => Promise<Post>) => {
  return async (url: string) => {
    const data: Post = await dataFetchingFn(url);
    console.log('Data received: ', data);
    return data;
  }
}

displayData(awaitedPromise)('https://jsonplaceholder.typicode.com/todos/1');

const sealed = (constructor: Function) => {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

const log = (target: any, key: any, descriptor: any) => {
  console.log(`Logging key ${key}`);
  console.log(`Logging target ${JSON.stringify(target)}`);
  console.log(`Logging descriptor ${JSON.stringify(descriptor)}`);
  return descriptor;
};

const configurableProperty = (value: boolean) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => { descriptor.enumerable = value };

function enumerableProperty(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  };
}

@sealed
class BugReport {
  type = 'report';
  title: string;

  constructor(t: string) {
    this.title = t;
  }

  @log
  get _title() {
    console.log('The title is ' + this.title);
    return this.title;
  }
}

const report = new BugReport('Super titre');
report._title;

// Voir Partial<T>, Required<T>, Readonly<T>, Record<K,T>, Pick<K,T>, Omit<K,T>, ReturnType<T>
// https://www.typescriptlang.org/docs/handbook/utility-types.html

const logWithSeverity = (severity: string) => {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: [error: string]) {
      console.log(`[${severity}] ${args[0]}`);
      return originalMethod!.apply(this, args);
    };
  };
}

class Logger {
  @logWithSeverity("INFO")
  info(error: string) {
    // Log informational message
  }
  
  @logWithSeverity("ERROR")
  error(error: string) {
    // Log error message
  }
}

const logger = new Logger();
logger.info('Vous avez un nouveau message !'); // Logs "[INFO] info called"
logger.error('Uh oh ! Quelque chose d\'inattendu s\'est produit !'); // Logs "[ERROR] error called"


// Working class decorator example

function addProperty(propertyName: string, propertyValue: any) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        Object.defineProperty(this, propertyName, {
          value: propertyValue,
          writable: true,
          configurable: true,
          enumerable: true,
        });
      }
    };
  };
}

// Usage of the decorator
@addProperty('version', '1.0.0')
class MyClass {
  constructor(public name: string) {}

  sayHello() {
    console.log(`Hello, ${this.name}!`);
  }
}

// Create an instance of the class
const instance = new MyClass('John');

// Access the added property
console.log((instance as any).version); // Output: 1.0.0

// Use the original method
instance.sayHello(); // Output: Hello, John!

// Each class automatically produces an interface
// Mention parameter properties in constructor functions https://www.typescriptlang.org/docs/handbook/2/classes.html#parameter-properties

class MacBook {
  public cost: () => number;
  public screenSize: () => number;

  constructor() {
    this.cost = () => {
      return 1000;
    };
  
    this.screenSize = () => {
      return 15;
    };
  }
  
};

/*Decorator 1*/
const Memory = (macbook: MacBook) => {
  const originalCost: number = macbook.cost();
  macbook.cost = function () {
    return originalCost + 75;
  }
}
/*Decorator 2*/
const Engraving = (macbook: MacBook) => {
  const originalCost: number = macbook.cost();
  macbook.cost = function () {
    return originalCost + 200;
  };
}

/*Decorator 3*/
const Insurance = (macbook: MacBook) => {
  const originalCost: number = macbook.cost();
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

console.log('Coût total de mon MacBook avec toutes les options: ', myMacBook.cost())

console.log('Taille de mon écran : ' + myMacBook.screenSize() + ' pouces.'); //15