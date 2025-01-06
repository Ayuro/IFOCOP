const app = require("./app.js");
const laFonctionATester = app.somme;

describe("Ceci est le début des tests de la fonction somme :", () => {
  test("Elle devrait renvoyer 4 quand on lui passe 2 et 2 :", () => {
    expect(laFonctionATester(2, 2)).toBe(4);
  });

  test('Elle devrait renvoyer 4 quand on lui passe 2 et "2"', () => {
    expect(laFonctionATester(2, "2")).toBe(4);
  });

  test('Elle devrait renvoyer 4 quand on lui passe "2" et 2', () => {
    expect(laFonctionATester("2", 2)).toBe(4);
  });

  test('Elle devrait renvoyer 4 quand on lui passe "2" et "2" :', () => {
    expect(laFonctionATester("2", "2")).toBe(4);
  });

  test("Elle devrait renvoyer 2 quand on lui passe undefined et 2 :", () => {
    expect(laFonctionATester(undefined, 2)).toBe(2);
  });

  test("Elle devrait renvoyer 2 quand on lui passe 2 et undefined :", () => {
    expect(laFonctionATester(2)).toBe(2);
  });
});
