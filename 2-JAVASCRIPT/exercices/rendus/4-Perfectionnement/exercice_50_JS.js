// Reprise de l'exercice 32

var ft_toGoogle = function() {
    if (confirm('Would you like to go on Google?') == true) {
        alert('ghjkj');
        open('https://www.google.com', 'Google', 'directories=no,menubar=no');
    } else {
        str = prompt('Please, type the url of an aternative website');
        if ( str != undefined) {
           open(str);
        } else {
            alert('Tant pis!');
            ft_toGoogle();
        }
    }
}