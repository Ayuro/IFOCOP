const assert = require("assert");
const app = require("../app.js");

console.log(`****** Tests Unitaires ******`);

/* TEST AVEC UNE SIMPLE FONCTION */
// const estStrictementEgal = (resultatAttendu, resultatActuel) => {
//   if (resultatAttendu === resultatActuel) {
//     console.log("ça marche !");
//   } else {
// On peut faire planter littéralement le programme si le test unitaire n'est pas passé
//     throw new Error("ça plante !");
// ou juste afficher un message dans la console
// console.error("ça plante !");
//   }
// };

// puis on l'exécute pour voir si tout fonctionne
// estStrictementEgal(2, 2);
// estStrictementEgal(2, "2");
// estStrictementEgal(2, 1);
// estStrictementEgal(2, undefined);
// estStrictementEgal("2", "2");

/* TESTS UNITAIRES AVEC LE MODULE ASSERT DE NODEJS */
const laFonctionATester = app.somme;
// console.log("Ceci est le début des tests de la fonction somme :");

// Premier test unitaire
// console.log("Elle devrait renvoyer 4 quand on lui passe 2 et 2");
// assert.strictEqual(
//   laFonctionATester(2, 2),
//   4,
//   `TEST FAILED (expected: 4, received: ${laFonctionATester(2, 2)})`
// );
// console.log("TEST PASSED");

// console.log('Elle devrait renvoyer 4 quand on lui passe 2 et "2"');
// assert.strictEqual(
//   laFonctionATester(2, "2"),
//   4,
//   `TEST FAILED (expected: 4, received: ${laFonctionATester(2, "2")})`
// );

// console.log('Elle devrait renvoyer 4 quand on lui passe "2" et "2"');
// assert.strictEqual(
//   laFonctionATester("2", "2"),
//   4,
//   `TEST FAILED (expected: 4, received: ${laFonctionATester("2", "2")})`
// );

// console.log('Elle devrait renvoyer 4 quand on lui passe "2" et 2');
// assert.strictEqual(
//   laFonctionATester("2", 2),
//   4,
//   `TEST FAILED (expected: 4, received: ${laFonctionATester("2", 2)})`
// );
// console.log("TEST PASSED");

// console.log("Elle devrait renvoyer 2 quand on lui passe undefined et 2");
// assert.strictEqual(
//   laFonctionATester(undefined, 2),
//   2,
//   `TEST FAILED (expected: 2, received: ${laFonctionATester(undefined, 2)})`
// );
// console.log("TEST PASSED");

// console.log("Elle devrait renvoyer 2 quand on lui passe 2 et undefined");
// assert.strictEqual(
//   laFonctionATester(2, undefined),
//   2,
//   `TEST FAILED (expected: 2, received: ${laFonctionATester(2, undefined)})`
// );
// console.log("TEST PASSED");

/* TESTS UNITAIRES AVEC ASSERT ET MOCHA */
describe("Mon module app", () => {
  describe("La fonction somme...", () => {
    it("devrait renvoyer 4 quand on lui passe 2 et 2 :", () => {
      assert.strictEqual(
        laFonctionATester(2, 2),
        4,
        `TEST FAILED (expected: 4, received: ${laFonctionATester(2, 2)})`
      );
    });

    it('devrait renvoyer 4 quand on lui passe "2" et 2', () => {
      assert.strictEqual(
        laFonctionATester("2", 2),
        4,
        `TEST FAILED (expected: 4, received: ${laFonctionATester("2", 2)})`
      );
    });

    it('devrait renvoyer 4 quand on lui passe 2 et "2"', () => {
      assert.strictEqual(
        laFonctionATester(2, "2"),
        4,
        `TEST FAILED (expected: 4, received: ${laFonctionATester(2, "2")})`
      );
    });

    it("devrait renvoyer 2 quand on lui passe undefined et 2", () => {
      assert.strictEqual(
        laFonctionATester(undefined, 2),
        2,
        `TEST FAILED (expected: 2, received: ${laFonctionATester(
          undefined,
          2
        )})`
      );
    });

    it("devrait renvoyer 2 quand on lui passe 2 et undefined", () => {
      assert.strictEqual(
        laFonctionATester(2, undefined),
        2,
        `TEST FAILED (expected: 2, received: ${laFonctionATester(
          2,
          undefined
        )})`
      );
    });

    it("devrait renvoyer la bonne chaîne de caractère quand on lui passe undefined et undefined :", () => {
      assert.strictEqual(
        laFonctionATester(),
        "Merci de fournir des arguments à la fonction."
      );
    });
  });

  describe("La fonction multiplie...", () => {});
});
