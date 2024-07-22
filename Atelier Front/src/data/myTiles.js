"use strict";

/** CODIFICATION DES TUILES (TILES) ET RENVOI DE LA BONNE AFIN DE CREER LA MAP ET RENVOYER LE MOUVEMENT DU PERSO **/

export default class Tiles {
    static get(file, tile) {
        return game.tileManager.listFile[file].listItem[this[tile.namespace][tile.key]];
    }
}

Tiles.MAP = {};
Tiles.MAP.GRASS = 0;
Tiles.MAP.GROUND = 1;
Tiles.MAP.TREE = 2;
Tiles.MAP.UPTREE = 3;
Tiles.MAP.BUSH = 4;

// Tiles.CHAR = {};
// Tiles.CHAR.TOP0 = 0;
// Tiles.CHAR.TOP1 = 1;
// Tiles.CHAR.TOP2 = 2;
// Tiles.CHAR.TOP3 = 3;
// Tiles.CHAR.TOP4 = 4;
// Tiles.CHAR.TOP5 = 5;
// Tiles.CHAR.TOP6 = 6;
// Tiles.CHAR.TOP7 = 7;
// Tiles.CHAR.TOP8 = 8;
// Tiles.CHAR.LEFT0 = 9;
// Tiles.CHAR.LEFT1 = 10;
// Tiles.CHAR.LEFT2 = 11;
// Tiles.CHAR.LEFT3 = 12;
// Tiles.CHAR.LEFT4 = 13;
// Tiles.CHAR.LEFT5 = 14;
// Tiles.CHAR.LEFT6 = 15;
// Tiles.CHAR.LEFT7 = 16;
// Tiles.CHAR.LEFT8 = 17;
// Tiles.CHAR.BOTTOM0 = 18;
// Tiles.CHAR.BOTTOM1 = 19;
// Tiles.CHAR.BOTTOM2 = 20;
// Tiles.CHAR.BOTTOM3 = 21;
// Tiles.CHAR.BOTTOM4 = 22;
// Tiles.CHAR.BOTTOM5 = 23;
// Tiles.CHAR.BOTTOM6 = 24;
// Tiles.CHAR.BOTTOM7 = 25;
// Tiles.CHAR.BOTTOM8 = 26;
// Tiles.CHAR.RIGHT0 = 27;
// Tiles.CHAR.RIGHT1 = 28;
// Tiles.CHAR.RIGHT2 = 29;
// Tiles.CHAR.RIGHT3 = 30;
// Tiles.CHAR.RIGHT4 = 31;
// Tiles.CHAR.RIGHT5 = 32;
// Tiles.CHAR.RIGHT6 = 33;
// Tiles.CHAR.RIGHT7 = 34;
// Tiles.CHAR.RIGHT8 = 35;

Tiles.CHAR = {};
Tiles.CHAR.BOTTOM0 = 0;
Tiles.CHAR.BOTTOM1 = 1;
Tiles.CHAR.BOTTOM2 = 2;
Tiles.CHAR.BOTTOM3 = 3;
Tiles.CHAR.LEFT0 = 4;
Tiles.CHAR.LEFT1 = 5;
Tiles.CHAR.LEFT2 = 6;
Tiles.CHAR.LEFT3 = 7;
Tiles.CHAR.RIGHT0 = 8;
Tiles.CHAR.RIGHT1 = 9;
Tiles.CHAR.RIGHT2 = 10;
Tiles.CHAR.RIGHT3 = 11;
Tiles.CHAR.TOP0 = 12;
Tiles.CHAR.TOP1 = 13;
Tiles.CHAR.TOP2 = 14;
Tiles.CHAR.TOP3 = 15;