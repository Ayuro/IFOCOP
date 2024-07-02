function ft_aDay() {
    var mots = [8,'je me lève', 13, 'je déjeune', 23, 'je vais dormir'];
    var str;
    str = ft_textConstruct(mots, 0);
    str += ft_textConstruct(mots, 2);
    str += ft_textConstruct(mots, 4);
    alert(str);
}

function ft_textConstruct(arg, nb) {
    var i = nb;
    var end = nb + 2
    var str = 'Il est ';
    while (i < end) {
        if (isNaN(arg[i]) == false)
            str += arg[i] + 'h' + ', ';
        else
            str += arg[i] + '. ';
        i++;
    }
    return(str);
}