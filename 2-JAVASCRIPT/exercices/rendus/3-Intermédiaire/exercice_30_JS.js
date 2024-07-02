function ft_openWindow() {
    while (true) {
        str = prompt();
        if (typeof str == 'string' && str != '' && str != ' '){
            open(str, 'Custom', 'directories=no,menubar=no');
            break;
        };
    }
}