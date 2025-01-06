var toto;
var titi = 99;

// Création d'un objet littéral, on utilise les {}

boite = {
    "Ceci est un emplacement dans un objet avec @ dans le nom": 1337,
    toto: "sel",
    titi: 100,
    tutu: {
        toto: {
            titi: {
                tutu: "poivre",
                tonton: function() {}
            },
        },
    },
    tata: function(){},
    tonton: true
}; // Notation objet (littéral) en JavaScript

// Utiliser une variable:
titi + 2; //101

// Utiliser une propriété :
// 2 possibilités pour pointer vers une propriété :
// 1. Avec le .
boite.titi; // 100 - pointe vers la valeur
boite.tata; // function () {} - pointe vers la valeur
boite.tata(); // éxécute la fonction
boite.tutu.toto.titi.tutu // "poivre" - pointe vers la valeur
// boite."Ceci est un emplacement dans un objet avec @ dans le nom" Interdit et contraire à la loi de syntax
// boite.Ceci est un emplacement dans un objet avec @ dans le nom Interdit et contraire à la loi de syntax
// 2. avec les []
boite["titi"] // 100 - pointe vers la valeur
boite["tata"] // fonction () [] pointe vers la valeur
boite["tata"]() // éxécute la fonction
boite["Ceci est un emplacement dans un objet avec @ dans le nom"] // pointe vers la valeur
boite["tutu"]["toto"]["titi"]["tutu"] // pointe vers la valeur

// Mais on peut aussi faire des mix (surtout en cas de nom de valeur WTF ou en cas de conflits, notamment entre JS et CSS)
boite["tutu"].toto["titi"]["tutu"]

// Ajouter une propriété ou une méthode à l'intérieur d'un objet
// On peut procéder par assignation directe:
boite.nouvelEmplacement = "nouvelle valeur";
// boite.nouvelEmplacement = function () {};
boite["autre Emplacement"] = "Autre valeur";

// supprimer une propriété d'un objet
// utilisation du mot-clef delete
delete boite.nouvelEmplacement;

var capitaine = {
    nom: "Kirk",
    prenom: "James Tiberius"
};

var second = {
    nom: "Spock",
    prenom: "S\’Chn T\’Gai"
};

var vaisseau = {
    Nom: "Enterprise",
    equipage: {capitaine, second}
};

capitaine.sonVaisseau = vaisseau;
second.sonVaisseau = vaisseau;