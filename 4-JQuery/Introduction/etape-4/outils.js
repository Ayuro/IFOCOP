"use strict";
function monOutil(elements) {
    function init(elements) {
        this.balises = document.querySelectorAll(elements);
    };
    const outil = new init(elements);
    outil.actions = outil.__proto__;
    outil.actions.balayage = function(uneAction) {
        for(let i=0;i<this.balises.length; i++) {
            uneAction(this.balises[i]);
        };
    };
    outil.actions.masquer = function() {
        this.balayage(function(unElementCible) {
            unElementCible.style.display = 'none';
        });
    };
    outil.actions.texte = function(leTexte) {
        this.balayage(function(unElementCible) {
            unElementCible.innerText = leTexte
        });
    };
    return outil;
};

var info = 'coucou';

console.log (`%c 🔥 `,'color: Darkred;font-size:2rem;font-style:italic;text-decoration:underline;background:black;',info);
