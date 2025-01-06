# Exercice 00 : Un programme non modulaire

---

Le fichier [exercice-00.html](./exercice-00/exercice-00.html) entraîne le chargement de 4 fichiers du dossier [exercice-00](./exercice-00/src) dans cet ordre :
  - [gui.js](exercice-00/src/gui.js) qui crée la "classe" `GuiBuilder`.
  - [cart.js](exercice-00/src/cart.js)  qui crée la "classe" `CartManager`.
  - [products.js](exercice-00/src/products.js) qui crée la "classe" `ProductRepository`
  - [app.js](exercice-00/src/app.js) qui initialise l'application (point d'entrée/entry point).

L'application est un mini-programme qui affiche une liste de produits avec 2 actions (+/-) pour ajouter ou retirer des produits à un "panier" de produits.

- Testez ce programme;
- Prenez connaissance de son code.

## Dépendances du Code

Nous allons avoir besoin de divers outils pour la mise en qualité de ce code.

 * Copiez tous les fichiers de l'```exercice-00``` dans nouveau dossier;
 * Initialisez un nouveau projet ```npm``` ou ```yarn``` à la racine de ce dossier.
## Documenter le Code

Nous allons documenter le code.

 * Installez ```JSDoc``` à la racine de ce nouveau projet;

 * Installez l'extension ```Document This``` de Visual Studio Code;

 * A l'aide de l'extension de ```Document This``` de Visual Studio Code et
   des règles de documentation du code proposées par JSDoc et de votre analyse
   du code fourni, écrivez les commentaires qui décrivent la nature des "classes",
   des méthodes, des propriétés et de tout autre élément de code qui vous
   semble pertinent pour les 4 fichiers.

 * Générez une documentation technique qui décrit le contenu des 4 fichiers de
   script fournis.

## Mise en qualité du Code

 * Installez ```Prettier``` à la racine de ce nouveau projet;

 * Installez l'extension ```Prettier``` de Visual Studio Code;

 * Procédez au formatage de chacun des 4 fichiers de script.

 * Installez ```ESLint``` à la racine de ce nouveau projet;

 * Installez l'extension ```ESLint``` de Visual Studio Code;

 * Procédez à toutes les corrections qui sont signalées par ```ESLint```
   pour chacun des 4 fichiers de script.

## Modulariser du Code

Cette application crée __plusieurs objets__ dans l'__espace global__. Or, il est __nécessaire__ de __minimiser au maximum__ l'impact de nos programmes sur l'espace global pour éviter les collisions/écrasements entre les variables de divers programmes.

La solution à ce problème réside dans la création de modules (dans l'esprit des modules de Node JS). L'espace mémoire des modules est isolé les uns des autres et nous permet ainsi de minimiser notre impact sur l'espace global.

Tous les exercices qui suivent vont s'appuyer sur le code que vous avez documenté
et mis en qualité. Ils vous proposent de travailler sur l'utilisation des modules.

---

VirtuoWorks® - tous droits réservés©
