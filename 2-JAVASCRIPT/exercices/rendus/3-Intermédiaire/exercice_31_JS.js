function ft_toGoogle() {
    if (confirm('Would you like to go on Google?') == true) {
        open('https://www.google.com', 'Google', 'directories=no,menubar=no');
    } else {
        str = prompt('Please, type the url of an aternative website');
        if ( str != undefined) {
            open(str);
        } else {
            alert('Tant pis!');
        }
    }
}