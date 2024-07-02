 function ft_detection() {
    var str = prompt();
    alert(isNaN(parseFloat(str)));
 }

 function ft_selectNb () {
    nb = prompt('Please select a number');
    if (isNaN(parseFloat(nb)) == true) {
        alert('Vous devez saisir un nombre')
    } else {
        alert('Merci d\'avoir saisi un nombre')
    }
 }