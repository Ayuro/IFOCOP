function ft_giveNbs() {
    alert(ft_nbs());
}

function ft_nbs() {
    var i = 0;
    var j = 0;
    var result = 0;
    var table = [];
    while (confirm('Would you like to give me a number?') == true) {
        table[j] = prompt('Give me a number!');
        j++;
    }
    while (i < table['length']) {
        result += parseFloat(table[i]);
        i++;
    }
    return(result / table['length']);
}