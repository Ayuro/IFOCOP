content.autres = { title: 'Manipulations - autres',
values: [
  {
    h3:`class`
  },
  {
    description: `Ajouter une ou plusieurs class.`,
    method: `.addClass()`,
    code: `$('h3').addClass('premiereClass secondeClass');`
  },
  {
    description: `Vérifier la présence d'une class.`,
    method: `.hasClass()`,
    code: `$('div p').hasClass('premiereClass');`
  },
  {
    description: `Enlever une ou plusieurs class.`,
    method: `.removeClass`,
    code: `$('h3').removeClass('uneClass autreClass');`
  },
  {
    description: `Ajoute ou supprime plusieurs class`,
    method: `.toggleClass()`,
    code: `$('h3').toggleClass('vraimentClass superClass');`
  },
  {
    h3:`Propriétés de style`
  },
  {
    description: `Renvoie ou fixe la valeur d'une ou plusieurs propriétés css de tous les éléments visés.`,
    method: `.css()`,
    code: `$('#contenu img').css({
  "backgroundColor": "black",
  "color": "white"
  });`
  },
  {
    description: `Renvoie ou fixe la valeur de la hauteur de l'élément`,
    method: `.height()`,
      code: `$('#ajout').height(150);`
  },
  {
    description: `>Renvoie ou fixe la valeur de la hauteur de l'élément, padding compris.`,
    method: `innerHeight()`,
    code: `$('div p').innerHeight(65);`
  },
  {
    description: `Renvoie ou fixe la valeur de la hauteur de l'élément, padding et bordure compris.`,
    method: `.outerHeight() `,
    code: `$('#autre').outerHeight(120);`
  },
  {
    description: `Renvoie ou fixe la valeur de la largeur de l'élément.`,
    method: `.width()`,
    code: `$('header img').width(220);`
  },
  {
    description: `>Renvoie ou fixe la valeur de la largeur de l'élément, padding compris.`,
    method: `.innerWidth()`,
      code: `$('div p').innerWidth(65);`
  },
  {
    description: `Renvoie ou fixe la valeur de la largeur de l'élément, padding et bordure compris.`,
    method: `.outerWidth()`,
    code: `$('section img').outerWidth(210);`
  },
  {
    description: `Renvoie ou fixe la valeur de la position d'un élément par rapport au sommet et au côté gauche du document.`,
    method: `.offset()`,
    code: `$('mouvement').offset({ top: 10</span>, left: 30</span> });`
  },

  {
    description: `Renvoie la position du premier élément par rapport au sommet et au côté gauche de l'élément parent.`,
    method: `.position()`,
    code: `$('h2').position();`
  },

  {
    description: `Renvoie ou fixe la valeur de la position de l'ascenseur horizontal pour l'élément visé ou fixe cette position par rapport au côté gauche de cet élément.`,
    method: `.scrollLeft()`,
    code: `$('section img').scrollLeft(312);`
  },

  {
    description: `Renvoie ou fixe la valeur de la position de l'ascenseur vertical pour l'élément visé ou fixe cette position par rapport au sommet de cet élément.`,
    method: `scrollTop()`,
    code: `$('section img').scrollTop(320);`
  },
  {
    h3:`Attributs généraux`
  },
  {
    description: `Renvoie ou fixe la valeur d'un élément`,
    method: `.val()`,
    code: `$('input[name=age]').val();`
  },
  {
    description: `Renvoie ou fixe la valeur d'un attribut de tous les éléments visés`,
    method: `.attr()`,
    code: `$('article img').attr('title','Joli paysage');`
  },
  {
    description: `Enlève un attribut de tous les éléments visés`,
    method: `.removeAttr()`,
    code: `$('header img').removeAttr('alt');`
  },
  {
    description: `Renvoie ou fixe la valeur d'une propriété de tous les éléments visés`,
    method: `.prop()`,
    code: `$('input').prop('checked',true);`
  },
  {
    description: `Enlève une propriété de tous les éléments visés`,
    method: `.removeProp()`,
    code: `$('input').removeProp('disabled');`
  }
]};
