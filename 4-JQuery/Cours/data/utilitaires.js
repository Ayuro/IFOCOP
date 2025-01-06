content.utilitaires = { title: 'Utilitaires',
values: [
    {
      description: `Méthode pour parcourir un objet.`,
      method: `jQuery.each()`,
      code: `$('p').each(function(){$(this).html() = texte + ' un ajout';});`
    },
    {
      h3:`Gestion des méthodes en attente`
    },
    {
      description: `Voir ou manipuler la file des méthodes en attente sur les éléments visés.`,
      method: `.queue()`,
      code: `$('#information').text(div.queue().length);`
    },
    {
      description: `Exécuter la méthode suivante en attente sur les éléments visés.`,
      method: `dequeue()<span>`,
      code: `$('#information').dequeue();`
    },
    {
      description: `Supprime de la file d'attente pour les éléments visés toutes les méthodes qui n'ont pas encore été exécutées.`,
      method: `clearQueue()`,
      code: `$('#information').clearQueue();`
    },
    {
      h3:`Gestion des données`
},
    {
      description: `Stocke une donnée arbitraire sur l'élément précisé visés ou récupère cette même valeur.`,
      method: `jQuery.data()`,
      code: `jQuery.data(p,'essais','bonjour');`
    },
    {
      description: `Vérifie si un élément a une donnée`,
      method: `jQuery.hasData()`,
      code: `jQuery.hasData(img);`
    },
    {
      description: `Supprime une donnée qui a été stockée.`,
      method: `jQuery.removeData()`,
      code: `jQuery.removeData(p,'essais');`
    },
    {
      h3:`Vérification `
},
    {
      description: `Vérifie si un élément du DOM est un enfant d'un autre élément du DOM`,
      method: `jQuery.contains()`,
      code: `jQuery.contains(document.body,document.getElementById('content'));`
    },
    {
      description: `Recherche une valeur particulière dans un tableau et renvoie son index`,
      method: `jQuery.inArray()`,
      code: `jQuery.inArray('voiture',['avion','sous-marin','voiture','bateau']);`
    },
    {
      description: `Vérifie si un élément est un tableau`,
      method: `jQuery.isArray()`,
      code: `jQuery.([415</span>,48</span>,25</span>]);`
    },
    {
      description: `Vérifie si un élément est une fonction`,
      method: `jQuery.isFunction()`,
      code: `var</span> truc = function(){
          alert('Bonjour');
        };
        jQuery.isFunction(truc);`
    },
    {
      description: `Vérifie si un élément est un nombre`,
      method: `jQuery.isNumeric()`,
      code: `jQuery.isNumeric(458</span>);`
    },
    {
      description: `Vérifie si un élément est un objet`,
      method: `jQuery.isPlainObject()`,
      code: `jQuery.isPlainObject(document.body);`
    },
    {
      description: `Vérifie si un élément est un objet vide`,
      method: `jQuery.isEmptyObject()`,
      code: `var</span> vide = {};jQuery.isEmptyObject(vide);`
    },
    {
      description: `Vérifie si un élément du DOM est dans un document XML ou est un document XML.`,
      method: `jQuery.isXMLDoc()`,
      code: `jQuery.isXMLDoc(body);`
    },
    {
      description: `Vérifie si un élément est une fenêtre`,
      method: `jQuery.isWindow()`,
      code: `jQuery.isWindow(window);`
    },
    {
      description: `Détermine le type de l'élément passé`,
      method: `jQuery.type()`,
      code: `jQuery.type('du texte');`
    },
    {
      h3:`Manipulation`
    },
    {
      description: `Supprime les espace au début et à la fin d'une chaine`,
      method: `jQuery.trim()`,
      code: `jQuery.trim(' un texte entouré d\'espaces ');`
    },
    {
      description: `Retourne un tableau à partir d'une chaine contenant du HTML`,
      method: `jQuery.parseHTML()`,
      code: `jQuery.parseHTML('voici &lt;cite&gt;du code&lt;/cite&gt; html');`
    },
    {
      description: `Réunis le contenu de deux tableaux dans le premier tableau<`,
      method: `jQuery.merge()`,
      code: `jQuery.merge(['truc','chose',15],[78,'bidule']);`
    },
    {
      description: `Filtre un tableau grâce à la fonction qui lui est passé. Le tableau d'origine n'est pas touché`,
      method: `jQuery.grep()`,
      code: `var</span>lis = $('#test li').get();
      var grep = $.grep(lis, function(index, value){
      return (lis[value].firstChild.nodeValue % 2 == 0);
      });`
    },
    {
      description: `Trie un tableau en supprimant les doublons`,
      method: `jQuery.unique()`,
      code: `jQuery.unique(elements);`
    },
    {
      description: `Convertit un ensemble organisé d'élément en tableau JavaScript`,
      method: `jQuery.makeArray()`,
      code: `var elements = document.getElementsByTagName('ul li');
      var tableau = jQuery.makeArray(elements);`
    },
    {
      description: `Convertit tous les éléments dans un tableau ou un objet dans un nouveau tableau en modifiant ces éléments avec une fonction.`,
      method: `jQuery.map()`,
      code: `jQuery.map([ 0, 1, 2 ], function(n){
      return n + 4;}
      );`
    },
    {
      description: `Réunis le contenu de deux objets ou plus dans le premier objet`,
      method: `jQuery.extend()`,
      code: `jQuery.extend({un:1,deux:2,trois:3},{quatre:4,cinq:5});`
    },
    {
      description: `Ajoute un objet au prototype de jQuery`,
      method: `jQuery.fn.extend()`,
      code: `jQuery.fn.extend({
      message: function(texte){
      alert(texte);
      }
      });`
    },
    {
      description: `Balaye un JSON et retourne la valeur JavaScript correspondante`,
      method: `jQuery.parseJSON()`,
      code: `var contenu = jQuery.parseJSON('{
      "info":"Il fait beau"
      }');
      $('#message').text(contenu.info);`
    },
    {
      description: `Balaye une chaine de caractère cet la renvoie sous forme d'un document XML`,
      method: `jQuery.parseXML()`,
      code: `jQuery.parseXML(duXml);`
    },
    {
      h3:`Divers`
    },
    {
      description: `Exécute un code dans le contexte global`,
      method: `jQuery.globalEval()`,
      code: `jQuery.globalEval('var chose = 45');`
    },
    {
      description: `Prend une fonction et la retourne dans un contexte particulier`,
      method: `jQuery.proxy()`,
      code: `jQuery.proxy(objParticulier,'fonctionSpeciale');`
    },
    {
      description: `Donne une fonction vide (utile pour la création de plugin)`,
      method: `jQuery.noop()`,
      code: `jQuery.noop();`
    },
    {
      description: `Donne un nombre représentant l'heure actuelle`,
      method: `jQuery.now()`,
      code: `jQuery.now();`
    },
]};
