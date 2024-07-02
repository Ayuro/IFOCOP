function ft_theQuestion() {
    str = prompt();
    if (str == null) {
        alert('Vous avez annulé la saisie')
        return;
    }
    if (str == 0) {
        alert('Empty')
    } else {
        alert('working mathafacka!!')
    }
};