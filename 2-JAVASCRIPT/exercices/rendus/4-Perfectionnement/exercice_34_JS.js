var str;

function ft_question1() {
    str = prompt();
    while (str == '' || str == undefined) {
        str = prompt();
    }
    alert(ft_question2(str));
}

function ft_question2(str) {
    str1 = prompt();
    while (str1 == '' || str1 == undefined) {
        str1 = prompt();
    }
    return(str = str + str1);
}