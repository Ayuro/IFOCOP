'use strict'

// Si objectDansLeContexteGlobal existe, on n'y touche pas, sinon on l'initialise à {}
var objectDansLeContexteGlobal = objectDansLeContexteGlobal || {};

if (objectDansLeContexteGlobal.miseAJourDeAffichage) {
    objectDansLeContexteGlobal.miseAJourDeAffichage()
} else {
    console.error("On n'a rien trouvé");
}