/**
  Utilisation du module http de Node JS pour créer un serveur http de plus en
  plus élaboré.

  Votre serveur devra être joignable à l'URL :
    [protocole]://[adresse IP ou nom de domaine][:port]

  Par exemple :
   - Protocole : http
   - Adresse IP : 1.2.3.4
   - Port : 7777

  Donne l'URL : http://1.2.3.4:7777
**/

/**
  Exercices :

  1.
  Vous devez créer un serveur HTTP qui retourne dans sa réponse HTTP un corps de
  réponse en format HTML obtenu à partir du contenu d'un fichier.

  Vous devez donc créer un fichier HTML valide à coté de votre programme.

  A chaque requête HTTP reçue, vous utiliserez les méthodes asynchrones de
  l'objet FileSystem de Node JS pour lire et obtenir le contenu de votre fichier
  HTML. Puis, vous produirez une réponse HTTP contenant le contenu du fichier
  HTML.
**/
const fs = require('node:fs');
const http = require('node:http');

const myServer = http.createServer();

myServer.on('request', function(requestHTTP, responseHTTP) {
  let contentType = 'text/html';
  let responseOctets = Buffer.from('');
  let Code = 200;
  let texte = '';

  switch(requestHTTP.url) {
    case '/index':
      responseOctets = fs.readFileSync('./index.html');
      texte = responseOctets.toString('utf-8');
      responseOctets = Buffer.from(texte);
      break;
    case '/falken':
      responseOctets = Buffer.from('Hello professor Falken.\nWould you like to play a game of Chess?');
      break;
    default:
      responseOctets = Buffer.from('404 page not found');
      Code = 404;
  }

  responseHTTP.statusCode = Code
  responseHTTP.writeHead(Code, {
    'Content-Length': responseOctets.length,
    'Content-Type': contentType,    
  });

  responseHTTP.write(responseOctets, function() {
    responseHTTP.end();
  })
  
});

myServer.listen(1986, function() {
  console.log('It\'s alive! ALIVE!');
});

/**
 * Sami Radi - VirtuoWorks® - tous droits réservés©
**/
