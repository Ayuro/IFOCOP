"use strict";
import myGame from './models/myGame.js';

// CHARGEMENT DE LA ZONE DE JEU

window.game = new myGame();
game.init();

// APPARITION DE LA ZONE DE JEU Dev en cours

// function ftStartGame() {
//     let gameArea = document.body.children[0].children[1].children[0].style;
//     document.body.children[0].children[2].children[0].addEventListener('click', function() {
//         gameArea.height = 75 + '%';
//         gameArea.width = 75 + '%';
//         gameArea.visibility = 'visible';
//         gameArea.opacity = 1;
//     });
// };

// window.addEventListener('load', ftStartGame);