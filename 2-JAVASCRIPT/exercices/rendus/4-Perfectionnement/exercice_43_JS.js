function ft_bDay () {
    var day = parseInt(prompt('Choose your day between 1 and 7 (included Mathafacka!)'));
    while (isNaN(day) == true || day < 1 || day > 7) {
        day = prompt('I said a number between 1 and 7 you mathafacka!');
    }
    if (day == 1)
        alert('Monday? Nice, you get to work early!');
    if (day > 1 && day < 5)
        alert('Middle of the week, it\'s a nice time, soon you can rest');
    if (day == 5)
        alert('Sweet Jesus, weekend incoming!!!');
    if (day > 5)
        alert('Just born and already resting ;)');
}