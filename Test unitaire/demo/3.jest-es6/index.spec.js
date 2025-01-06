import { addTwo } from ".";

describe('Test de la fonction addTwo: ', () => {
    test('Elle devrait retourner 4 quand on lui donne 2 et 2', () => {
        expect(addTwo(2, 2)).toBe(4);
    });
    
    test('Elle devrait retourner une chaîne de caractère dans les autres cas', () => {
        expect(addTwo(2, "2")).toBe("Les deux arguments ne sont pas des nombres.");
    });
})