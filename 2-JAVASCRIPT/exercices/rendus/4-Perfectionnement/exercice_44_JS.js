function ft_bDay () {
    var day = parseInt(prompt('Choose your day between 1 and 7 (included Mathafacka!)'));
    while (isNaN(day) == true || day < 1 || day > 7) {
        day = prompt('I said a number between 1 and 7 you mathafacka!');
    }

    switch(day) {
        case 1:
            alert('Monday? Nice, you get to work early!');
            break;
        case 2:
        case 3:
        case 4:
            alert('Middle of the week, it\'s a nice time, soon you can rest');
            break;
        case 5:
            alert('Sweet Jesus, weekend incoming!!!');
            break;
        case 6:
        case 7:
            alert('Just born and already resting ;)');

    }
}