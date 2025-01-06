content.cibler = { title: 'Cibler',
values: [
  {
    description: `Viser une balise`,
    method: `$(balise)`,
    code: `$('h3');`
  },
  {
    description: `Viser une balise dans une autre`,
    method: `$(balise1 balise2)`,
    code: `$('div img');`
  },
  {
    description: `Viser une id `,
    method: `$(#id)`,
    code: `$('#monId');`
  },
{
    description: `Viser une class`,
    method: `$(.class)`,
    code: `$('.maClass')`
  },
  {
    description: `Viser une balise enfant directe`,
    method: `$(balise1 > balise2)`,
    code: `$('div > p'); 	`
  },
  {
    description: `Viser une balise voisine`,
    method: `$(balise1 + balise2)`,
    code: `$('p + img');`
  },
  {
    description: `Viser une balise suivant une autre`,
    method: `$(balise1 ~ balise2)`,
    code: `$('div ~ p');`
  },
  {
    h3:`Viser les enfants`
  },
  {
    description: `Premier enfant`,
    method: `:first-child`,
    code: `$('p:first-child');`
  },
  {
    description: `Premier enfant d'un type de balise`,
    method: `:first-of-type`,
    code: `$('p:first-of-type');`
  },
  {
    description: `Dernier enfant`,
    method: `:last-child`,
    code: `$('p:last-child');`
  },
  {
    description: `Dernier enfant d'un type de balise`,
    method: `:last-of-type`,
    code: `$('p:last-of-type');`
  },
  {
    description: `Premiers enfants de rang n`,
    method: `:nth-child(n)`,
    code: `$('p:nth-child(5)');`
  },
  {
    description: `Derniers enfants de rang n`,
    method: `:nth-last-child(n)`,
    code: `$('p:nth-last-child(7)');`
  },
  {
    description: `Premiers enfants d'un type de balise de rang n`,
    method: `:nth-of-type(n)`,
    code: `$('p:nth-of-type(2)');`
  },
  {
    description: `Derniers enfants d'un type de balise de rang n`,
    method: `:nth-last-of-type(n)`,
    code: `$('p:nth-last-of-type(6)');`
  },
  {
    description: `Enfant unique`,
    method: `:only-child`,
    code: `$('p:only-child)');`
  },
  {
    description: `Enfant unique d'un type de balise`,
    method: `only-of-type`,
    code: `$('p:only-of-type');`
  },
  {
    h3:`Viser une balise ayant un contenu spécifique`
  },
  {
    description: `Contient le texte mis entre parenthèse.`,
    method: `:contains(x)`,
    code: `$("div:contains('jeu')");`
  },
  {
    description: `Balise vide`,
    method: `:empty`,
    code: `$('p:empty');`
  },
  {
    description: `Balise ayant un parent`,
    method: `:parent`,
    code: `$('p:parent)');`
  },
  {
    description: `Balise contenant le sélecteur indiqué`,
    method: `:has(balise)`,
    code: `$('p:has(ul)');`
  },
  {
    h3:`Viser une balise selon un critère spécifique`
  },
  {
    description: `Cibler tous les éléments non indiqués`,
    method: `:not(element)`,
    code: `$("input:not(:checked)");`
  },
  {
    description: `Cibler les éléments impairs`,
    method: `:even`,
    code: `$('p:even');`
  },
  {
    description: `Cibler les éléments pairs`,
    method: `odd`,
    code: `$('p:odd');`
  },
  {
    description: `Cibler l'énième élément`,
    method: `:eq(n)`,
    code: `$('p:eq(2)');`
  },
  {
    description: `Cibler le premier élément`,
    method: `:first`,
    code: `$('p:first');`
  },
  {
    description: `Cibler le dernier élément`,
    method: `:last`,
    code: `$('p:last');`
  },
  {
    description: `Cibler tous les éléments inférieurs à n`,
    method: `:lt(n)`,
    code: `$('p:lt(6)');`
  },
  {
    description: `Cibler tous les éléments supérieurs à n`,
    method: `gt(n)`,
    code: `$('p:gt(3)');`
  },
  {
    description: `Cibler l'élément racine du document`,
    method: `:root`,
    code: `$(':root');`
  },
  {
    description: `Cibler l'élément actuellement ciblé`,
    method: `:focus`,
    code: `$('p:focus');`
  },
  {
    description: `Cibler tous les éléments d'une langue`,
    method: `lang(x)`,
    code: `$('p:lang(fr-fr)');`
  },
  {
    description: `Cibler tous les éléments qui sont en cours d'animation`,
    method: `:animated`,
    code: `$('p:animated');`
  },
  {
    description: `Cibler tous les titres (h1-h6)`,
    method: `:header`,
    code: `$(':header');`
  },
  {
    h3:`Viser une balise selon son attribut`
  },
  {
    description: `Cibler les éléments qui ont l'attribut indiqué.`,
    method: `[attribut]`,
    code: `$("div[id]");`
  },
  {
    description: `Cibler tous les éléments dont l'attribut contient exactement la valeur`,
    method: `[attribut='valeur]`,
    code: `$("div[class='autre']");`
  },
  {
    description: `Cibler tous les éléments dont l'attribut contient la valeur.`,
    method: `[attribut*='valeur']`,
    code: `$("div[class*='plus']");`
  },
  {
    description: `Cibler tous les éléments dont l'attribut contient la valeur délimitée par des espaces.`,
    method: `[attribut~='valeur']`,
    code: `$("div"[class~='grand']");`
  },
  {
    description: `Cibler tous les éléments dont l'attribut contient la valeur ou celle-ci est suivie d'un tiret`,
    method: `[attribut|='valeur']`,
    code: `$("a[hreflang|='fr']");`
  },
  {
    description: `Cibler les éléments qui débutent exactement par la valeur indiquée.`,
    method: `[attribut^='valeur']`,
    code: `$("div[attribut^='valeur']");`
  },
  {
    description: `Cibler tous les éléments dont l'attribut se termine par la valeur`,
    method: `[attribut$='valeur']`,
    code: `$("div[class$='grand']");`
  },
  {
    description: `Cibler les éléments qui ont toutes les attributs et valeurs indiqués.`,
    method: `[attributFiltre1][attributFiltre2][attributFiltreN]`,
    code: `$("a[id][title*=paysage]");`
  },
  {
    description: `Cibler les éléments qui n'ont pas l'attribut spécifié ou qui ont cet attribut sans la valeur spécifiée.`,
    method: `[attribut!='valeur']`,
    code: `$("div[class!='petit']");`
  }
]};

