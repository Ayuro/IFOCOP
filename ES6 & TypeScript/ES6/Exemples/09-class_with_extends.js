class Ville {
    constructor(nom, departement) {
        this.nom = nom;
        this.departement = departement;
    }

    situation() {
        console.log(`La ville de ${this.nom} est située dans le département ${this.departement}.`);
    }
}

class VilleAvecClimat extends Ville {
    constructor(nom, departement, lieu, climat) {
        super(nom, departement, lieu, climat);
        this.lieu = lieu;
        this.climat = climat;
    }

    geographie() {
        console.log(`Nous sommes en ${this.lieu} et le climat est de type ${this.climat}.`);
    }

    situation() {
        super.situation();
        console.log('COUCOU');
    }
}

class VillePlaine extends VilleAvecClimat {
    constructor(nom, departement, lieu, climat) {
        super(nom, departement, lieu, climat);
    }

    situation() {
        console.log('YOUPI');
        super.situation();
    }
}

var chamonix = new VilleAvecClimat('Chamonix', 'Hautes-Savoie', 'Montagne', 'Montagnard');
console.log(chamonix);
chamonix.situation();

var dijon = new VillePlaine('Dijon', 'Côtes d\'Or', 'Plaine', 'Tempéré');
console.log(dijon);
dijon.situation();