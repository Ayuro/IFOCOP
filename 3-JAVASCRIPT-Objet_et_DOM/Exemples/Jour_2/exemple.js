"use strict";

var emplacementMemoire; // par défaut undefined

//** Type de données */

// Type de données primitif
emplacementMemoire = 10; // Nombre : Number
emplacementMemoire = "texte"; // Chaîne de Car. : String
emplacementMemoire = false; // Booléén : Boolean

// Type de données complexes
emplacementMemoire = function () {}; // Fonction: Function
emplacementMemoire = {}; // Objet : Object

// On assigne une référence pour les type de données complexes
// Dans l'emplacement mémoire auquel on assigne un objet ou une fonction
// on ne stocke pas l'objet ou la fonction mais on stocke son adresse
// en mémoire. On appelle cette adresse une REFERENCE. Et quand on utilise
// la variable on POINTE vers l'objet ou la fonction.

/**Création d'objet*/
// - Notation littéral
// Déclaration objet à l'aide des symboles {}
var monNouvelObjet = {
  propriete1: 50, // Un propriété est une "variable dans un objet"
  propriete2: "texte",
  methode1: function () {}, // Une méthode est une "fonction dans une propriété d'un objet"
};
// - A l'aide de fonction constructeur
// Il s'agit d'une fonction qui déclare les propriétés/méthodes d'un objet
// en utilise le mot-clé "this" pour faire référence à l'objet qui sera créé et
// le mot clé "new" pour utiliser cette fonction dans le but de créer un objet

// Les fonctions constructeur se déclarent comme les fonctions classiques (avec le mot-clé function)
// Pour les distinguer des fonctions "classiques", on leur donne un nom qui commence par une
// Majuscule.

// Exemple :
// Déclaration d'une fonction constructeur

var Rono = function (quelqueChose) {
  // Ici on utilise le mot clé this pour déclarer
  // les propriétés / méthode qui appartiendront
  // aux objet créé à l'aide de cette fonction constructeur
  this.portes = 5;
  this.couleur = quelqueChose;
  this.puissance = "2CV";
  this.aUnToitOuvrant = true;
  this.estElectrique = false;
  this.joueDeLaMusique = function () {
    alert("Beach boys !");
  };
};

// Utilisation du constructeur avec le mot clé new
var v1 = new Rono("blanche");
// new permet de créer un nouvel objet et la fonction
// constructeur lui assigne ses propriétés/méthodes
var v2 = new Rono("verte");
var v3 = new Rono("rose");

/** Objets fondamentaux / Fonctions constructeurs fondamentales */
// Le moteur JavaScript précharge en mémoire des objets
// et des fonctions constructeurs que le développeur
// peut utiliser à tout moment dans son code.

// Exemple :
// Objet fondamental Math
Math;
// Contient des propriété et des méthodes
Math.PI; // propriété qui contient le nombre pi
Math.ceil(5.7); // méthode qui renvoi l'arrondi supérieur du nombre fourni en paramètre.
// Documenté ici :https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math

// Fonction constructeur fondamentales
Date;
var objetDate = new Date(); // renvoi un objet date à l'instant t
objetDate.getDay(); // renvoi le jour
// Documenté ici : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

/** Notion de prototype */
// On peut créer un objet à partir d'un objet. L'objet qui sert à créér
// le nouvel objet s'appelle prototype.
// On a 2 possibilité pour créer un objet à partir d'un prototype
// 1 - On peut utiliser la méthode .create() de l'objet fondamental Object
// Exemple :
var lapinPrehistorique = {
  poids: 25,
  cri: "Groarrr !",
  couleur: "blanc",
  aDesDentsDeSabre: true,
  couine: function () {
    alert(this.cri);
  },
};

// La méthode Object.create() va me permettre de créer un objet à
// partir d'un autre objet :
var lapinContemporain = Object.create(lapinPrehistorique);

lapinContemporain.cri = "Squiiik !";
lapinContemporain.mangeDesCarotte = true;
lapinContemporain.aDesDentsDeSabre = false;

var lapinDuFutur = Object.create(lapinContemporain);

lapinDuFutur.cri = "Bonjour Humain, je m'appelle Roger !";

// 2 - On peut utiliser une propriété .protoype des function.

var FabricantDePates = function () {
  this.couleur = "Jaune";
  this.ingredients = ["farine", "oeufs", "sel"];
};
// Ici je créé un objet
var sacDePates = new FabricantDePates();

sacDePates.couleur; // "Jaune"
sacDePates.ingredients; // ["farine", "oeufs", "sel"];

var PateCarrefour = function () {
  this.prix = 5;
  this.marque = "carrefour";
};
// En JavaScript les function sont des fonction
// Et des objets qui ont des propriété et des méthode.
// La propriété prototype d'une fonction permet de définir
// le prototype qui sera assigné à tous les objets créé
// à l'aide de cette fonction :
PateCarrefour.prototype = sacDePates;

var sachet1 = new PateCarrefour();
var sachet2 = new PateCarrefour();
var sachet3 = new PateCarrefour();
var sachet4 = new PateCarrefour();
// Sachet 1 à 4 on pour prototype le même objet référencé dans sacDePates
// Donc Sachet 1 à 4 ont accès à leur propriété propres (prix, marque) et
// au propriétés de leur prototype (couleur, ingredients)

/** Design pattern prototype */
// Consiste à optimiser l'utilisation de la mémoire en utilisant
// les prototype. Il s'agit de créer un prototype (un objet) qui
// contient des méthodes. Et de créer des objets qui ne contiennent
// que des propriété (pas de méthode). Ces objets hériteront des méthodes
// en utilisant le prototype.

// On définit des méthodes dans un objet
// qui servira de prototype
var mesMethodes = {
  bonjour: function () {
    var message = "je m'appelle" + this.prenom;
    alert(message);
  },
  aurevoir: function () {
    var message = "je vous dis au revoir";
    alert(message);
  },
};

// On créé un constructeur
var CreateurDIA = function (p) {
  this.prenom = p;
};

// On assigne l'objet qui sert de prototype
// à la propriété .prototype du constructeur
CreateurDIA.prototype = mesMethodes;

// Puis on créé des objet qui auront tous le même prototype (c'est à dire l'objet
// qui contient les méthodes)
var premiereIA = new CreateurDIA("Siri");
var secondeIA = new CreateurDIA("ChatGPT");
var troisiemeIA = new CreateurDIA("Alexa");
var quatriemeIA = new CreateurDIA("Cortana");

// Autre exemple de création de prototypes :

var prototypeDeVoiture = {
  portes: 5,
  aDesAilerons: true,
  estElectrique: true,
  roule: function () {
    alert("vroooom !");
  },
};

var FabricationDeVoiture = function () {
  this.aDesAilerons = false;
  this.marque = "Citrono pipo";
  this.couleur = "Rouge";
};

// J'ai déclaré sur quel objet serait basé chaque voiture fabriquée
FabricationDeVoiture.prototype = prototypeDeVoiture;

var voiture1 = new FabricationDeVoiture();
var voiture2 = new FabricationDeVoiture();

voiture1.aDesAilerons; //false
voiture2.aDesAilerons; //false
