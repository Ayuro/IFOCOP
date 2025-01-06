const db = require('../mongo');

const injection = (identifiant, motDePasse) => {
  return db.connexion(identifiant, motDePasse)
    .then(resultat => {
      if (resultat) {
        return "Vous êtes connecté.";
      }
      return "Mauvais identifiants.";
    })
    .catch(erreur => {
      throw erreur;
    });
};

module.exports = { injection };