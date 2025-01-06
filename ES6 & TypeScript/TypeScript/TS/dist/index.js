"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myFirstVariable = 'Hello World';
console.log('myFirstVariable: ', myFirstVariable);
const addTwoNumbers = (num1, num2) => {
    return num1 + num2;
};
const result = addTwoNumbers(21, 21);
console.log('result: ', result);
class Person {
    firstname;
    lastname;
    age;
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    sayHi() {
        console.log(`Hello, my name is ${this.firstname} ${this.lastname}`);
        return `${this.firstname} ${this.lastname}`;
    }
}
;
const you = new Person('Flavien', 'LEMAISTRE');
you.sayHi();
//# sourceMappingURL=index.js.map