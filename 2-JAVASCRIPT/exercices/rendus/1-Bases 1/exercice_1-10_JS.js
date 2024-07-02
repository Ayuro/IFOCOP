Bjr = 'Bonjour';
Lm = 'le monde';
tab = [Bjr, Lm];

function maFunction(arg) {
    alert(arg);
};

function maFunction2(arg1, arg2) {
    alert(arg1 + ' ' + arg2);
};

function maFunctionTab(arg) {
    alert(arg[0] + ' ' + arg[1]);
};

var maFunctionTab2 = function(arg) {
    alert(arg[0] + ' ' + arg[1]);
}

maFunction(Bjr);
maFunction2(Bjr, Lm);
maFunctionTab(tab);
maFunctionTab2(tab);
