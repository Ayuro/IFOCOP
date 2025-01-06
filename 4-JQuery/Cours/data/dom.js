content.dom = { title: 'Manipulation du DOM',
values: [
  {
        h3:`DOM - insertion - autre`
  },
  {
    description: `Crée une copie de l'élément`,
    method: `.clone()`,
    code: `$('.element').clone().appendTo('.ajout');`
  },
  {
    h3:`DOM - insertion - autour</h3>`
  },
  {
    description: `Entoure l'élément par un autre élément.`,
    method: `.wrap()`,
    code: `$('a.autre').wrap('&lt;p class="grand"&gt;&lt;/p&gt');`
  },
  {
    description: `Entoure le contenu d'un élément à l'intérieur de ses balises par un autre élément.`,
    method: `wrapInner()`,
    code: `$('li').wrapInner('&lt;a href="lien.htlm"&gt;&lt;/a&gt');`
  },
    {
    description: `Entoure d'une façon globale les éléments sélectionnés par un autre élément.`,
    method: `.wrapAll()`,
    code: `$('.texte').wrapAll('&lt;div id="contenu"&gt;&lt;/div&gt');`
  },
    {
    description: `Supprime l'élément parent.`,
    method: `.unwrap()`,
    code: `$('a.autre').unwrap();`
  },
  {
    h3:`DOM - insertion - à l'intérieur`
  },
    {
    description: `Renvoie ou fixe le contenu en html de tous les éléments visés.`,
    method: `.html()`,
    code: `$('#contenu').html('Un &lt;strong&gt;nouveau&lt/strong&gt; message')`
  },
    {
    description: `Renvoie ou fixe le contenu textuel de tous les éléments visés.`,
    method: `.text()`,
    code: `$('#contenu').text('&lt;span&gt;Un autre message&lt;/span&gt;);`
  },
    {
    description: `Insère du contenu au début de la sélection`,
    method: `.preprend()`,
    code: `$('#autre').preprend('&lt;p&gt;Nouvelle information&lt;/p&gt;');`
  },
    {
    description: `Insère du contenu au début de la sélection`,
    method: `.preprendTo()`,
    code: `$('&lt;p&gt;Nouvelle information&lt;/p&gt;').preprendTo('#autre');`
  },
    {
    description: `Insère du contenu à la fin de la sélection`,
    method: `.append`,
    code: `$('#message').append(' la suite');`
  },
    {
    description: `Insère du contenu à la fin de la sélection`,
    method: `.appendTo`,
    code: `$(' la suite').appendTo('#message');`
  },
  {
    h3:`DOM - insertion - En dehors`
  },
  {
    description: `Insère du contenu après la sélection`,
    method: `.before()`,
    code: `$('.information').before('&lt;span&gt;Un autre texte&lt/span&gt;');`
  },
  {
    description: `Insère du contenu avant la sélection `,
    method: `.insertBefore()`,
    code: `$('&lt;span&gt;Un autre texte&lt/span&gt;').insertBefore('.information');`
  },
  {
    description: `Insère du contenu après la sélection`,
    method: `.after()`,
    code: `$('.information').after('&lt;span&gt;Un autre texte&lt/span&gt;');`
  },
  {
    description: `Insère du contenu après la sélection`,
    method: `.insertAfter()`,
    code: `$('&lt;span&gt;Un autre texte&lt/span&gt;').insertAfter('.information');`
  },
  {
    h3:`DOM - Supression</h3>`
  },
  {
    description: `Retire l'ensemble des éléments visés du DOM.`,
    method: `.remove()`,
    code: `$('footer p').remove();`
  },
  {
    description: `Retire le contenue des éléments visés du DOM.`,
    method: `.empty()`,
    code: `$('#info').empty();`
  },
  {
    description: `Retire l'ensemble des éléments visés du DOM sans enlever les données et les évènements.`,
    method: `.detach()`,
    code: `$('.suppression').detach();`
  },
  {
    h3:`DOM Remplacement</h3>`
  },
  {
    description: `Remplacer tous les éléments visés par un nouveau contenu.`,
    method: `.replaceWith()`,
    code: `$('div.seconde').replaceWith('&lt;h2&gt;Nouveau titre&lt;/h2&gt;');`
  },
  {
    description: `Remplacer tous les éléments visés par un nouveau contenu.`,
    method: `.replaceAll()`,
    code: `$('&lt;h2&gt;Nouveau titre&lt;/h2&gt;').replaceAll('.autre');`
  }
]};
