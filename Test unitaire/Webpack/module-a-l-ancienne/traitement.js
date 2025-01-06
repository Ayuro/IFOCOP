'use strict'

// Si objectDansLeContexteGlobal existe, on n'y touche pas, sinon on l'initialise à {}
var objectDansLeContexteGlobal = objectDansLeContexteGlobal || {};

(function (argumentDeLaFonction) {
    console.log(
        "argumentDeLaFonction dans traitement.js: ",
        argumentDeLaFonction
    );

    var miseAJourDesPersonnes = function(p) {
        p.map(function(element, index) {
            element.nom = element.nom.toUpperCase();
            element.estPresent = true;
            return element;
        });
    };

    argumentDeLaFonction.miseAJourDesPersonnes = miseAJourDesPersonnes;
})(objectDansLeContexteGlobal);