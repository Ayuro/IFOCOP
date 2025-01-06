# Exercice 03 : Composants vulnérables et obsolètes

## Concept

La façon dont nous construisons les logiciels a changé. La communauté open source arrive à maturité et la disponibilité des logiciels open source est devenue prolifique sans qu'il soit nécessaire de déterminer la provenance des bibliothèques utilisées dans nos applications [Software Supply Chain 2016](https://www.sonatype.com/hubfs/SSC/Software_Supply_Chain_Inforgraphic.pdf?t=1485298506170).

Cette leçon aborde les difficultés liées à la gestion des bibliothèques dépendantes, le risque de ne pas gérer ces dépendances et la difficulté de déterminer si vous êtes à risque.

## But

* Prendre conscience que l'open source consommé est aussi important que votre propre code personnalisé.
* Prendre conscience de la gestion, ou du manque de gestion, de notre consommation de composants open source.
* Comprendre l'importance d'une nomenclature pour déterminer le risque lié aux composants open source.

## Exercice

Des paquets obsolètes (inutiles pour notre projet) ont volontairement été installés via `npm`. Trouvez lesquels (référez-vous aux cours).

Quel sont les plugins en cause ? Quelles sont les possibilités pour corriger ces failles de sécurités ?

Cherchez sur `npmjs.com` la date de mise à jour de ces plugins. Vous constaterez qu'une date de publication relativement proche n'est pas synonyme de sécurité.

---

## Pour aller plus loin

Voici une liste de questions que vous devriez vous poser lorsque vous utilisez des composants tiers :

* Comment savoir quels composants open source se trouvent dans nos applications ?
* Comment savoir quelles versions des composants open source nous utilisons ?
* Comment définir le risque des composants open source ?
* Comment découvrir le risque des composants open source ?
* Comment associer un risque spécifique à une version spécifique d'un composant open source ?
* Comment savoir quand un composant sort une nouvelle version ?
* Comment savoir si une nouvelle vulnérabilité est découverte sur ce qui était auparavant un "bon" composant ?
* Comment savoir si nous utilisons la version authentique d'un composant open source ?

REPONSE:
Un npm audit fix résoud la majeur partie des vulnérabilité découverte via le npm audit.
Si il reste des dépendances qui n'on pas été updaté, alors un npm install *nom de la dépendance* latest fonctionne
Puis pour les dépendance inutile: npm uninstall *nom de la dépendance*
