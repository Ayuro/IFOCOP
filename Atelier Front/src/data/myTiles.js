"use strict";

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
Tiles.MAP.WATER = 5;

Tiles.CHAR = {};
Tiles.CHAR.BOTTOM0 = 0;
Tiles.CHAR.BOTTOM1 = 1;
Tiles.CHAR.BOTTOM2 = 2;
Tiles.CHAR.BOTTOM3 = 3;
Tiles.CHAR.BOTTOM4 = 4;
Tiles.CHAR.BOTTOM5 = 5;
Tiles.CHAR.BOTTOM6 = 6;
Tiles.CHAR.BOTTOM7 = 7;
Tiles.CHAR.BOTTOM8 = 8;
Tiles.CHAR.TOP0 = 9;
Tiles.CHAR.TOP1 = 10;
Tiles.CHAR.TOP2 = 11;
Tiles.CHAR.TOP3 = 12;
Tiles.CHAR.TOP4 = 13;
Tiles.CHAR.TOP5 = 14;
Tiles.CHAR.TOP6 = 15;
Tiles.CHAR.TOP7 = 16;
Tiles.CHAR.TOP8 = 17;
Tiles.CHAR.LEFT0 = 18;
Tiles.CHAR.LEFT1 = 19;
Tiles.CHAR.LEFT2 = 20;
Tiles.CHAR.LEFT3 = 21;
Tiles.CHAR.LEFT4 = 22;
Tiles.CHAR.LEFT5 = 23;
Tiles.CHAR.LEFT6 = 24;
Tiles.CHAR.LEFT7 = 25;
Tiles.CHAR.LEFT8 = 26;
Tiles.CHAR.RIGHT0 = 27;
Tiles.CHAR.RIGHT1 = 28;
Tiles.CHAR.RIGHT2 = 29;
Tiles.CHAR.RIGHT3 = 30;
Tiles.CHAR.RIGHT4 = 31;
Tiles.CHAR.RIGHT5 = 32;
Tiles.CHAR.RIGHT6 = 33;
Tiles.CHAR.RIGHT7 = 34;
Tiles.CHAR.RIGHT8 = 35;