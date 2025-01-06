# Exercice API REST JSON

- Créer un back-end Express pour l'API REST
- Créer un front-end Angular pour consommer l'API REST

## MongoDB OK

- Importer les données du fichier `restaurants.json` dans une base de données MongoDB
  - base de données : `newyork`
  - collection: **\*\*\*\***`restaurants`**\*\*\*\***.
- Créer une collection `users` dans la même base de données

## Créer un serveur Node.js avec Express 

Objectif :

- Exposer les données de la collection `restaurants` sous la forme d'une API REST JSON
- Créer les routes pour :
  - lister les quartiers (borough) --------------------------------------------------- OK
  - lister les restaurants sous forme paginée
  - permettre une recherche par nom de restaurant de type « autocomplete »
  - tout ce que vous pouvez imaginer d'autre...

**Utiliser _Bruno_ ou _Postman_ pour tester les routes.**

### Gérer l'authentification

Le serveur Express doit gérer l'authentification des utilisateurs avec JWT.

## Créer une application Angular

L'application Angular doit permettre de :

- Créer un compte utilisateur
- Se connecter à l'application (login)
  - Facultatif : persistance (localStorage / sessionStorage)
- Afficher la liste des quartiers
- Afficher la liste paginée des restaurants
- Rechercher un restaurant par nom (autocomplete)
