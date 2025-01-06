/* 
Exercice de pratique sur les décorateurs : 

Créer une classe qui représente ce que vous voulez
Donner à cette classe une propriété et une méthode
Créer deux fonctions décoratrices : une pour la propriété et une pour la méthode
Créer une instance de la classe
Appliquer les décorateurs sur l'instance nouvellement créée

*/

class Student {
    name ='Julien';
    getName() {
        console.log(`Je m'appelle ${this.name}`);
    }
}

const decorateName = (student) => {
    student.name = 'Timothée';
}

const decorateMethod = (student) => {
    student.getName = () => {
        return `Je m'appelle ${this.name}`;
    }
}

class SpaceMarine {
    constructor(name, chapterName, armorColor){
        this.name = name;
        this.chapterName = chapterName;
        this.armorColor = armorColor;
    }

    shotOut() {
        console.log(`I'm ${this.name} from the ${this.chapterName}. Fear my wrath!!!`);
    };
}

