"use strict";

import MyCanvas from "./myCanvas.js";

/** GENERATION ET GESTION DES PERSO, DISPLAY ET GESTION DES MOUVEMENTS **/

export default class MyCharacter {
    constructor(name, type, x, y, direction) {
        this.canvas = new MyCanvas();
        this.canvas.setArea(game.map.size);
        this.name = name;
        this.type = type;
        this.position = {x:x, y:y};
        this.direction = direction;

        switch(this.type) {
            case "char1":
                this.life = 10;
                this.file = "char1";
                break;
            case "char2":
                this.life = 10;
                this.file = "char2";
                break;
            case "char3":
                this.life = 10;
                this.file = "char3";
                break;
            case "stage1":
                this.life = 50;
                this.file = "stage1Hero";
                break;
            case "stage2":
                this.life = 50;
                this.file = "stage2Hero";
                break;
            case "stage3":
                this.life = 50;
                this.file = "stage3Hero";
                break;
            case "stage4":
                this.life = 50;
                this.file = "stage4Hero";
                break;
            case "princessA":
                this.life = 50;
                this.file = "princessAngular";
                break;
            case "oldH":
                this.life = 50;
                this.file = "oldHTML";
                break;
            case "iconHTML":
                this.life = 1;
                this.file = "iconHtml";
                break;
        };

        this.tile = {
            namespace: "CHAR",
            key: direction + "0",
            direction: direction,
            value: 0
        };
    };
    
    display() {
        this.canvas.draw(this.file, this.tile, {x: this.position.x, y: this.position.y});
    };

    nextTile() {
        if(this.tile.value >= 3) {
            this.tile.value = 0;
        } else {
            this.tile.value += 1;
        }
        this.tile.key = this.tile.direction + this.tile.value;
    }

    
    async goTo(path) {
        for(let square of path) {
            if(square.position.x == this.position.x && square.position.y == this.position.y) {
                continue;
            }
            this.tile.direction = this.getDirection(square.position);
            for(let frame=0;frame<24; frame++) {
                /**frame = frame / square.weight;
                if(frame >= 24) {
                    frame = 23;
                }**/
                this.canvas.clear();
                this.tile.value = Math.floor(frame / 6);
                this.tile.key = this.tile.direction + this.tile.value;
                this.canvas.drawPixel(this.file, this.tile, this.getMovementPixel({nb: frame, total: 24}));
                await new Promise(resolve => setTimeout(resolve, 42));
            }
            this.position = square.position;
        }
        this.canvas.clear();
        this.tile.value = 0
        this.tile.key = this.tile.direction + this.tile.value;
        this.canvas.draw(this.file, this.tile, this.position);
    }

    getDirection(position) {
        switch(true) {
            case position.x > this.position.x:
                return "RIGHT";
            case position.x < this.position.x:
                return "LEFT";
            case position.y > this.position.y:
                return "BOTTOM";
            case position.y < this.position.y:
                return "TOP";
        }
    }

    getMovementPixel(frame) {
        switch(this.tile.direction) {
            case "RIGHT":
                return {
                    x: (this.position.x * this.canvas.stepX) + (this.canvas.stepX * frame.nb / frame.total),
                    y: this.position.y * this.canvas.stepY
                };
            case "LEFT":
                return {
                    x: (this.position.x * this.canvas.stepX) - (this.canvas.stepX * frame.nb / frame.total),
                    y: this.position.y * this.canvas.stepY
                };
            case "BOTTOM":
                return {
                    y: (this.position.y * this.canvas.stepY) + (this.canvas.stepY * frame.nb / frame.total),
                    x: this.position.x * this.canvas.stepX
                };
            case "TOP":
                return {
                    y: (this.position.y * this.canvas.stepY) - (this.canvas.stepY * frame.nb / frame.total),
                    x: this.position.x * this.canvas.stepX
                };
        }
    }
}