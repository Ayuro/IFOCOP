function estPremier(élément, index, array) {
    var début = 2;
    while (début <= Math.sqrt(élément)) {
      if (élément % début < 1) {
        return false;
      } else {
        début++;
      }
    }
    return élément > 1;
  }
  
  console.log([4, 6, 8, 12].findIndex(estPremier)); // -1, aucun trouvé
  console.log([4, 6, 7, 12].findIndex(estPremier)); // 2

const fruits = ["pomme", "banane", "melon", "fraise", "raisin"];

const indice = fruits.findIndex(fruit => fruit === "fraise");
console.log(indice); // 3
console.log(fruits[indice]); // fraise 


const inventaire1 = [
    {nom: 'pommes', quantité: 2},
    {nom: 'bananes', quantité: 0},
    {nom: 'cerises', quantité: 5}
  ];
  
  function estCerises(fruit) {
    return fruit.nom === 'cerises';
  }
  
  console.log(inventaire1.find(estCerises));
  // { nom: 'cerises', quantité: 5}

  const inventaire2 = [
    {nom: 'pommes', quantité: 2},
    {nom: 'bananes', quantité: 0},
    {nom: 'cerises', quantité: 5}
  ];

const resultat = inventaire2.find( fruit => fruit.nom === 'cerises');
console.log(resultat);
// { nom: 'cerises', quantité: 5}