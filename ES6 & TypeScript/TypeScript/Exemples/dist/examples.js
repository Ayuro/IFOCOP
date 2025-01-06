"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const firstTypedVariable = 'Ma première variable typée !';
const firstTypedFunction = (text) => {
    return text;
};
console.log(firstTypedFunction('Hello world!'));
const awaitedPromise = async (url) => {
    const fetchedData = await fetch(url);
    const jsonData = await fetchedData.json();
    return jsonData;
};
const displayData = (dataFetchingFn) => {
    return async (url) => {
        const data = await dataFetchingFn(url);
        console.log('Data received: ', data);
        return data;
    };
};
displayData(awaitedPromise)('https://jsonplaceholder.typicode.com/todos/1');
const sealed = (constructor) => {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
};
const log = (target, key, descriptor) => {
    console.log(`Logging key ${key}`);
    console.log(`Logging target ${JSON.stringify(target)}`);
    console.log(`Logging descriptor ${JSON.stringify(descriptor)}`);
    return descriptor;
};
const configurableProperty = (value) => (target, propertyKey, descriptor) => { descriptor.enumerable = value; };
function enumerableProperty(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
let BugReport = class BugReport {
    constructor(t) {
        this.type = 'report';
        this.title = t;
    }
    get _title() {
        console.log('The title is ' + this.title);
        return this.title;
    }
};
__decorate([
    log
], BugReport.prototype, "_title", null);
BugReport = __decorate([
    sealed
], BugReport);
const report = new BugReport('Super titre');
report._title;
// Voir Partial<T>, Required<T>, Readonly<T>, Record<K,T>, Pick<K,T>, Omit<K,T>, ReturnType<T>
// https://www.typescriptlang.org/docs/handbook/utility-types.html
const logWithSeverity = (severity) => {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`[${severity}] ${args[0]}`);
            return originalMethod.apply(this, args);
        };
    };
};
class Logger {
    info(error) {
        // Log informational message
    }
    error(error) {
        // Log error message
    }
}
__decorate([
    logWithSeverity("INFO")
], Logger.prototype, "info", null);
__decorate([
    logWithSeverity("ERROR")
], Logger.prototype, "error", null);
const logger = new Logger();
logger.info('Vous avez un nouveau message !'); // Logs "[INFO] info called"
logger.error('Uh oh ! Quelque chose d\'inattendu s\'est produit !'); // Logs "[ERROR] error called"
