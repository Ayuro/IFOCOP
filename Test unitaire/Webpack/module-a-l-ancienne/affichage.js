'use strict'

// Si objectDansLeContexteGlobal existe, on n'y touche pas, sinon on l'initialise à {}
var objectDansLeContexteGlobal = objectDansLeContexteGlobal || {};

(function (argumentDeLaFonction) {
        console.log("argumentDeLaFonction dans affichage.js: ",
        argumentDeLaFonction
    );

    var miseAJourDeAffichage = function() {
        window.document.addEventListener("DOMContentLoaded", function() {
            var uneDiv = window.document.createElement("div");
            argumentDeLaFonction.miseAJourDesPersonnes(
                argumentDeLaFonction.personnes
            );
            argumentDeLaFonction.personnes.forEach(function(element, index) {
                var unP = window.document.createElement('p');
                unP.textContent = element.prenom + ' ' + element.nom + ' est présent : ' + element.estPresent;
                uneDiv.appendChild(unP);
            });
            window.document.body.appendChild(uneDiv);
        });
    };
    

    argumentDeLaFonction.miseAJourDeAffichage = miseAJourDeAffichage;
})(objectDansLeContexteGlobal);