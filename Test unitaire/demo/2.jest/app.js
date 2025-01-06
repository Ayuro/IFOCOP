const somme = (a, b) => {
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

module.exports.somme = somme;
