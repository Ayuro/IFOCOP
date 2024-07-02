function ft_giveArgs() {
    alert(ft_args(1, 2, 3, 4));
}

function ft_args() {
    var i = 0
    var result = 0;
    while (i < arguments['length']) {
        result += arguments[i];
        i++;
    }
    return(result / arguments['length']);
}