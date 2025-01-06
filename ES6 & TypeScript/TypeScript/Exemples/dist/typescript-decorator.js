"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const ScellerLeConstructeur = (constructor) => {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
};
// Ci-après un décorateur de méthode. Il prendra toujours en argument target, propertyKey, descriptor.
const ModifyTitle = (newTitle) => {
    return (target, propertyKey, descriptor) => {
        descriptor.value = function () {
            console.log(`Le titre est : ${newTitle}`);
        };
    };
};
let RapportDeBug = class RapportDeBug {
    constructor(t) {
        this.type = "rapport";
        this.title = t;
    }
    readTitle() {
        console.log(`Le titre est inconnu`);
    }
};
__decorate([
    ModifyTitle('Un ouvrage magnifique !')
], RapportDeBug.prototype, "readTitle", null);
RapportDeBug = __decorate([
    ScellerLeConstructeur
], RapportDeBug);
;
console.log('Rapport de bug: ', RapportDeBug);
const monRapport = new RapportDeBug('Super titre');
monRapport.readTitle();
// Ci-dessous le typage des différents décorateurs principaux, comme décrits par TypeScript :
// type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
// type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
/* type MethodDecorator = <T>(
  target: Object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<T>
) => TypedPropertyDescriptor<T> | void; */
// Accessor Decorator = Method Decorator, globalement. Seule différence : les propriétés de l'objet 'descriptor' qui ne sont plus value, writable, enumerable, configurable comme pour une méthode, mais get, set, enumerable, configurable.
/* type ParameterDecorator = (
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) => void; */
/* NE PAS RETIRER CE COMMENTAIRE
  @classDecorator
  class Bird {
    @propertyDecorator
    name: string;
    
    @methodDecorator
    fly(
      @parameterDecorator
        meters: number
    ) {}
    
    @accessorDecorator
    get egg() {}
  }

*/
function immutable(target, propertyKey, descriptor) {
    const original = descriptor.set;
    descriptor.set = function (value) {
        return original.call(this, { ...value });
    };
}
class C {
    constructor() {
        this._point = { x: 0, y: 0 };
    }
    set point(value) {
        this._point = value;
    }
    get point() {
        return this._point;
    }
}
__decorate([
    immutable
], C.prototype, "point", null);
const c = new C();
const point = { x: 1, y: 1 };
c.point = point;
console.log(c.point === point); // Renvoie false car on ne peut pas modifier la valeur du setter point puisqu'il est décoré par immutable qui le rend immuable.
const student1 = {
    firstname: 'Toto',
    lastname: 'Dupont',
};
const student2 = {
    firstname: 'Aurore',
    lastname: 'Sifflet',
    age: 38,
    sayName() {
        return `Coucou je suis ${this.firstname} !`;
    }
};
const student3 = {
    firstname: 'William',
    lastname: 'Mercier',
    age: 33,
    sayName() {
        return `Coucou je suis ${this.firstname} !`;
    }
};
const student4 = {
    firstname: 'Titi',
    lastname: 'Dugenou',
    age: 24
};
const students = [student1, 42, student4, 'Coucou', student2, true, student3];
const isRealIfocopStudent = (student) => {
    return student.sayName !== undefined;
    // return (student as IfocopStudent).sayName !== undefined; // Autre syntaxe pour la phrase du dessus
};
const calculateNumberOfRealIfocopStudents = (studentsArray) => {
    let numberOfIfocopStudents = 0;
    studentsArray.forEach(student => {
        if (isRealIfocopStudent(student)) {
            numberOfIfocopStudents += 1;
        }
    });
    return numberOfIfocopStudents;
};
console.log('Nombre de véritables étudiants de l\'IFOCOP: ', calculateNumberOfRealIfocopStudents(students));
