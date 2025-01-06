"use strict";
import personnes from "./donnees.js";
import { miseAJourDesPersonnes } from "./traitement.js";

const miseAJourDeAffichage = function () {
  window.document.addEventListener("DOMContentLoaded", function () {
    const uneDiv = window.document.createElement("div");
    miseAJourDesPersonnes(personnes);
    personnes.forEach(function (element, index) {
      const unP = window.document.createElement("p");
      unP.textContent =
        element.prenom +
        " " +
        element.nom +
        " est présent : " +
        element.estPresent;
      uneDiv.appendChild(unP);
    });
    window.document.body.appendChild(uneDiv);
  });
};

export default miseAJourDeAffichage;
