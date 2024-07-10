"use strict";
import myCanvas from './myCanvas.js';
import MyCharacter from './myCharacter.js';
import myMap from './myMaps.js';
import MyTilesManager from './myTilesManager.js';

export default class myGame {
    constructor() {
        this.canvas = new myCanvas(document.querySelector("#game-area"));
    }

    async init() {
        this.tileManager = new MyTilesManager();
        await this.tileManager.loadFile("maps", "tiles", 6, 1);
        await this.tileManager.loadFile("characters", "stage1Hero", 4, 9);
        // await this.tileManager.loadFile("characters", "stage2Hero", 4, 9);
        // await this.tileManager.loadFile("characters", "stage3Hero", 4, 9);
        // await this.tileManager.loadFile("characters", "stage4Hero", 4, 9);
        this.map = new myMap();
        await this.map.loadMap('randomizeMap');
        this.canvas.setArea(this.map.size);
        this.map.display();

        this.character = new MyCharacter("Ayuro", "stage3", 10, 10, "BOTTOM");
        this.character.display();
    }

    display(element) {
        switch (element.constructor.name) {
            case "mySquare":
                this.canvas.display(element);
            }
    }
};