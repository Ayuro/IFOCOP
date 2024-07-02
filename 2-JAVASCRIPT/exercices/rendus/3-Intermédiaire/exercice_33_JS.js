function ft_urlRoulette() {
    var urlTable = ["https://www.google.com", "https://developer.mozilla.org/en-US/", "https://www.warhammer.com", "https://playpaxdei.com/fr-fr", "https://42.fr"];

    for (i=0;i<4;i++) {
        if (confirm('Would you like to go on this site: ' + urlTable[i] + ' ?') == true){
            open(urlTable[i]);
            break;
        }
    }
    if (i == 4)
        ft_urlRoulette();
}