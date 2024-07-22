"use strict";
import MyGrid from "./algoFindWay/myGrid..js";
import MyCanvas from "./myCanvas.js";
import MyClickManager from "./myInteractions.js";
import MySquare from "./mySquare.js";

/** GENERATION, DISPLAY ET ATTENTE DU CLIC **/

export default class Map {
    constructor () {
        this.listSquare = [];
        this.canvas = new MyCanvas();
    };

    async loadMap(file) {
        let result = await fetch('./src/data/' + file + '.json');
        let data = await result.json();
        Object.assign(this, data);
        this.canvas.setArea(this.size);
        this.clickManager = new MyClickManager(this.size);
        /**for (let i=0;i<this.listSquare.length;i++) {
            this.listSquare[i] = new MySquare(this.listSquare[i].x, this.listSquare[i].y, this.listSquare[i].tile);
        }**/
        for (let x=0;x<this.size.width;x++) {
            for (let y=0;y<this.size.height;y++) {
                this.listSquare.push(new MySquare(x, y))
            }
        }
        this.grid = new MyGrid(this.listSquare, this.size);
    };

    display() {
        for (let square of this.listSquare) {
            square.display(this.canvas)
        };
    };

    onclick(callback) {
        this.click = callback;
    }

    onrightclick(callback) {
        this.rightclick = callback;
    }

    getSquare(position) {
        return this.listSquare.find(square => square.position.x == position.x && square.position.y == position.y);
    }
};