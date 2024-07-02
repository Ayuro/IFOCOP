var unSimpleTableau = ['lundi','mardi', 'mercredi', 'jeudi', 'vendredi'];
unSimpleTableau[5] = 'Samedi';
unSimpleTableau[6] = 'Dimanche';
unSimpleTableau[7] = unSimpleTableau[0] + ' ' + unSimpleTableau[6];
alert(unSimpleTableau[5]);
alert(unSimpleTableau[6]);
alert(unSimpleTableau[7]);