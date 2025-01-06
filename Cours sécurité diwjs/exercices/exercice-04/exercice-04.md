# Exercice 04 : Correction de faille liée à des défauts d'identification et d'authentification

## Concept

Cet exercice porte sur la fonctionnalité de réinitialisation du mot de passe qui, la plupart du temps, est une partie négligée de l'application, ce qui entraîne toutes sortes de failles logiques intéressantes.

## But

Comment sécuriser la fonctionnalité de réinitialisation du mot de passe au sein de votre application.

## Introduction

Chacun d'entre nous a déjà utilisé la fonctionnalité de réinitialisation du mot de passe sur des sites Web. Chaque site web met en œuvre cette fonctionnalité d'une manière différente. Sur certains sites, vous devez répondre à une question, sur d'autres, un e-mail contenant un lien d'activation vous est envoyé. Dans cette leçon, nous allons passer en revue certaines des fonctionnalités de réinitialisation de mot de passe les plus courantes et montrer où cela peut mal tourner.

Il existe encore des entreprises qui envoient le mot de passe en clair à un utilisateur dans un e-mail. Pour quelques exemples, vous pouvez consulter le site http://plaintextoffenders.com/. Vous y trouverez des sites web qui continuent à vous envoyer le mot de passe en clair dans un e-mail. Non seulement cela devrait vous faire douter de la sécurité du site, mais si c'est votre ancien mot de passe, cela signifie également qu'ils le stockent en clair !

Lorsque vous perdez votre mot de passe, le site vous demande une question de sécurité à laquelle vous avez répondu lors de votre inscription. La plupart du temps, cette liste contient un nombre fixe de questions et parfois même un nombre limité de réponses. Pour utiliser cette fonctionnalité, l'utilisateur doit pouvoir sélectionner une question et saisir également la réponse. De cette façon, les utilisateurs ne partageront pas la question, ce qui rend la tâche plus difficile pour un attaquant.

Il est important de se rappeler que les réponses à ces questions de sécurité doivent être traitées avec le même niveau de sécurité que celui appliqué au stockage d'un mot de passe dans une base de données. En cas de fuite de la base de données, un attaquant ne devrait pas être en mesure de réinitialiser le mot de passe sur la base de la réponse à la question de sécurité.

Les utilisateurs partagent tellement d'informations sur les médias sociaux de nos jours qu'il devient difficile d'utiliser des questions de sécurité pour réinitialiser les mots de passe. Une bonne ressource pour les questions de sécurité est : http://goodsecurityquestions.com/.

Les utilisateurs peuvent récupérer leur mot de passe s'ils peuvent répondre correctement à la question secrète. Il n'y a pas de mécanisme de verrouillage sur la page "Mot de passe oublié". Votre nom d'utilisateur est "ifocop" et votre couleur préférée est "rouge". L'objectif est de récupérer le mot de passe d'un autre utilisateur. Les utilisateurs que vous pouvez essayer sont : "tom", "admin" et "larry".

## Exercice

Lors de la réinitialisation d'un mot de passe, vous trouverez souvent un message différent selon que l'adresse électronique existe ou non. En soi, cela peut sembler anodin, mais cela peut donner à un attaquant des informations qui peuvent être utilisées dans une attaque de phishing. Si l'attaquant sait que vous avez un compte enregistré sur un site, il peut par exemple créer un message de phishing et l'envoyer à l'utilisateur.

Une fois le serveur exécuté (`node app.js` à la racine des exercices), rendez-vous sur http://localhost:8085/exercice-04/.

*Ici l'appel à la base de données a été remplacé par un tableau contenant les utilisateurs avec la réponse à la phrase secrète en clair.*

Vous devez faire en sorte qu'on ne puisse pas connaître si un identifiant existe, et limiter le nombre de fois que l'attaquant peut essayer.
