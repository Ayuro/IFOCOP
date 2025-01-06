// On crée une fonction qui prend ou non un ou plusieurs arguments et qui va retourner une fonction qui prend en argument un objet créé à partir d'une classe pour ensuite le modifier...
const ajouterUnOutil = (outilAAjouter) => {
  return function (valerieDamidot) {
    valerieDamidot.outils = [];
    if (Array.isArray(outilAAjouter)) {
      outilAAjouter.forEach(outil => {
        valerieDamidot.outils.push(outil);
      })
    } else {
      valerieDamidot.outils.push(outilAAjouter);
    }
  }
};


class ValerieDamidot {
  firstname = 'Valérie';
  lastname = 'Damidot';

  constructor(skills, job, humeur) {
    this.skills = skills;
    this.job = job;
    this.humeur = humeur;
  }

  maroufler() {
    console.log('Allez ! On maroufle tout ça !');
  }

  faireDuSport() {
    console.log('Pas moyen !');
  }
};

const valerieDamidotStandard = new ValerieDamidot(
  ['marfouler', 'tapisser', 'tout péter', 'arnarquer'],
  'Décoratrice d\'intérieur',
  'joviale'
);

console.log('valerieDamidotStandard: ', valerieDamidotStandard);

const equiperValerieDamidot = ajouterUnOutil(['marouflette', 'marteau', 'burin', 'tournevis', 'caisse à outils']);

equiperValerieDamidot(valerieDamidotStandard);

valerieDamidotStandard.faireDuSport();
valerieDamidotStandard.maroufler();

console.log('Outils à disposition de Valérie pour décorer: ', valerieDamidotStandard.outils);

const valerieDamidotPasPrete = new ValerieDamidot(
  ['marfouler', 'tapisser'],
  'Décoratrice d\'intérieur',
  'maussade'
);

console.log('Outils à disposition de l\'autre Valérie Damidot: ', valerieDamidotPasPrete.outils);


/* AUTRE EXEMPLE DE DECORATEUR trouvé sur https://addyosmani.com/blog/decorator-pattern/ */

/*
// En déclaration ES5 :
function MacBook(cost, size) {
  this.cost = function () {
    return cost;
  };
  this.screenSize = function () {
    return size;
  };
}

// Ce qui donne en ES6, en ajoutant des arguments : 
class MacBook {
  constructor(cost, size) {
    this.cost = function () {
      return cost;
    };
    this.screenSize = function () {
      return size;
    };
  }
}
*/

function MacBook() {
  this.cost = function () {
    return 1000;
  };
  this.screenSize = function () {
    return 15;
  };
};

/*Decorator 1*/
function Memory(macbook) {
  const originalCost = macbook.cost();
  macbook.cost = function () {
    return originalCost + 75;
  }
}
/*Decorator 2*/
function Engraving(macbook) {
  const originalCost = macbook.cost();
  macbook.cost = function () {
    return originalCost + 200;
  };
}

/*Decorator 3*/
function Insurance(macbook) {
  const originalCost = macbook.cost();
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

console.log('Coût total de mon MacBook avec toutes les optoins: ', myMacBook.cost())

console.log(myMacBook.screenSize()); //15

/* -------------------------------------------------------------------------- */

/**
 * @param {Array<string>} hobbies Un tableau de chaînes de caractères représentant la liste des hobbies de Olivier Machelart
 * @param {Array<string>} favouriteFoods Un tableau de chaînes de caractères représentant la liste des plats préférés de Olivier Machelart
 */
class OlivierMachelart {
  firstname = 'Olivier';
  lastname = 'Machelart';

  constructor(hobbies, favouriteFoods) {
    this.hobbies = hobbies;
    this.favouriteFoods = favouriteFoods;
  }

  get prenom() {
    return this.firstname;
  }

  /**
   * @param {string} valeur
   */
  set nouveauPrenom(valeur) {
    this.firstname = valeur;
    return this.firstname;
  }
};

// Créer deux décorateurs afin de donner à un objet créé à partir de la classe OlivierMachelart deux méthodes permettant respectivement d'énoncer ses hobbies ainsi que ses nourritures préférées.

const olivierMachelartMuet = new OlivierMachelart(
  ['lire des mangas', 'manger des pistaches', 'boire du coca-zéro', 'inventer de super cocktails'],
  ['pistaches', 'pâtes à la bolo maison', 'vrais sushi']
);

// console.log('olivierMachelartMuet: ', olivierMachelartMuet);

// Décorateur qui ajoute une méthode permettant de parler de ses hobbies...
const makeOlivierTalkAboutHobbies = () => {
  return function (olivierMachelart) {
    olivierMachelart.talkAboutHobbies = function () {
      if (Array.isArray(this.hobbies)) {
        console.log(`Mes hobbies sont : ${this.hobbies.join(', ')}`);
      } else {
        console.log(`Mes hobbies sont : ${this.hobbies}`);
      }
    };
  }
};

// Décorateur qui ajoute une méthode permettant de parler de ses plats préférés...
// Notez que ce décorateur ne retourne pas une fonction qui prend en argument un objet créé à partir d'une classe pour ensuite le modifier, mais prend directement en argument cet objet et le modifie...
const makeOlivierTalkAboutFavFoods = (olivierMachelart) => {
  olivierMachelart.talkAboutFavFoods = function () {
    if (Array.isArray(this.hobbies)) {
      console.log(`Mes plats préférés sont : ${this.favouriteFoods.join(', ')}`);
    } else {
      console.log(`Mes hobbies sont : ${this.favouriteFoods}`);
    }
  };
};

const allowOlivierToTalkAboutHobbies = makeOlivierTalkAboutHobbies();
allowOlivierToTalkAboutHobbies(olivierMachelartMuet);

// makeOlivierTalkAboutHobbies()(olivierMachelartMuet); // On peut également utiliser la méthode ci-dessus de cette manière, puisque la fonction makeOlivierTalkAboutHobbies retourne une fonction anonyme

makeOlivierTalkAboutFavFoods(olivierMachelartMuet);

olivierMachelartMuet.talkAboutHobbies();
olivierMachelartMuet.talkAboutFavFoods();

/**
 * 
 * @param {number} num1 Un nombre à additionner avec un autre
 * @param {number} num2 Un nombre à additionner avec un autre
 * @returns {number} La valeur de retour de l'addition des deux nombres
 */
const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
};