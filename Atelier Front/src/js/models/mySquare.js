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
                this.tile = {namespace: "MAP", key: "GRASS"};
                break;
            case 4:
            case 5:
            case 6:        
                this.tile = {namespace: "MAP", key: "GROUND"};
                break;
            case 7:
            case 8:
                this.tile = {namespace: "MAP", key: "TREE"};        
                break;
            case 9:
                this.tile = {namespace: "MAP", key: "BUSH"};
                break;
            case 10:
                this.tile = {namespace: "MAP", key: "WATER"};
                break;
        };
    };

    display() {
        if(this.tile.key == "BUSH") {
            game.canvas.draw("tiles", {namespace: "MAP", key: "GRASS"}, {x: this.x, y: this.y});
        }
        if(this.tile.key == "TREE") {
            game.canvas.draw("tiles", {namespace: "MAP", key: "UPTREE"}, {x: this.x, y: this.y - 1});
        }
        game.canvas.draw("tiles", this.tile, {x: this.x, y: this.y});
    };
}