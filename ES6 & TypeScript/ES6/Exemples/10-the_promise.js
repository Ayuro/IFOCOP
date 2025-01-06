// https://frank.taillandier.me/2017/03/23/comprendre-les-promesses-en-javascript/
// opération asynchrone
const cuireBurger = (type) => { /*...*/ };

// opération normale
const faireMilkshake = (type) => { /*...*/ };

// fonction commander qui retourne une promesse
const commander = (type) => {
  return new Promise((resolve, reject) => {
    const burger = cuireBurger(type);
    burger.ready = (err, burger) => {
      if (err) {
        return reject(Error('Erreur en cuisine'));
      }
      return resolve(burger);
    }
  })
};

commander('JacquesBurger')
    .then( burger => {
        const milkshake = faireMilkshake('vanille');
        return { burger: burger, shake: milkshake };
    })
    .then( foodItems => {
        console.log('C’EST LA FÊTE DU BURGER !', foodItems);
    })
    .catch( err => {
        console.log(err);
    });




const p1 = new Promise((resolve, reject) => {
    resolve("Succès !");
    // ou
    // reject("Erreur !");
    });
    
    p1.then((valeur) => {
    console.log(valeur); // Succès !
    }, (raison) => {
    console.log(raison); // Erreur !
    });

    Promise.resolve("toto")
    // 1. Première étape, on reçoit "toto" et on le concatène avec
    //    "truc", ce qui résoud la première étape puis on passe au
    //    deuxième then
    .then(function(string) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          string += 'truc';
          resolve(string);
        }, 1);
      });
    })
    // 2. Deuxième étape, on reçoit "tototruc" et on enregistre une
    //    fonction de rappel pour manipuler cette chaîne puis l'imprimer
    //    dans la console. Avant cela, on passe la chaîne intacte au
    //    prochain then
    .then(function(string) {
      setTimeout(function() {
        string += 'baz';
        console.log(string);
      }, 1)
      return string;
    })
    // 3. On affiche un message sur le code, celui-ci sera affiché
    //    avant que la chaîne soit traitée dans le bloc précédent
    //    qui agit comme un bloc asynchrone.
    .then(function(string) {
      console.log("Et voilà la dernière, qui risque d'arriver avant la 2e");
  
      // Ici, la chaîne n'aura pas le morceau 'baz' car la fonction
      // setTimeout retarde l'exécution du code.
      console.log(string);
  });