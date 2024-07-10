"use strict";
import myGame from './models/myGame.js';

window.game = new myGame();
game.init();

// function ftStartGame() {
//     let gameArea = document.body.children[0].children[1].style;
//     document.body.children[0].children[2].children[0].addEventListener('click', function() {
//         gameArea.height = 75 + '%';
//         gameArea.width = 75 + '%';
//         gameArea.visibility = 'visible';
//         gameArea.opacity = 1;
//     });
// };

// window.addEventListener('load', ftStartGame);