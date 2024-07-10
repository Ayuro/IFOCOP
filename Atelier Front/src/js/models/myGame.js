"use strict";
import myCanvas from './myCanvas.js';
import myMap from './myMaps.js';
import MyTilesManager from './myTilesManager.js';

export default class myGame {
    constructor() {
        this.canvas = new myCanvas(document.querySelector("#game-area"));
    }

    async init() {
        this.tileManager = new MyTilesManager();
        await this.tileManager.loadFile("tiles", 6, 1);
        this.map = new myMap();
        await this.map.loadMap('map1');
        this.canvas.setArea(this.map.size);
        this.map.display();
    }

    display(element) {
        switch (element.constructor.name) {
            case "mySquare":
                this.canvas.display(element);
            }
    }
};