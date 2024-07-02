function ft_bissextile(nb) {
    if (nb%4 == 0 && nb%100 != 0 || nb%400 == 0)
        alert(nb + ' est une année bissextile');
    else
        alert(nb + ' n\'est pas une année bissextile');
}