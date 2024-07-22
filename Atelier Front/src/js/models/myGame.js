"use strict";
import MyCanvas from './myCanvas.js';
import MyCharacter from './myCharacter.js';
import myMap from './myMaps.js';
import MyTilesManager from './myTilesManager.js';

/** HUB DE GENERATION ET DE GESTION DE LA MAP ET DES PERSOS (generation map, perso, display et appel de la gestion des mouvements des persos) **/

export default class MyGame {
    constructor() {
        this.canvas = new MyCanvas(document.querySelector("#game-area"));
    }

    async init() {
        this.tileManager = new MyTilesManager();
        await this.tileManager.loadFile("maps", "tiles", 6, 1);
        await this.tileManager.loadFile("characters", "char1", 4, 4);
        await this.tileManager.loadFile("characters", "char2", 4, 4);
        await this.tileManager.loadFile("characters", "char3", 4, 4);
        await this.tileManager.loadFile("icons", "iconHtml", 1, 1);
        this.map = new myMap();
        await this.map.loadMap('randomizeMap');
        this.map.display();
        
        this.character = Array();
        
        let stage1 = new MyCharacter("Angular", "char1", (Math.floor(Math.random()*10)), (Math.floor(Math.random()*10)), "BOTTOM");
        stage1.display();
        this.character.push(stage1);

        let iconHTML = new MyCharacter("HTML", "char3", (Math.floor(Math.random()*10)), (Math.floor(Math.random()*10)), "BOTTOM");
        console.log(iconHTML);
        iconHTML.display();
        this.character.push(iconHTML);

        this.map.onclick((position) => {
        let path = this.map.grid.getPath(this.map.getSquare(stage1.position), this.map.getSquare(position));
        stage1.goTo(path);
        });
        }
        
    display(element) {
        switch (element.constructor.name) {
            case "MySquare":
                this.canvas.display(element);
            }
    }
};