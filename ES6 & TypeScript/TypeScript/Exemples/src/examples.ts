const firstTypedVariable: string = 'Ma première variable typée !';

const firstTypedFunction = (text: string): string => {
  return text;
};

console.log(firstTypedFunction('Hello world!'));

type Post = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
};

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