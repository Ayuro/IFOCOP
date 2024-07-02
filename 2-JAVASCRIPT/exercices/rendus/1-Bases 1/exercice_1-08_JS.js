var monuments = ['Berlin',['Mur de Berlin','Porte de Brandebourg','Château de Charlottenburg'] ,'Paris',['Notre-Dame', 'Tour-Eiffel', 'Beaubourg','Opera','Palais du Luxembourg'], 'Rome', ['Forum','Colisée','Chapelle Sixtine', 'Pantheon']];
alert(monuments[1][1]);
alert(monuments[3][4]);
alert(monuments[5][2]);
var desNombres = [40,58,[478,85,745,8],74,[72,14],[80,741,97]];
var nb1 = desNombres[0] * desNombres[2][3];
var nb2 = desNombres[5][0] / desNombres[2][3];
var nb3 = desNombres[5][1] + desNombres[4][1];
alert(nb1);
alert(nb2);
alert(nb3);

// Les 6 vaches sont devant la maison

var desMorceaux = [6,['herbe','route','maison','sont'],['rue',[5,'vaches','Les','mouton'],'chèvre'],['devant','lui','la'],' ',['!','.']];

var space = desMorceaux[4];
alert(desMorceaux[2][1][2] + space + desMorceaux[0] + desMorceaux[4] + desMorceaux[2][1][1] + desMorceaux[4] + desMorceaux[1][3] + desMorceaux[4] + desMorceaux[3][0] + desMorceaux[4] + desMorceaux[3][2] + desMorceaux[4] + desMorceaux[1][2] + desMorceaux[5][1]);