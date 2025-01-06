"use strict";

/** Variables */
var maVariable;

// Type de données

// Primitif:

// Nombre / Number

maVariable = 99;
maVariable = -99;
maVariable = NaN;
maVariable = Infinity;
maVariable = .99;

// Chaîne de caractère /string
maVariable = 'Hello World!';
maVariable = "Hello World!";
maVariable = `Hello World!`;

// Booléen / Boolean
maVariable = true;
maVariable = false;

//  Utiles pour les opérations logiques / opérateurs logiques
maVariable = 56 === 73; // Ici on assigne false à maVariable
maVariable = 56 < 73; // Ici on assigne true à maVariable

// Complèxes:

// Fonctions / function
// Ici une fonction anonyme assignée à une variable
maVariable = function(/** Ici des arguments */){
    // Ici des instructions
    // Cette fonction peut retourner une valeur avec return
}
// La variable maVariable contient une référence (adresse en mémoire) de la fonction

// Objets // Objects
maVariable = {}; // Déclaration littérale (littéralement un objet représenté par les 2 {}).
// QUand on écrit une instruction qui entraine la création d'un objet en mémoire.
// par exemple ici avec les 2 accolades, on dit qu'on à un "instance" de l'objet en mémoire.

// - Soit on a besoin d'une fonction contructeur et du mot-clef new
var MaFonctionConstructeur;
// Par convention le nom de la variable ou la propriété à laquelle on assigne une fonction constructeur commence toujours par une majuscule:
MaFonctionConstructeur = function(){
    // Ici on peut utiliser le mot-clef this pour pointer sur l'objet qui sera créé à l'aide de cette fonction constructeur. Par exemple:
    this.unePropriete = "une valeur";
};
// Utilisation de la fonction constructeur pour "instancier" un objet
// On utilise le mot-clef new:
maVariable = new MaFonctionConstructeur();
// maVariable contient une instance, c'est à dire un objet, fabriqué à partir de la fonction constructeur MaFonctionConstructeur
// Comme pour les fonctions, les objets sont assignés par référence. C'est à dire que dans les variable le moteur assigne toujours l'adresse mémoire de l'objet pour éviter les duplications intempestives.

/** Objet fondamentaux / fonction constructeur fondamentales */

Math;
// Math contient des propriété et des méthodes.
// Exemple de fonction constructeur:
Date;
// Date est une fonction constructeur qu'on utilise avec new
// exemple:
var maDate = new Date();
// maDate contient un objet qui contient les informations de la date du moment ou new date() a été exécuté ainsi que des méthodes et des propriétés.

// Fonction constructeur String
String;
maVariable = new String("un texte");
maVariable[0];
// et on peut utiliser le mécanisme de coercition pour obtenir la même chose comme suit:
"un texte"[0]
// La coercition est le mécanisme par lequel le moteur JS converti un type primitif en objet pendant la durée d'exécution d'une instruction.
"un texte".length // Donne le nombre d'indices de new string("un texte")

// Fonction constructeur Number (fonction de coercition)
Number;
maVariable = new Number(99);
// ou
(99).toString();// conversion momentanée de 99 en new number(99)

// Fonction constructeur Boolean (fonction de coercition)
Boolean;
maVariable = new Boolean(false);
// ou
(false).toString(); // conversion momentanée de famse en new Boolean(false)

// Foction constructeur fondamentales classiques
// Fonction constructeur Function
// En JavaScript, les fonction sont des objet exécutable créés à partir de la fonction constructeur fondamental Function
maFonction = new Function(
    'var message = "Ceci est un message"; alert(message);'
)
maFonction; //Est un objet de type Function
maFonction(); // cet objet est exécutable

// Le même résultat, le même objet de type Function peut être créé en utilisant le mot clef function:
maFonction = function() {
    var message = "Ceci est un message";
    alert(message);
}
maFonction; // est un objet de type Function
maFonction(); // cet objet est exécutable

// Fonction constructeur Object
// En JavaScript, les objets littéraux sont créées à partir de la fonction construteur fondamentale object :
monObjet = new Object({propriete1: 10, propriete2: false});
monObjet.propriete1; // 10
monObjet.propriete2; // false

// La notation littérale avec uniquement des {} est iune version simplifiée de l'utilisation de la fonction constructeur Object
// exemple:
monObjet = { propriete1: 10, propriete2: false};
//est la version simplifiée de monObjet = new Object{(propriete1: 10, propriete2: false)};

// Fonction constructeur array
maVariable = new Array('Bonjour', 'les', 'amis');
// Cette fonction constructeur peut-être utilisée de fonction simplifiée avec les symboles []. On peut écrire:
maVariable = ['Bonjour', 'les', 'amis']; // est la même chose que maVariable = new Array('Bonjour', 'les', 'amis');

// exemple de fonction constructeur qui permet de crééer des objet dont la structure interne est différente en fonction de la valeur d'argument fournie:
var IncubateurDeClone = function(estUnCloneDeBobaFett) {
    if (estUnCloneDeBobaFett)
        this.estUnMechant = 'Oui c\'est un méchant';
    else
        this.estUnGentil = ' Oui c\'est un gentil';
};

var unCloneMechant = new IncubateurDeClone(true);
var unCloneGentil = new IncubateurDeClone(false);

unCloneMechant.estUnMechant; // existe
// unCloneMechant.estGentil; // n'existe pas

// unCloneMechant.estUnMechant;  n'existe pas
unCloneMechant.estGentil; // existe

/** Les prototype */
// Javascript on peut faire de l'héritage d'objets
// Un objet peut servir "d'ancêtre" commun à d'autres objet
// La bonne pratique consiste à toujours avoir un prototype
// Dans lequel on retrouvera les méthodes d'une famille d'objet.

var OeufDeReine = function() {
    this.couleurs = ["Jaune", "Noire"];
    this.metier = sonMetier;
    this.ailes = 2;
};

// Assignation un objet littéral en tant que prototype de objet qui seront créés à l'aide du constructeur

/* var objetQuiMeSertDePrototype = {
    vole: function() {
        alert('Bzzzzz!');
    },
    atterit: function() {
        alert('Bzzzzz mais moins fort.');
    },
    quelEstMonMetier: function() {
        alert(this.metier);
    },
};

OeufDeReine.prototype = objetQuiMeSertDePrototype; */
// La bonne pratique consiste plutôt à enrichier l'objet qui est déjà présent dans la propriété .prototype avec les méthodes dont les instance de ma fonction constructeur auront besoin
OeufDeReine.prototype.vole = function () {
    alert('Bzzzzz!');
};

OeufDeReine.prototype.atterrit = function () {
    alert('Bzzzzz mais moins fort.');
};

OeufDeReine.prototype.metier = function () {
    alert(this.metier);
};

var a1 = new OeufDeReine("ouvrière");
var a2 = new OeufDeReine("guerrière");
var a3 = new OeufDeReine("nourricière");

window.document.body.onload = function() {
    // cette fonction est exécutée à l'affichage du modele objet du document.
    window.console.dir("modèle objet du document chargé et affiché!");
    window.document.body.style.backgroundColor = "red";
    window.document.body.children[0]; // objet qui correspond à l'élément p qui est le premier element après le body
    window.document.body.children[0].onclick = function() {
        // Ici je déclare une fonction qui sera éxécuté par le navigateur en réaction à un click de la souris de l'utilisateur sur l'élement.
        // Ci-dessous j'accède à une propriété du sous objet body pour en modifier la valeur
        window.document.body.style.backgroundColor = "blue";
        // Ici on est donc dans une méthode de l'objet qui est dans window.document.body.children[0].
        // Donc on peut utiliser this pour faire référence à cet objet. Par exemple ici, on change la valeur de la propriété color de l'objet dans la propriété style de l'objet dans .children[0]
        this.style.color = "green";
    };
    // Sur tou sles éléments du modèle objet du document, on à accès à une méthode addEventListener qui permet de déclarer l'évènement et la fonction à exécuter en réation à l'événement. Par exemple:

    aDeclencherAuClic = function() {
        this.style.fontWeight = "bold";
        this.style.fontFamily = "arial";
    };
    window.document.body.children[0].addEventListener("click", aDeclencherAuClic);
    // L'événement utilisable avec addEventListener sont tous les événement dont les propriétés sont disponisble sur l'élément (voir console) sans le préfise "on".
    // Par exemple, l'événement qui correspond à .onclick est "click", l'événement qui correspond à .onmouseover est "mouseover", etc...
};

// Événement à utiliser: DOMContentLoaded. Le code associé à cet événement est déclenché PAR le navigateur quand le navigateur à fini de charger le DOM en mémoire. On utilise généralement cet événement pour déclancher tous le reste de notre code
window.addEventListener('DOMContentLoaded', function() {
    // Ici tous le code de mon programme en JavaScript qui manipule les élément du DOM.
    var referenceDeObjetQuiCorrespondAuP = window.document.getElementById('identifiantUnique');

    referenceDeObjetQuiCorrespondAuP.addEventListener('Click', function() {
        var objetDeTypeH1 = window.document.createElement('h1');
        objetDeTypeH1.innerHTML = 'Ceci est un titre H1';
        window.document.body.appendChild(ojectDeTypeH1);
    })
});
