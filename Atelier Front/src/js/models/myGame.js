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
        // await this.tileManager.loadFile("characters", "stage1hero", 13, 46);
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

        
        // let path = this.map.grid.getPath(game.map.listSquare[0], game.map.listSquare[25]);
        // for (let square of path) {
            //     square.displayPath(this.map.canvas);
            //     await new Promise(resolve => setTimeout(resolve, 100));
            // };
            
        this.map.onclick((position) => {
        let path = this.map.grid.getPath(this.map.getSquare(stage1.position), this.map.getSquare(position));
        stage1.goTo(path);
        });
        }
        
    display(element) {
        switch (element.constructor.name) {
            case "mySquare":
                this.canvas.display(element);
            }
    }
};