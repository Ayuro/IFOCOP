content.effets = {
  title: "Effets",
  values: [
    {
      h3: `Effets - simples`,
    },
    {
      description: `masque l'élément visé`,
      method: `.hide()`,
      code: `$('#message').hide();`,
    },
    {
      description: `affiche l'élément visé`,
      method: `.show()`,
      code: `$('.commentaire').show();`,
    },
    {
      description: `masque ou affiche l'élément visé.`,
      method: `.toggle()`,
      code: `$('img.grande').toggle();`,
    },
    {
      h3: `Effets - avancés`,
    },
    {
      description: `Animation d'un élément en modifiant les propriétés css indiquées (uniquement valeurs numériques)`,
      method: `.animate()`,
      code: `$('p').animate({opacity:0.5,fontSize:'2em'},800);`,
    },
    {
      description: `Pause dans le déroulement des méthodes`,
      method: `.delay()`,
      code: `$('#truc').delay(2000).hide();`,
    },
    {
      description: `Arrête l'animation en court, retire toutes les animations en file d'attente et complète toutes les animations pour les éléments visés.`,
      method: `.finish()`,
      code: `$('#element').finish();`,
    },
    {
      description: `Arrête l'animation sur les éléments visés.`,
      method: `.stop()`,
      code: `$('.objets').stop();`,
    },
    {
      h3: `Effets - apparition / disparition`,
    },
    {
      description: `Affiche l'élément progressivement avec un effet de fondu.`,
      method: `.fadeIn()`,
      code: `$('.objets').fadeIn('slow');`,
    },
    {
      description: `Masque l'élément progressivement avec un effet de fondu.`,
      method: `.fadeOut()`,
      code: `$('#element').fadeOut('fast');`,
    },
    {
      description: `Modifie l'opacité de l'élément.`,
      method: `.fadeTo()`,
      code: `$('article img').fadeTo('slow',0.6);`,
    },
    {
      description: `Affiche ou masque l'élément progressivement.`,
      method: `.fadeToggle()`,
      code: `$('.objets').fadeToggle(1200);`,
    },
    {
      h3: `Effets - glissé`,
    },
    {
      description: `Affiche l'élément avec un effet de déroulement.`,
      method: `.slideDown()`,
      code: `$('section p.masque').slideDown(fast);`,
    },
    {
      description: `Masque l'élément avec un effet d'enroulement.`,
      method: `.slideUp()`,
      code: `$('#annonce').slideUp(1000);`,
    },
    {
      description: `Affiche avec un effet de déroulement ou masque l'élément avec un effet d'enroulement`,
      method: `.slideToggle()`,
      code: `$('img.changement').slideToggle(1200);`,
    },
  ],
};
