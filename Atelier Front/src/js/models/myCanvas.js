"use strict";

import Tiles from '../../data/myTiles.js';

export default class myCanvas {
    constructor(element) {
        this.element = element;
        this.context = this.element.getContext("2d");
        this.width = this.element.offsetWidth;
        this.height = this.element.offsetHeight;
        this.element.width = this.width;
        this.element.height = this.height;
    }
    
    setArea(size) {
        this.stepX = this.width / size.width;
        this.stepY = this.height / size.height;
    }

    async display(element) {
        switch(element.constructor.name) {
            case "mySquare":
                this.displaySquare(element);
        }
    }

    displaySquare(square) {
        if(square.tile == "BUSH") {
            this.draw(Tiles.get("tiles", "GRASS"), {x: square.x, y: square.y});
        }
        if(square.tile == "TREE") {
            this.draw(Tiles.get("tiles", "UPTREE"), {x: square.x, y: square.y - 1});
        }
        this.draw(Tiles.get("tiles", square.tile), {x: square.x, y: square.y});
    }
    
    draw(image, position) {
        this.context.drawImage(
            image,
            0,
            0,
            image.width,
            image.height,
            position.x * this.stepX,
            position.y * this.stepY,
            this.stepX,
            this.stepY,
        )
    }
}