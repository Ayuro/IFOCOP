"use strict";

/** ASSIGNATION ALEATOIRE DES TUILES DE LA MAP POUR CHAQUE COORDONEES ET DISPLAY **/

export default class MySquare {
    constructor(x, y, tile) {
        this.position = {x: x, y: y};
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
        };
    };

    display(canvas) {
        if(this.tile.key == "BUSH") {
            canvas.draw("tiles", {namespace: "MAP", key: "GRASS"}, {x: this.position.x, y: this.position.y});
        }
        if(this.tile.key == "TREE") {
            canvas.draw("tiles", {namespace: "MAP", key: "UPTREE"}, {x: this.position.x, y: this.position.y - 1});
        }
        canvas.draw("tiles", this.tile, {x: this.position.x, y: this.position.y});
    };
}