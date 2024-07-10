"use strict";

export default class mySquare {
    constructor(x, y, tile) {
        this.x = x;
        this.y = y;
        this.tile = tile;

        switch(Math.floor(Math.random() * 10)) {
            case 0:
            case 1:
            case 2:
            case 3:
                this.tile = "GRASS";
                break;
            case 4:
            case 5:
            case 6:        
                this.tile = "GROUND";
                break;
            case 7:
            case 8:
                this.tile = "TREE";        
                break;
            case 9:
                this.tile = "BUSH";
                break;
            case 10:
                this.tile = "WATER";
                break;
        }
    }
}