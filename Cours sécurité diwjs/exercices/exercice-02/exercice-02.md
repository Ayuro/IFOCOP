# Exercice 02 : Injection

## Concept

Cet exercice porte sur la manipulation des requêtes mongoDB pour effectuer des tâches qui n'étaient pas l'intention initiale du développeur.

## Exercice

Après avoir installé la base de données mongoDB et une fois le serveur exécuté (`node app.js` à la racine des exercices), rendez-vous sur `http://localhost:8085/exercice-02/`. Ouvrez le panneau de développement et dirigez-vous dans l'onglet réseau. Rentrez des identifiants pour voir comment se comporte l'envoi de requête et les réponses associées. Utilisez ce que vous avez vu en cours pour trouver la faille.

*Conseil* : pour envoyer une requête que vous aurez modifiée, copiez la requête initiale dans l'onglet en-têtes, et collez-la dans la barre d'adresse. Vous pouvez alors la modifier à loisir, et voir les réponses du serveur. Ou utilisez les outils de développement pour modifier la requête directement depuis l'onglet réseau, et visualisez le retour de l'API.

REPONSE: on peut mettre en fin d'url: motDePasse[$ne]=