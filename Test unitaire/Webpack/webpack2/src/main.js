"use strict";
import miseAJourDeAffichage from "./affichage.js";
import './index.scss';

if (miseAJourDeAffichage) {
  miseAJourDeAffichage();
} else {
  console.error(
    "Pas trouvé de propriété miseAJourDeAffichage dans objetDansLeContexteGlobal..."
  );
}
