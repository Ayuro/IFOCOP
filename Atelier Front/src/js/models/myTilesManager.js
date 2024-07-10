"use strict";

export default class MyTilesManager {
    constructor() {
        this.listFile = {};
    }

    async loadFile(file, elementX, elementY) {
        let result = await fetch('./src/tiles/' + file + '.png'); 
        this.listFile[file] = {
            full: await createImageBitmap(await result.blob()), 
            listItem: []
        };
        let stepX = this.listFile[file].full.width / elementX;
        let stepY = this.listFile[file].full.height / elementY;
        for(let x=0;x<elementX;x++){
            for(let y=0;y<elementY;y++) {
                this.listFile[file].listItem.push(await createImageBitmap(this.listFile[file].full, stepX * x, stepY * y, stepX, stepY));
            }
        }
    }
}