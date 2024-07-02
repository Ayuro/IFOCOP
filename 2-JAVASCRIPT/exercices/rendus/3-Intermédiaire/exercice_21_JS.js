function ft_data() {
    var str;
    var str1;
    while (true) {
        str = prompt();
        if (str !== null && str !== '') {
            while (true) {
                str1 = prompt();
                if (str1 !== null && str1 !== '') {
                    alert(str + ' ' + str1);
                    break;
                }
            }
            break;
        };
    }
}