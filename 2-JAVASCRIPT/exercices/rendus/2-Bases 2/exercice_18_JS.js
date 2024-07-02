function ft_data() {
    var str;
    while (true) {
        str = prompt();
        if (str !== null && str !== '') {
            alert(str);
            break;
        };
    }
}