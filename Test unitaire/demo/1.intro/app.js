const somme = (a, b) => {
  if (a === undefined && b === undefined) {
    return "Merci de fournir des arguments à la fonction.";
  }

  a = parseFloat(a);
  if (isNaN(a)) {
    a = 0;
  }

  b = parseFloat(b);
  if (isNaN(b)) {
    b = 0;
  }

  return a + b;
};

// const multiplie = (a, b) => {
//   // fait quelques opérations
// };

module.exports.somme = somme;
