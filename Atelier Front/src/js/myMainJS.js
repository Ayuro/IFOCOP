"use strict";
import MyGame from './models/myGame.js';

/**  CHARGEMENT DE LA ZONE DE JEU **/

window.game = new MyGame();
game.init();

/** APPARITION DE LA ZONE DE JEU  Le but étant que les Canvas soient cachés au chargement de la page et que le clic sur le bouton "Let's play" 
 * le fasse appraitre. Mais celui-ci est désactivé pour le moment. Le CSS ainsi que html faisant fonctionner ce morceau sont actuellement commentés**/

/** function ftStartGame() {
    let gameArea = document.body.children[0].children[1].children[0].style;
    document.body.children[0].children[2].children[0].addEventListener('click', function() {
        gameArea.height = 75 + '%';
        gameArea.width = 75 + '%';
        gameArea.visibility = 'visible';
        gameArea.opacity = 1;
    });
};

window.addEventListener('load', ftStartGame); **/