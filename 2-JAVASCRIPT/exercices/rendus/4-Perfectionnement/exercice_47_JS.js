function ft_countDigit() {
    var nb = prompt('Gimme a number');
    var i = 0;
    while (nb[i] != null)
        i++;
    alert(nb + ' compte: ' + i + ' digits');
}
