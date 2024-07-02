function ft_typeNb() {
    var nb;
    var nb1;
    var strError = 'A number we said!';
    var strError1 = 'Are you fracking kinding me?!';
    var strQsn = 'Please type a number';
    var strQsn1 = 'Please type a second number';
    nb = ft_force(nb, strError, strQsn);
    nb1 = ft_force(nb1, strError1, strQsn1);
    alert(nb+nb1);
}

function ft_force(nb, strError, strQsn) {
    while (true) {
        nb = prompt(strQsn);
        if (isNaN(parseFloat(nb)) == true) {
           alert(strError)
        } else {
            return(parseFloat(nb));
        }
    }
}