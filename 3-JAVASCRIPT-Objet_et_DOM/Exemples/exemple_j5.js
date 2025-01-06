"use strict";

// Variables

// var:
// - Le contenu peut varier
// - la variable à une portée au niveau fonction
// - la variable est accessible dès le début de l'exécution du code
// --> Phénomène du "hoisting" / remontée des variables
var maVariable;

// let:
// - Le contenu peut varier
// - La variable à une portée de niveau bloc
// - La variable n'est pas accessible avant la ligne de déclaration
let autreVariable;

// const:
// - Le contenu est fixe
// - La variable à une portée de niveau bloc
// - La variable n'est pas accessible avant la ligne de déclaration
const derniereVariables = 0;

// La bonne pratique consiste à utiliser cconst prioritairement.
// puis let si nécessaire.
// et var en cas de fin du monde...

/* Présentation classique en JS */

const PlanDeVoitureAmericaineEnJS = function (c) {
    this.portes = 5;
    this.reservoir = 70;
    this.couleur = c;
};

PlanDeVoitureAmericaineEnJS.nombreDePage = 240;
PlanDeVoitureAmericaineEnJS.proprietaire = "General Motors"
PlanDeVoitureAmericaineEnJS.quiEstLeProprietaire = function () {
    window.alert(this.proprietaire);
};

PlanDeVoitureAmericaineEnJS.prototype.roule = function () {
    this.reservoir--;
    if (this.reservoir > 0)
        window.alert('vroooom !');
};

const v1avecLePlanEnJS = new PlanDeVoitureAmericaineEnJS;

/* Présentation en ES6 */

// ---

// Design pattern sub-class en JS traditionnel
// Implémenté en ES6 à l'aide des mots clefs extends et super

PlanDeVoitureChinoisEnJS = function(LaCouleur) {
    // Ici j'appelle la fonction constructeur PlanDeVoitureAmericaineEnJS en définissant la valeur du contexte dans PlanDeVoirtureAmericainEnJS à la valeur courant du contexte (this): l'objet qu'on est en train de créer + je passe l'argument laCouleur dont PlanDeVoitureAmericaineEnJS à besoin
    PlanDeVoitureAmericaineEnJS.call(this, LaCouleur)
    this.marque = "New Lucky Phenix";
    this.gadget = "Autoradio tactile Huawei";
};

// On crée un objet qui a pour prototype l'objet prototupe de la fonction construteur PlanDeVoitureAmericainEnJS. On assigne cet objet comme prototupe de la PlanDeVoitureChinoiseEnJS
PlanDeVoitureChinoisEnJS.prototype = Object.create(
    PlanDeVoitureAmericaineEnJS.prototype;
);

PlanDeVoitureChinoisEnJS.prototype.klaxonne = function() {
    window.alert('Tut Tut!');
};

// une voiture instanciée avec PlanDeVoitureChinoiseEnJS à pour prototype un objet qui contient la méthode klaxonne. Et cet objet à pour prototype le prototype

const vchinoise1AvecLePlanEnJs = new PlanDeVoitureChinoisEnJS();
// On peut exécuter la fonction construteur PlanDeVoitureAmericaineEnJS en forçant le this à l'intérieur de PlanDeVoitureAmericaineEnJS à pointer sur l'objet vChinoise1AvecLePlanEnJs
// PlanDeVoitureAmericaineEnJS.call(vchinoise1AvecLePlanEnJs, "verte");