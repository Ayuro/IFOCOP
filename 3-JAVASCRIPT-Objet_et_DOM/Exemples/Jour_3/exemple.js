"use strict";

/** Variables */
var maVariable;

/** Types de données */

// Primitifs

// Nombre / Number
maVariable = 99;
maVariable = -99;
maVariable = NaN;
maVariable = Infinity;
maVariable = 0.99;

// Chaîne de caractère / String
maVariable = "Hello World !";
maVariable = "Hello World !";
maVariable = `Hello World !`;

// Booléen / Boolean
maVariable = true;
maVariable = false;

// Utiles pour les opérations logiques / opérateurs logiques
// ex:
maVariable = 56 === 73; // ici on assigne false à maVariable
maVariable = 56 < 73; // ici on assigne true à maVariable

// Complexes

// Fonctions / Function
// Ici une fonction anonyme assignée à une variable
maVariable = function (/** Ici des arguments */) {
  // ici des instructions
  // cette fonction peut retourner une valeur avec return
};
// La variable maVariable contient une référence (adresse en mémoire) de la fonction

// Objets / Objects

// - Soit Déclaration littérale (littéralement un objet représenté par les 2 {})
maVariable = {};
// Quand on écrit une instruction qui entraîne la création d'un objet en mémoire,
// par exemple ici avec les 2 accolades, on dit qu'on a un "instance" de l'objet en
// mémoire.

// - Soit on a besoin d'une fonction constructeur et du mot-clé new
var MaFonctionConstructeur;
// Par convention le nom de la variable ou de la propriété à laquelle on assigne une
// fonction constructeur commence toujours pas une majuscule :
MaFonctionConstructeur = function () {
  // Ici on peut utiliser le mot-clé this pour pointer sur l'objet qui
  // sera créé à l'aide de cette fonction constructeur. Par exemple :
  this.unePropriete = "une valeur";
};
// Utilisation de la fonction constructeur pour "instancier" un objet
// On utilise le mot-clé new :
maVariable = new MaFonctionConstructeur();
// maVariable contient une instance, c'est à dire un objet, fabriqué à partir
// de la fonction constructeur MaFonctionConstructeur
// Comme pour les fonctions, le objets sont assignés par référence. C'est à dire
// que dans les variables le moteur assigne toujours l'adresse mémoire de l'objet
// pour éviter les duplications intempestives.

/** Objet fondamentaux / fonction constructeur Fondamentales */
// Exemple d'objet :
Math;
// Math contient des propriété et des méthodes.
// Exemple de fonction constructeur :
Date;
// Date est une fonction constructeur qu'on utilise avec new
// Exemple :
var maDate = new Date();
// maDate contient une objet qui contient les informations de la date du moment
// ou new Date() a été exécuté ainsi que des méthodes et de propriétés.

// Fonction constructeur String (fonction de coercition)

String;
maVariable = new String("un texte");
maVariable[0]; // u
//et on peut utiliser le mécanisme de coercition pour obtenir la même chose
// comme suit :
"un texte"[0]; // u
// La coercition est le mécanisme par lequel le moteur JS converti un type
// primitif en objet pendant la durée d'exécution d'une instruction.
"un texte".length; // donne le nombre d'indices de new String("un texte")

// Fonction constructeur Number (fonction de coercition)

Number;
maVariable = new Number(99);
// ou
(99).toString(); // conversion momentanée de 99 en new Number(99)
// return '99'

// Fonction constructeur Boolean (fonction de coercition)

Boolean;
maVariable = new Boolean(false);
// ou
false.toString(); // conversion momentanée de false en new Boolean(false)
// return 'false'

// Fonction constructeur fondamentales classiques

// Fonction constructeur Function
// En JavaScript, les fonctions sont des objets exécutables
// Créées à partir de la fonction constructeur fondamentale Function :
var maFonction = new Function(
  'var message = "Ceci est un message"; alert(message);'
);
maFonction; // est un objet de type Function
maFonction(); // cet objet est exécutable

// Le même résultat, le même objet de type Function peut être créé
// en utilisant le mot clé function :
maFonction = function () {
  var message = "Ceci est un message";
  alert(message);
};
maFonction; // est un objet de type Function
maFonction(); // cet objet est exécutable

// Fonction constructeur Object
// En JavaScript, les objets littéraux sont créés à partir
// de la fonction constructeur fondamentale Object :
var monObjet = new Object({ propriete1: 10, propriete2: false });
monObjet.propriete1; // 10
monObjet.propriete2; // false

// La notation littérale avec uniquement des {} est une version
// simplifiée de l'utilisation de la fonction constructeur Object
// Exemple :
monObjet = { propriete1: 10, propriete2: false };
// est la version simplifiée de
// monObjet = new Object({ propriete1: 10, propriete2: false });

// Fonction constructeur Array
maVariable = new Array("Bonjour", "les", "Amis");
// Cette fonction constructeur peut-être utilisée de fonction simplifiée
// avec les symboles []. On peut écrire :
maVariable = ["Bonjour", "les", "Amis"]; // est la même chose que d'écrire new Array("Bonjour", "les", "Amis");

// Exemple de fonction constructeur qui permet
// de créer des objet dont la structure interne
// est différente en fonction de la valeur d'argument
// fournie :
var IncubateurDeClone = function (estUnCloneDesBobaFett) {
  if (estUnCloneDesBobaFett) {
    this.estUnMechant = "Oui c'est un mechant";
  } else {
    this.estUnGentil = "Oui c'est un gentil";
  }
};

var unCloneMechant = new IncubateurDeClone(true);
var unCloneGentil = new IncubateurDeClone(false);

unCloneMechant.estUnMechant; //existe
// unCloneMechant.estUnGentil; // n'existe pas

// unCloneGentil.estUnMechant; // n'existe pas
unCloneGentil.estUnGentil; //existe

/** Les prototype */
// Javascript on peut faire de l'héritage d'objets
// Un objet peut servir "d'ancêtre" commun à d'autres objet
// La bonne pratique consiste à toujours avoir un prototype
// dans lequel on retrouvera les méthodes d'une famille d'objet.

// Constructeur qui contient la définition des propriétés propres des abeilles

var OeufdeReine = function (sonMetier) {
  this.couleurs = ["jaune", "noire"];
  this.metier = sonMetier;
  this.ailes = 2;
};

// Assignation un objet littéral en tant que prototype de objet qui seront
// créés à l'aide du contructeur

/*
var objetQuiMeSertDePrototype = {
  vole: function () {
    alert("Bzzzzzz !");
  },
  atterrit: function () {
    alert("Bzzzzzz mais moins fort.");
  },
  quelEstMonMetier: function () {
    alert(this.metier);
  },
};

OeufdeReine.prototype = objetQuiMeSertDePrototype;
*/
// La bonne pratique consiste plutôt à enrichir l'objet qui
// est déjà présent dans la propriété .prototype avec les méthodes
// dont les instance de ma fonction constructeur auront besoin :
OeufdeReine.prototype.vole = function () {
  alert("Bzzzzzz !");
};

OeufdeReine.prototype.atterrit = function () {
  alert("Bzzzzzz mais moins fort.");
};

OeufdeReine.prototype.quelEstMonMetier = function () {
  alert(this.metier);
};

var a1 = new OeufdeReine("ouvrière");
var a2 = new OeufdeReine("guerrière");
var a3 = new OeufdeReine("nourricière");

window.document.body.onload = function () {
  // cette fonction est exécutée à l'affichage du modèle objet du document.
  window.console.dir("Modèle Objet du Document chargé et affiché !");
  window.document.body.style.backgroundColor = "red";
  window.document.body.children[0]; // objet qui correspond à l'élèment p qui est le premier élèment sous le body
  window.document.body.children[0].onclick = function () {
    // Ici je déclare une fonction qui sera exécuté PAR le navigateur en réaction à
    // un click de souris de l'utilisateur sur l'élément
    // Ci-dessous j'accède à une propriété du sous objet body pour en modifier la valeur
    window.document.body.style.backgroundColor = "#0000FF";
    // Ici on est donc dans une méthode de l'objet qui est dans window.document.body.children[0]
    // Donc on peut utiliser this pour faire référence à cet objet. Par exemple ici, on change
    // la valeur de la propriété color de l'objet dans la propriété style de l'objet dans .children[0]
    this.style.color = "green";
  };

  // Sur tous les éléments du modèle objet du document on accès à une méthode addEventListener qui permet
  // de déclarer l'évènement et la fonction à exécuter en réaction à l'évènement. Par exemple :
  var aDeclencherAuClic = function () {
    this.style.fontWeight = "bold";
    this.style.fontFamily = "arial";
  };
  window.document.body.children[0].addEventListener("click", aDeclencherAuClic);
  // Le évènements utilisables avec addEventListener sont tous les évènements dont
  // les propriétés sont disponible sur l'élément (voir console) sans le préfixe "on"
  // Par exemple, l'évènement qui correspond à .onclick est "click", l'évènement qui
  // correspond à .onmouseover est "mouseover", etc...
};

// Évènement à utiliser : DOMContentLoaded. Le code associé à cet évènement
// est déclenché PAR le navigateur quand le navigateur à fini de charger
// le DOM en mémoire. On utilise généralement cet évènement pour déclencher
// tous le reste de notre code
window.addEventListener("DOMContentLoaded", function () {
  // Ici tous le code de mon programme en JavaScript qui manipule les éléments
  // du DOM.
  var referenceDeObjetQuiCorrespondAuP =
    window.document.getElementById("identifiantUnique");

  referenceDeObjetQuiCorrespondAuP.addEventListener("click", function () {
    window.alert("Cliqué sur le paragraphe identifié");
    var objetDeTypeH1 = window.document.createElement("h1");
    objetDeTypeH1.innerHTML = "Ceci est un titre H1";
    window.document.body.appendChild(objetDeTypeH1);
  });
});
