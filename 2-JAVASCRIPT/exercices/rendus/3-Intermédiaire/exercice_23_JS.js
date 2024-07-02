function ft_rightNb() {
    var nb;
    while (true) {
        nb = prompt('Please type the number \"15\"');
        if (isNaN(parseFloat(nb)) == true) {
            alert('Please type a number');
        } else {
            if (nb != 15) {
                alert('Please type the right number');
            } else {
                alert('Thanks you');
                break;
            }
        }
    }
}