"use strict";

const move = function (direction) {
    let increment = 1;
    switch(direction) {
        case 'left':
            increment = -1;
            break;
    }
}
const htmlDivElement = window.document.querySelector('#avatar')

let movinLeft = false;
let movinRight = false;
window.addEventListener("DOMContentLoaded", function (){
    window.addEventListener('keydown', function (keyboardEvent) {
        switch (keyboardEvent.key) {
            case "ArrowLeft":
                if (!movinLeft) {
                    movinLeft = true
                    this.window.setInterval(function (){
                        this.move('left');
                    }, 50);
                };
                break;
            case "ArrowRight":
                if (!movinRight) {
                    movinRight = true
                    this.window.setInterval(function (){
                        this.move('right');
                    }, 50);
                };
                break;
        };
    });
});