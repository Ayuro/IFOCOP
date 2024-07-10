"use strict";

import myCanvas from "./myCanvas.js";

export default class MyCharacter {
    constructor(name, type, x, y, direction) {
        this.canvas = new myCanvas();
        this.canvas.setArea(game.map.size);
        this.name = name;
        this.type = type;
        this.x = x;
        this.y = y;
        this.direction = direction;

        switch(this.type) {
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
        };

        this.tile = {
            namespace: "CHAR",
            key: direction + "0",
            direction: direction,
            value: 0
        };

    };
    
    display() {
        this.canvas.draw(this.file, this.tile, {x: this.x, y: this.y});
    };
}