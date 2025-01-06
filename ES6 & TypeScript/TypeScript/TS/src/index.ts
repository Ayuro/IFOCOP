let myFirstVariable = 'Hello World';
console.log('myFirstVariable: ', myFirstVariable);

const addTwoNumbers = (num1: number, num2: number): number => {
    return num1 + num2
}

const result: number = addTwoNumbers(21, 21)

console.log('result: ', result);

class Person {
    firstname: string;
    lastname: string;
    age?: number;
    static id : number = 15484212; // Une propriété statique n'est accessible que depuis la classe elle-même, soit person.id. Les classes enfants et les instances n'y  on pas accès directement; il faudra passer par un getter.
    #species: string = 'Homo sapiens sapiens'; // La syntaxe #<property_name> existe également en Javascript moderne et permet de définir une propriété ou une méthode comme étant private

    constructor(firstname: string, lastname: string, age?: number) {
        this.firstname = firstname;
        this.lastname = lastname;
        if (age) {
            this.age = age;
        }
    }

    private describePerson() {
        console.log('Une personne représente une personne physique.');
    }

    get desccription() {
        return this.describePerson();
    }

    get species() {
        return this.#species;
    }

    set species(newSpecies: string) {
        this.#species = newSpecies;
    }

    sayHi(): string {
        console.log(`Hello, my name is ${this.firstname} ${this.lastname}`);
        return `${this.firstname} ${this.lastname}`;
    }
};

const you: Person = new Person ('Flavien', 'LEMAISTRE');
you.sayHi()