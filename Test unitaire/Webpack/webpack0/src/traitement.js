"use strict";

const miseAJourDesPersonnes = function (p) {
  p.map(function (element, index) {
    element.nom = element.nom.toUpperCase();
    element.estPresent = true;
    return element;
  });
};

export { miseAJourDesPersonnes };
