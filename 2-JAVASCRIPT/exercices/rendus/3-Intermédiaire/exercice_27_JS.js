function ft_typeNb() {
    var str;
    str = ft_force();
    alert(str);
}

function ft_force() {
    let words = [];
    var str;
    var i;
    for(i=0;i<4;i++) {
        while (true) {
            words[i] = prompt();
            if (isNaN(parseFloat(words[i])) == false || words[i] === '') {
                alert('type a string');
            } else {
                if (i == 0)
                    str = words[i] + ' ';
                else
                    str += words[i] + ' ' ;
                break;
            }
        }
    }
    for(i=0;words[i] != null;i++) {
        alert(words[i])
    }
    return(str + '.');
}