'use strict';


// La variable var (type déprécier) peut être réasigné à volonté 
var myVar = 'toto';

myVar = 42;

function myFunction() {
    let test4;

    try {
        // On lui préfère let réasignable mais plus stable. Ou const, qui n'est pas réasignale
        var test = 'test';
        let test2 = 'test 2';
        const test3 = 'test 3';
        test4 = 'test 4';

        test2 = {};
        test2 = function () {};
        test2 = 42;

        test3 = {};
        test3 = function () {};
        test3 = 42;
    } catch (error) {
        console.error(error);
    }
    test = {};
    test = function () {};
    test = 42;

    console.log(test);
    console.log(test2);
    console.log(test3);
    console.log(test4);
}

myFunction();