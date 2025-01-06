const utilisateurs = [
  {
    id: "ifocop",
    couleur: "rouge",
  },
  {
    id: "tom",
    couleur: "bleu",
  },
  {
    id: "admin",
    couleur: "vert",
  },
  {
    id: "larry",
    couleur: "jaune",
  },
];

const retourDB = (identifiant, couleur) => {
  utilisateurs.forEach((utilisateur) => {
    let retour = "Bravo, vous avez réussi à accéder à la ressource.";
    if (utilisateur.id !== identifiant) {
      retour = "Identifiant non trouvé.";
    }
    if (utilisateur.couleur !== couleur) {
      retour = "La couleur entrée n'est pas la bonne.";
    }
    return retour;
  });
};

module.exports = { retourDB };
