var tableNb = ['21', '42', '38', '15'];

function ft_numbers() {
    // var nb1 = prompt('Please, give me a number.');
    // var nb2 = prompt('Please, give me a second number.');
    var lng = tableNb['length'];
    for(i=0;i<lng;i++) {
        var j = 0;
        var nb1;
        var nb2;
        if (confirm('Voulez vous utiliser ' + tableNb[i] + ' ?') == true) {
            nb1 = tableNb[i];
            for(j=0;j<lng;j++) {
                if (confirm('Voulez vous utiliser ' + tableNb[j] + ' ?') == true) {
                    nb2 = tableNb[j];
                    break;
                }
            }
            if (j == lng)
                if (ft_error())
                    break;
            break;
        }
    }
    if (i == lng) {
        if (ft_error() == 'quit') {
            ;
        }
    } else
        ft_chooseYourCalculus(nb1, nb2);
}

function ft_error() {
    if (confirm('You didn\'t choose any number, would you like to quit?') == true)
        return('quit');
    else
        ft_numbers();
}

function ft_chooseYourCalculus (arg1, arg2) {
    if (prompt('Choose your calculus: 1 for addition or 2 for multiplication') == 1) 
        alert(ft_addition(arg1, arg2));
    else
        alert(ft_multiplication(arg1, arg2));
}

function ft_addition(arg1, arg2) {
    return(parseFloat(arg1) + parseFloat(arg2));
}

function ft_multiplication(arg1, arg2) {
    return(parseFloat(arg1) * parseFloat(arg2));
}