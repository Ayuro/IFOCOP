/* Ecrire une fonction qui prendra deux arguments : 
Une chaîne de caractères et un nombre entier.
Cette fonction aura pour objectif de retourner une promesse
qui, après un certain délai, retournera la chaîne de caractère
le nombre de fois indiqué par le nombre entier (resolve). Exemple : "Hello World! Hello World!" si on lui donne "Hello World!" et 2 comme arguments.

Si un des deux paramètres n'est pas présent, ou si le premier paramètre
n'est pas une chaîne de caractères ou si le deuxième paramètre n'est pas un nombre,
dans ce cas la promesse retournera une erreur (reject).

En utilisant la méthode de votre choix, vous loggerez en console le résultat de l'exécution de cette fonction (.then().catch() ou async/await avec try catch)


Une fonction
*/

const repeatSameSentence = (str, num) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (
        !str ||
        !num ||
        'string' !== typeof str ||
        'number' !== typeof num
      ) {
        reject(new Error(`La fonction a besoin de deux arguments : le premier doit être une chaîne de caractères et le deuxième doit être un nombre.`));
      } else {
        /* Solution la plus efficace et élégante : */
        // resolve(`${str} `.repeat(num));

        /* Sinon, avec une boucle for : */
        // let repeatedSentence = '';
        // for (let i = 1; i < num; i++) {
        //   repeatedSentence += `${str} `;
        // }
        
        /* Aussi avec une boucle while : */
        // let i = num;
        // while (1 < i) {
        //   repeatedSentence += `${str} `;
        //   i--;
        // }
        // resolve(repeatedSentence);

        /* Avec une fonction récursive : */
        return (function (accu, sentence) {
          console.log('Fonction exécutée');
          if (num > accu) {
            console.log('test');
            sentence += `${str} `;
            accu++;
            console.log('accu: ', accu, 'sentence: ', sentence);
            return repeatSameSentence(str, num)(accu, sentence);
          }
          resolve(sentence);
        });
      }
    }, 500);
  })
};

repeatSameSentence('Salut tout le monde !', 6)
  .then(function (donneesRecues) {
  console.log('Données reçues : ', donneesRecues);
}).catch(function (error) {
  console.error(error);
})