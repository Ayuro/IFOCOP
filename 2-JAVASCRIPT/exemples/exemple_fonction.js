// Les fonction peuvent être nommées ou anonymes:
function maFonctionNommee() {
    alert('Nommee');
}

var maFonctionAnonyme = function() {
    alert('Anonyme');
}

var autreFonctionAnonyme = () => {
    alert('autreAnonyme');
}

// Si la fonction ci-dessous est écrite sur une seule ligne, on peut omettre les accolades le mot-clef return est implicite:

var uneFonctionSimple = () => 15 + 17;

var resultat = uneFonctionSimple();
alert(resultat);

var autreFonctionAvecArgument = message => {
    alert(message);
};
autreFonctionAvecArgument('Je fonctionne');
