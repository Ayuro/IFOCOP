// Asynchronous
// Javascript
// And
// XML

// 1- Callback functions
// 2- Asynchronous coding (Promises)
// 3- JSON + JSON.parse(), JSON.stringify()
// 4- XHR GET
// 5- XHR POST (04/07)
// 6- Jquery $ajax() (04/07)
// 7- Fetch API (04/07)

// Une fonction de rappel (callback function) est tout simplement une fonction qui en appelle une autre...

const callbackFunction = () => {
  console.log('Je suis une fonction de rappel !');
};

const mainFunction = (otherFunction) => {
  return otherFunction();
};

mainFunction(callbackFunction);

// Un petit exemple de closure...
const firstFunction = (num1, num2) => {
  return function (num3, num4) {
    return function (num5, num6) {
      return num1 + num2 + num3 + num4 + num5 + num6;
    };
  };
};

// que l'on invoque de la manière suivante :
firstFunction(1, 2)(3, 4)(5, 6);

const result1 = firstFunction(1, 2);
const result2 = firstFunction(1, 2)(3, 4);
const result3 = firstFunction(1, 2)(3, 4)(5, 6);
console.log('result1: ', result1);
console.log('result2: ', result2);
console.log('result3: ', result3);

const myButton = document.getElementById('click-me');

const myCustomListener = (event) => {
  event.preventDefault();
  console.log('event: ', event);
};

myButton.addEventListener('click', myCustomListener);
function countToNumber() { for (let i = 0; i < 150000; i++) { console.log(i) } };
// Premier exemple de code asynchrone sans utiliser de promesse, en utilisant la fonction setTimeout()...
const pseudoAsyncFunction = () => {
  setTimeout(() => {
    alert('Code "asynchrone" exécuté');
  }, 1000);

  console.log('Premier log en dehors de la fonction setTimeout');
  countToNumber();
  console.log('Deuxième log en dehors de la fonction setTimeout');
  console.log('Troisième log en dehors de la fonction setTimeout');
};

// pseudoAsyncFunction();

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Promesse résolue');
    reject('Promesse rejetée');
  }, 3000);
});

console.log('myPromise: ', myPromise);

myPromise
  .then((data) => {
    console.log('data: ', data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('Tout est terminé !');
  })

// Petit rappel sur la valeur de this dans le contexte d'une fonction flèche et celui d'une fonction standard...
const myObject = {
  blabla: 'Toto',
  sayHello() {
    console.log('sayHello: ', this.blabla);
  },
  sayHi: () => {
    console.log('sayHi: ', this.blabla);
  }
}

// Petit point sur la destructuration d'assignation...
var obj = {
  myName: 'Toto',
  sayName() {
    console.log('my name is ', this.myName);
    return true;
  }
};

var objName = obj.myName;
// var { myName: customName } = obj;
var { myName } = obj;
var objReference = obj;
var objCopy = { ...obj };

obj.myName = 'Titi';

obj.sayName();
objReference.sayName();
objCopy.sayName();
console.log('objName = ', objName, 'myName = ', myName, 'customName = ', customName);

myObject.sayHello();
myObject.sayHi();

// Petit point sur Object.freeze, qui permet de figer totalement un objet,
// empêchant par la même la modification, l'ajout ou la suppression de ses propriétés.
const CONSTANTS = Object.freeze({
  url: 'http://localhost:5000',
  apiKey: 'sqmlkfjsmkd-45454d-45q7sdf-5q4sdf4',
  password: '123456789',
  email: 'test@yopmail.com'
});


const firstArray = ['Hello', 'world', '!'];
console.log('firstArray: ', firstArray);
console.log('...firstArray', ...firstArray);

const secondArray = ['coucou', 'tout', 'le', 'monde'];
const thirdArray = ['coucou', ...firstArray];
console.log('thirdArray with rest operator: ', thirdArray);

const fourthArray = [...firstArray, ...secondArray];
console.log('fourthArray: ', fourthArray);

const { test } = fourthArray;


const standardAsyncFunction = (randomNumber) => {
  console.log('randomNumber value: ', randomNumber);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomNumber % 2 === 0) resolve('Promesse résolue');
      return reject('Promesse échouée');
    }, 1000);
  })
};

standardAsyncFunction(Math.round(Math.random() * 10))
  .then((resolvedValue) => console.log(resolvedValue))
  .catch((rejectedValue) => console.log(rejectedValue))
  .finally(() => console.log('Promise fulfilled'));


const modernAsyncFunction = async (randomNumber) => {
  console.log('randomNumber value: ', randomNumber);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomNumber % 2 === 0) resolve('Promesse résolue');
      return reject('Promesse échouée');
    }, 1000);
  })
};

// Syntaxe avec un top-level await (uniquement avec nodejs 18+)
/* try {
  await modernAsyncFunction();
} catch (error) {
  console.error(error);
} */

const getResult = async (randomNumber) => {
  let result = 'Résultat non modifié';

  try {
    result = await modernAsyncFunction(randomNumber);
    console.log('result inside try block: ', result);
  } catch (error) {
    console.log('promesse échouée : ', error);
  } finally {
    console.log('Promesse terminée.');
  }

  console.log('result before final return: ', result);
  return result;
};

getResult(Math.round(Math.random() * 10));


const tryCatchFunction = (randomNumber) => {
  try {
    if (randomNumber % 2 === 0) {
      return true;
    }
    throw new Error('Nombre impair, pas possible !');
  } catch (error) {
    console.error(error);
  }
}

try {
  throw new Error('Quelque chose a planté');
} catch (choucrouteGarnie) {
  console.log('Erreur attrapée: ', choucrouteGarnie);
}

// Petit point sur le format données JSON... Javascript Object Notation
const myJsonDoc = {
  "firstname": "David",
  "lastname": "Martins",
  "isAdmin": false,
  "address": {
    "zipCode": 75005,
    "city": "Paris",
    "street": "Rue de la richesse",
    "number": 42
  },
  "booksRead": [
    {
      "title": "The Lord of the Rings: The Fellowship of the Ring",
      "author": "JR. Tolkien"
    },
    {
      "title": "Harry Potter",
      "author": "JK Rowling"
    },
    {
      "title": "Bouquin numéro 3",
      "author": "Someone"
    }
  ]
};

console.log(myJsonDoc['firstname']);
console.log(myJsonDoc.firstname);

console.log('myJsonDoc: ', myJsonDoc);

const myStringifiedJsonDoc = JSON.stringify(myJsonDoc);
console.log('myStringifiedJsonDoc: ', myStringifiedJsonDoc);

const myParsedStringifiedJsonDoc = JSON.parse(myStringifiedJsonDoc);
console.log('myParsedStringifiedJsonDoc: ', myParsedStringifiedJsonDoc);


// XHR
// see xhr.js file

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Si une méthode retourne this, il est alors possible de chaîner
  // les méthodes.
  sayName() {
    console.log(`Je m'appelle ${this.name}.`);
    return this;
  }

  sayAge() {
    console.log(`J'ai ${this.age} ans.`);
    return this;
  }
};

var david = new Student('David', 38);

// Possible uniquement parce que sayAge retourne this, de même que sayName...
david.sayAge().sayName().sayAge();

// Fetch example

window.document.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById('resultTitle');
  const body = document.getElementById('resultBody');
  const getButton = document.getElementById('get-data');
  const postDataForm = document.getElementById('post-data-form');
  const userId = 95;
  let counter = 1;

  getButton.addEventListener('click', async (_event) => {
    const method = 'GET';
    const fetchUrl = `https://jsonplaceholder.typicode.com/posts/${counter}`;

    try {
      const response = await fetch(fetchUrl, { method });
      const jsonData = await response.json();

      if (Object.keys(jsonData).length) {
        counter++;
        title.innerHTML = jsonData.title;
        body.innerHTML = jsonData.body;
      } else {
        counter = 1;
        title.innerHTML = 'Aucune donnée';
        body.innerHTML = 'Réessayez ultérieurement.';
      }
    } catch (error) {
      console.error(error);
    }
  });

  postDataForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const resultDiv = document.getElementById('display-post-result');

    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

    const formData = new FormData(postDataForm);
    const jsonData = {};
    formData.append('userId', userId);

    for (const [key, value] of formData.entries()) {
      console.log(`{ clé: ${key}, valeur: ${value} }`);
      console.log(key, value);
      jsonData[key] = value;
    }

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(jsonData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const jsonResponse = await response.json();

      const postDivElt = document.createElement('div');
      const postTitle = document.createElement('h3');
      const postBody = document.createElement('p');
      const spaceElt = document.createElement('br');
      const separator = document.createElement('hr');

      postTitle.innerText = jsonResponse.title;
      postBody.innerText = jsonResponse.body;

      postDivElt.append(postTitle, spaceElt, postBody, separator);
      resultDiv.appendChild(postDivElt);
      postDataForm.reset();
    } catch (error) {
      // En temps normal, la gestion des erreurs serait plus poussée...
      console.error(error);
    }
  });
});

const result = await fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/ilots-de-fraicheur-equipements-activites/records?limit=1', {
  method: 'GET'
});
const data = await result.json();
