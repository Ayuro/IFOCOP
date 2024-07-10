"use strict";

import mySquare from "./mySquare.js";

export default class Map {
    constructor () {
        this.listSquare = [];
    };

    async loadMap(file) {
        let result = await fetch('./src/data/' + file + '.json');
        let data = await result.json();
        Object.assign(this, data);

        // for (let i=0;i<this.listSquare.length;i++) {
        //     this.listSquare[i] = new mySquare(this.listSquare[i].x, this.listSquare[i].y, this.listSquare[i].tile);
        // }
        for (let x=0;x<this.size.width;x++) {
            for (let y=0;y<this.size.height;y++) {
                this.listSquare.push(new mySquare(x, y))
            }
        }
    };

    display() {
        for (let mySquare of this.listSquare) {
            mySquare.display();
        };
    };
};