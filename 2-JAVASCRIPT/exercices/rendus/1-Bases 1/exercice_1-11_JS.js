var Bjr = 'Bonjour';
var Lm = 'le monde';
var tab = [Bjr, Lm];
var Prune = 'Prunes'

function maFunction(arg) {
    arg = 6 + ' ' + arg;
    return arg;
};

function maFunctionTab(arg) {
    return(arg[0] + ' ' + arg[1]);
};

alert(maFunction(Prune));
alert(maFunctionTab(tab));