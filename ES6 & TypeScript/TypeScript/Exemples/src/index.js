"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var uneChaineDeCaracteres = 'Une chaîne de caractères';
var unNombre = 42;
var unBooleen = true;
var unBooleenOuUnNombre = 42;
unBooleenOuUnNombre = false;
var test = function () { return undefined; };
var flavien = {
    firstname: "Flavien",
    lastname: "LEMAISTRE",
    age: 38,
    email: "nope@nope.nope",
    sayName: function (name) {
        console.log("Coucou, je m'appelle ".concat(name));
        return 'coucou';
    }
};
var obj = { a: 5 };
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo1 = {
    title: "organize desk",
    description: "clear clutter",
};
var updatedTodo = updateTodo(todo1, {
    title: 'clean up the house',
    // message: 'and do it quickly!' // Interdit car même si le type de cet objet est Partial<Todo> il faut néanmoins quand même que les propriétés spécifiées existent dans le type d'origine, à savoir Todo.
});
console.log('updatedTodo: ', updatedTodo);
;
var awaitedPromise = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var fetchedData, jsonData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(url)];
            case 1:
                fetchedData = _a.sent();
                return [4 /*yield*/, fetchedData.json()];
            case 2:
                jsonData = _a.sent();
                // jsonData.title = 'Toto'; // Impossible car nous avons défini que toutes les propriétés du type passé en argument au type utilitaire Readonly sont read only (non modifiables).
                console.log('Data received: ', jsonData);
                return [2 /*return*/, jsonData];
        }
    });
}); };
// En assignant la valeur de la propriété "module" du fichier tsconfig.json à "ES2022" ou "ESNext", on peut utiliser le mot-clé await au niveau global (sans avoir à l'imbriquer dans une fonction asynchrone) et donc faire la chose suivante :
await awaitedPromise('https://jsonplaceholder.typicode.com/todos/1');
// Sinon, on doit créer une fonction synchrone, qui va retourner une fonction asynchrone qui elle-même va await la valeur de retour de la fonction awaitedPromise avant de retourner les données reçues...
var displayData = function (dataFetchingFn) {
    return function (url) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dataFetchingFn(url)];
                case 1:
                    data = _a.sent();
                    console.log('Data received: ', data);
                    return [2 /*return*/, data];
            }
        });
    }); };
};
displayData(awaitedPromise)('https://jsonplaceholder.typicode.com/todos/1');
var personneStandard = {
    firstname: 'Alex',
    lastname: 'Masson',
    age: 36,
    email: 'alexandre.masson@virtuoworks.com',
    sayName: function () {
        console.log("Bonjour je m'appelle ".concat(this.firstname, " !"));
    }
};
var personneSansNomDeFamille = {
    firstname: 'Aurore',
    age: 38,
    email: 'aurore.sifflet@ifocop.fr',
    sayName: function () {
        console.log("Bonjour je m'appelle ".concat(this.firstname, " !"));
    }
};
var personneSimpliste = {
    firstname: 'Wiliam',
    lastname: 'Mercier'
};
var unTableauChelou = [
    'Toto',
    42,
    false,
    {
        firstname: 'Olivier',
        lastname: 'Machelart',
        age: 40,
        email: 'olivier.machelart@ifocop.fr'
    },
    45,
    true
];
// unTableauChelou.push(() => { return 'Coucou' }); // Interdit car le type Function ne fait pas partie du type Chelou
var unTableauNormal = ['Toto', 'Titi', 'Tata', 'Tutu'];
var monPremierTuple;
monPremierTuple = [
    42,
    'Toto',
    {
        firstname: 'Juan',
        lastname: 'Gimenez',
        age: 47,
        email: 'juan.gimenez@ifocop.fr',
        sayName: function () { console.log("Hello my name is ".concat(this.firstname, "!")); }
    }
];
var CitrusFruitsList;
(function (CitrusFruitsList) {
    CitrusFruitsList["oran"] = "orange";
    CitrusFruitsList["citr"] = "citron";
    CitrusFruitsList["mand"] = "mandarine";
    CitrusFruitsList["clem"] = "cl\u00E9mentine";
    CitrusFruitsList["pamp"] = "pamplemousse";
})(CitrusFruitsList || (CitrusFruitsList = {}));
;
var citron = CitrusFruitsList.citr;
var myFirstTypedFn = function (firstname, lastname) {
    console.log('function arguments: ');
    return "".concat(firstname, " ").concat(lastname);
};
console.log('Bonjour ' + myFirstTypedFn('Eli', 'Azoura') + ' !');
var hw = 'Hello World!';
var unknownVar;
unknownVar = hw;
console.log('longueur de la chaîne de caractères : ', unknownVar.length);
unknownVar = 42;
console.log('Voici mon nombre : ', (isNaN(unknownVar))); // Sans le type casting, TypeScript ne sait pas que notre variable unknownVar est de type number, même si nous avons réassigné sa valeur une ligne plus haut.
var partialCats = {
    mordred: { age: 16, breed: "British Shorthair" },
    boris: { age: 5, breed: "Maine Coon" },
    miffy: { age: 10, breed: "Persian" },
    olivier: { age: 40, breed: "Animus Watchus", isSleepy: true }
};
console.log(partialCats.olivier);
var aurore = {
    hasQuestion: true,
    isSleepy: false,
    firstname: 'Aurore',
    lastname: 'Sifflet',
    42: 'Yeah'
};
console.log('Aurore: ', aurore);
var firstFunction = function (arg1) {
    return function (arg2) {
        return function (arg3) {
            console.log("".concat(arg1, ", ").concat(arg2, ", ").concat(arg3));
            return "".concat(arg1, ", ").concat(arg2, ", ").concat(arg3);
        };
    };
};
firstFunction('Titi')('Tata')('Toto');
