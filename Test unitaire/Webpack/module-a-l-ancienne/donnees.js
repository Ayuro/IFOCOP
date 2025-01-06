'use strict'

// Si objectDansLeContexteGlobal existe, on n'y touche pas, sinon on l'initialise à {}
var objectDansLeContexteGlobal = objectDansLeContexteGlobal || {};
(function (argumentDeLaFonction) {
    console.log("argumentDeLaFonction dans donnees.js: ", {...argumentDeLaFonction})
var personnes = [
    {
        prenom: "Anne-Laure",
        nom: "Charles-Joffredo"
    },
    {
        prenom: "David",
        nom: "Martins"
    },
];

argumentDeLaFonction.personnes = personnes;
})(objectDansLeContexteGlobal);
// On exécute l'IIFE avec l'objet des données du programme