/**
  Utilisation du module http de Node JS pour créer un serveur http de plus en
  plus élaboré.

  Votre serveur devra être joignable à l'URL :
  - [protocole]://[adresse IP ou nom de domaine][:port]

  Par exemple :
   - Protocole : http
   - Adresse IP : 100.50.25.12
   - Port : 6666

   Donne l'URL : http://100.50.25.12:6666
**/

/**
  Exercices :

  1.
  Vous devez créer un serveur HTTP qui retourne dans sa réponse HTTP un corps
  de réponse en format HTML valide.

  Attention, vous devez pensez à retourner dans l'en-tête de votre réponse HTTP
  le Mime Type correct (pour le HTML, il s'agit du Mime Type text/html)
**/

const http = require('node:http');

const myServer = http.createServer();

myServer.on('request', function(requestHTTP, responseHTTP) {
  let contentType = 'text/html';
  let responseOctets = Buffer.from('Hello professor Falken.\nWould you like to play a game of Chess?');

  console.log(requestHTTP);

  responseHTTP.writeHead(200, {
    'Content-Length': responseOctets.length,
    'Content-Type': contentType,
  });

  responseHTTP.write(responseOctets, function() {
    responseHTTP.end();
  });

});

myServer.listen(1986, function() {
  console.log('It\'s alive! ALIVE!');
});

/**
 * Sami Radi - VirtuoWorks® - tous droits réservés©
**/
