function ft_typeNb() {
    var nb;
    var nb1;
    while (true) {
        nb = prompt('Please type a number');
        if (isNaN(parseFloat(nb)) == true) {
            alert('A number we said!');
        } else {
            while (true) {
                nb1 = prompt('Please type a second number');
                if (isNaN(parseFloat(nb1)) == true) {
                   alert('Are you kinding me?!')
                } else {
                    nb = parseFloat(nb);
                    nb1 = parseFloat(nb1)
                    alert(nb+nb1);
                    break;
                }
            }
            break;
        }
    }
}