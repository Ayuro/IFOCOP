// Déclaration d'un décorateur pour les personnages (permet de leur faire "enfiler"un costume)
// Ce type de construction s'appelle fonction usine (factory function)
const mettreArmureDeIronMan = function(couleur) {
  return function(unPersonnage){
    unPersonnage.couleur = couleur;
    unPersonnage.aDesBrasMetallique = true;
    unPersonnage.aUnPlastronProtecteur = true;
    unPersonnage.leveLaMain =  function(){
      console.log("Vouiissssh (c'est le bruit du rayon d'énérgie), etc...");
    };
  }
}

// Déclaration de la "classe" qui permet de créer un personnnage
class PersonnageMarvel {
  constructor(prenom, nom) {
    this.prenom = prenom;
    this.nom  = nom;
  }

  sePresenter()  {
    console.log(`Je m'appelle ${this.prenom} ${this.nom}`);
  }
}

// Crée des personnages
const p1 = new PersonnageMarvel("Tony", "Stark");
const p2 = new PersonnageMarvel("Pepper", "Pots");
const p3 = new PersonnageMarvel("James", "Rhodes");

// J'utilise le décorateur pour récupéer des décorateurs adapatés pour mes personnages
const mettreArmureDeIronManNoire = mettreArmureDeIronMan("noire");
const mettreArmureDeIronManRouge = mettreArmureDeIronMan("rouge");

// J'utilise le décorateur pour ajouter des méta-données aux personnages
mettreArmureDeIronManRouge(p2);

p2.leveLaMain()
console.log('Couleur de p2: ', p2.couleur);

mettreArmureDeIronManNoire(p3);

console.log('p3 a des bras métalliques ?? ', p3.aDesBrasMetallique ? 'Oui' : 'Non'); // Oui
console.log('Couleur de p3: ', p3.couleur);


const blabla = (arg1, arg2) => {
  console.log(`${arg1} ${arg2}`);
  return `${arg1} ${arg2}`;
}

blabla(uneChaineDeCaracteres, unBooleen);

var uneChaineDeCaracteres = 'Une chaîne de caractères';
var unNombre = 42;
var unBooleen = true;

unBooleen = 'Hihihihi maintenant je suis une chaîne de caractères !';


const port = process.env.PORT || 3000;

console.log('port? ', port);

const myMap = new Map([
  ['a', 'Hello'],
  ['b', 'world'],
  ['c', 'world']
]);

// myMap.set('a', 'Hello');
// myMap.set('b', 'world');
// myMap.set('c', 'world');

console.log('myMap: ', myMap);