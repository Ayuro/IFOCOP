# Exercice 01 : Contrôle d'accès rompu

## Concept

Nous verrons dans cet exercice les références directes aux objets.

On parle de références directes à des objets lorsqu'une application utilise des données fournies par le client pour accéder à des données et à des objets.

#### Exemples

Des exemples de références directes d'objets utilisant la méthode GET peuvent ressembler à ceci

https://some.company.tld/dor?id=12345

https://some.company.tld/images?img=12345

https://some.company.tld/dor/12345

#### Autres méthodes

Les méthodes POST, PUT, DELETE ou autres sont également potentiellement sensibles et ne diffèrent principalement que par la méthode et les potentielles données.

### Références directes à des objets non sécurisées

Elles sont considérées comme non sécurisées lorsque la référence n'est pas traitée correctement et permet de contourner les autorisations ou de divulguer des données privées qui pourraient être utilisées pour effectuer des opérations ou accéder à des données que l'utilisateur ne devrait pas pouvoir effectuer ou auxquelles il ne devrait pas avoir accès. Disons qu'en tant qu'utilisateur, vous allez voir votre profil et que l'URL ressemble à quelque chose comme :

https://some.company.tld/app/user/23398

... et que vous pouvez y consulter votre profil. Que se passe-t-il si vous naviguez vers :

https://some.company.tld/app/user/23399 ... ou si vous utilisez un autre numéro à la fin. Si vous pouvez manipuler le numéro (identifiant de l'utilisateur) et consulter le profil d'une autre personne, la référence de l'objet n'est pas sécurisée. Ceci peut bien sûr être vérifié ou étendu au-delà des méthodes GET pour visualiser les données, mais aussi pour manipuler les données.

## Exercice

Une fois le serveur exécuté (`node app.js` à la racine des exercices), rendez-vous sur `http://localhost:8085/exercice-01/`.

Rentrez l'identifiant de connexion `tom` et le mot de passe `cat` pour vous connecter. Vous serez redirigé vers votre page de profil. Utilisez ce que vous avez vu en cours pour afficher le profil d'un autre utilisateur.

Comment sécuriser l'accès aux autres profils ?

REPONSE:
En ajoutant un système de token (JTW) et en remplissant les messages d'erreur afin qu'elles soient suffisament cryptique.
Nous avons également la possibilitée de crypter certaine donnée, comme l'Id de l'utilisateur afin qu'il ne corresponde pas à ce qui apparrait dans l'url.