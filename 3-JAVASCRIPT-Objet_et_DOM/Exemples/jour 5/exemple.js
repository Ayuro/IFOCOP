"use strict";

// Variables

// var :
// - Le contenu peut varier
// - La variable à une portée au niveau fonction
// - La variable est accessible dés le début de l'exécution du code
// --> Phénoméne du "hoisting" / remontée des variables
var maVariable;

// let :
// - Le contenu peut varier
// - La variable à une portée de niveau bloc
// - La variable n'est pas accessible avant la ligne de déclaration
let autreVariable;

// const :
// - Le contenu est fixe
// - La variable à une portée de niveau bloc
// - La variable n'est pas accessible avant la ligne de déclaration
const encoreUneAutreVariable = "valeur fixe";

// La bonne pratique consiste à utiliser const prioritairement.
// puis let si nécessaire.
// et var en cas de fin du monde...

// Objets
// "Déclaration traditionnelle"
// Fonction constructeur
const PlanDeVoitureAmericaineEnJS = function (c) {
  this.portes = 5; // propriété propre
  this.reservoir = 70; // propriété propre
  this.couleur = c; // propriété propre
};
// "Propriété de PlanDeVoitureAmericaineEnJS" pas des voiture qui seront créé avec
// On appelle ça "propriété statique"
PlanDeVoitureAmericaineEnJS.nombreDePage = 240;
PlanDeVoitureAmericaineEnJS.proprietaire = "General Motors";
PlanDeVoitureAmericaineEnJS.quiEstLeProprietaire = function () {
  window.alert(this.proprietaire);
};
// Méthode du prototype
PlanDeVoitureAmericaineEnJS.prototype.roule = function () {
  this.reservoir--;
  if (this.reservoir > 0) {
    window.alert("vrooom !");
  }
};
// Utilisation
const v1avecLePlanEnJS = new PlanDeVoitureAmericaineEnJS("blanche");
v1avecLePlanEnJS.roule(); // affiche "vrooom !" et ça décremente le volume du réservoir.

PlanDeVoitureAmericaineEnJS.proprietaire; // contient "General Motors"

// Déclaration équivalent avec sucre syntaxiques modernes
class PlanDeVoitureAmericaineEnES6Plus {
  constructor(c) {
    // On déclare le code de la fonction constructeur à l'aide du mot clé constructor
    this.portes = 5;
    this.reservoir = 70;
    this.couleur = c;
  }

  // "Propriété de PlanDeVoitureAmericaineEnES6Plus" pas des voiture qui seront créé avec
  // On appelle ça "propriété statique"
  static nombreDePage = 240;
  static proprietaire = "General Motors";
  static quiEstLeProprietaire() {
    window.alert(this.proprietaire);
  }

  // On déclare les méthodes du prototype sans le mot clé function
  roule() {
    this.reservoir--;
    if (this.reservoir > 0) {
      window.alert("vrooom !");
    }
  }
}

const v1avecLePlanEnES6Plus = new PlanDeVoitureAmericaineEnES6Plus("blanche");
v1avecLePlanEnES6Plus.roule(); // affiche "vrooom !" et ça décremente le volume du réservoir.

PlanDeVoitureAmericaineEnES6Plus.proprietaire; // "General Motors"

// Design pattern sub-class en JS traditionnel
// Implémenté en ES6 à l'aide des mots clés extends et super

const PlanDeVoitureChinoiseEnJS = function (laCouleur) {
  // Ici j'appelle la fonction constructeur PlanDeVoitureAmericaineEnJS
  // en définissant la valeur du contexte dans PlanDeVoitureAmericaineEnJS
  // à la valeur courant du contexte (this) : l'objet qu'on est en train
  // de créer + je passe l'argument laCouleur dont PlanDeVoitureAmericaineEnJS
  // besoin
  PlanDeVoitureAmericaineEnJS.call(this, laCouleur);
  this.marque = "New Lucky Phenix";
  this.gadget = "Autoradio Tactile Huawei";
};
// On créé une objet qui a pour prototype l'objet prototype
// de la fonction constructeur PlanDeVoitureAmericaineEnJS.
// On assigne cet objet comme prototype de la PlanDeVoitureChinoiseEnJS
PlanDeVoitureChinoiseEnJS.prototype = Object.create(
  PlanDeVoitureAmericaineEnJS.prototype
);

PlanDeVoitureChinoiseEnJS.prototype.klaxonne = function () {
  window.alert("Tuut tuut");
};
// une voiture instanciée avec PlanDeVoitureChinoiseEnJS à pour prototype
// un objet qui contient la méthode klaxonne. Et cet objet à pour prototype
// le prototype de PlanDeVoitureAmericaineEnJS qui contient la méthode roule

const vChinoise1AvecLePlanEnJs = new PlanDeVoitureChinoiseEnJS("verte");
// On peut exécuter la fonction constructeur PlanDeVoitureAmericaineEnJS
// en forçant le this à l'intérieur de PlanDeVoitureAmericaineEnJS
// à pointer sur l'objet vChinoise1AvecLePlanEnJs
//PlanDeVoitureAmericaineEnJS.call(vChinoise1AvecLePlanEnJs, "verte");

class PlanDeVoitureChinoiseEnES6Plus extends PlanDeVoitureAmericaineEnES6Plus {
  constructor(laCouleur) {
    super(laCouleur); // Le mot clé super indique qu'on veut exécuter la fonction constructeur qu'on étend
    this.marque = "New Lucky Phenix";
    this.gadget = "Autoradio Tactile Huawei";
  }

  klaxonne() {
    // cette méthode appartiendra au prototype de l'objet créé avec ce constructeur
    window.alert("Tuut tuut");
  }
}

const vChinoise1AvecLePlanEnES6Plus = new PlanDeVoitureChinoiseEnES6Plus(
  "rose"
);

window.addEventListener("DOMContentLoaded", function () {
  // On peut récupérer une référence à un objet du DOM. Par exemple
  // l'objet du DOM correspond à la div identifiée par l'identifiant
  // "carre"
  const htmlDivElements = window.document.querySelectorAll("div");
  // On peut utiliser la méthode addEventListener sur l'objet pour
  // associer une fonction à l'évènement click :
  htmlDivElements[0].addEventListener("click", function () {
    window.alert("cliqué");
  });
  // On peut modifier les propriétés de cet element
  /*
  htmlDivElement.style.position = "absolute";
  htmlDivElement.style.width = "100px";
  htmlDivElement.style["height"] = "100px";
  htmlDivElement.style["background"] = "red";
  */
  const styleDuCarre = {
    width: "100px",
    height: "100px",
    background: "red",
    margin: "2px",
  };

  /* On peut écrire une boucle qui assigne les porpriétés de style
  // style["position"]; // "absolute"
  // for / in // permet de boucler sur les propriété d'une objet
  for (let unePropriete in styleDuCarre) {
    console.log(unePropriete); // successivement "position" puis "width" puis "height" puis background
    if (styleDuCarre.hasOwnProperty(unePropriete)) {
      // Si la propriété sur laquelle on boucle est une propriété de l'objet
      // et pas une propriété de son prototype.
      htmlDivElement.style[unePropriete] = styleDuCarre[unePropriete];
    }
  }
*/
  // On peut factoriser cette boucle pour qu'elle fonctionne avec n'importe
  // quel type d'objet qui correspond à une element HTML :
  const fonctionQuiAssigneDesProprieteDeStyle = function (
    elementHTML,
    proprietesDeStyle
  ) {
    for (let unePropriete in proprietesDeStyle) {
      if (proprietesDeStyle.hasOwnProperty(unePropriete)) {
        // Si la propriété sur laquelle on boucle est une propriété de l'objet
        // et pas une propriété de son prototype.
        elementHTML.style[unePropriete] = proprietesDeStyle[unePropriete];
      }
    }
  };

  fonctionQuiAssigneDesProprieteDeStyle(htmlDivElements[0], styleDuCarre);

  const jSami = function (selecteurCSS) {
    return {
      elementRecuperes: window.document.querySelectorAll(selecteurCSS),
      assigneNouveauStyleAUneDiv: function (elementHTML, proprietesDeStyle) {
        for (let unePropriete in proprietesDeStyle) {
          if (proprietesDeStyle.hasOwnProperty(unePropriete)) {
            // Si la propriété sur laquelle on boucle est une propriété de l'objet
            // et pas une propriété de son prototype.
            elementHTML.style[unePropriete] = proprietesDeStyle[unePropriete];
          }
        }
      },
      assigneNouveauStyleAPlusieursDivDejaSelectionnes: function (
        proprietesDeStyle
      ) {
        for (let i = 0; i < this.elementRecuperes.length; i++) {
          this.assigneNouveauStyleAUneDiv(
            this.elementRecuperes[i],
            proprietesDeStyle
          );
        }
      },
    };
  };

  const jS = jSami("div");
  console.dir(jS);
  jS.assigneNouveauStyleAPlusieursDivDejaSelectionnes(styleDuCarre);
});
