"use strict";
import miseAJourDeAffichage from "./affichage.js";

if (miseAJourDeAffichage) {
  miseAJourDeAffichage();
} else {
  console.error(
    "Pas trouvé de propriété miseAJourDeAffichage dans objetDansLeContexteGlobal..."
  );
}
