/**
  Utilisation du module http de Node JS pour créer un serveur http de plus en
  plus élaboré.

  Votre serveur devra être joignable à l'URL :
    [protocole]://[adresse IP ou nom de domaine][:port][/ressource]

  Par exemple :
   - Protocole : http
   - Adresse IP : 31.42.53.64
   - Port : 5555
   - Ressource : /accueil

  Donne l'URL : http://31.42.53.64:5555/home
**/

/**
  Exercices :

  1.
  Créez deux fichiers HTML valides : home.html et about.html

  Vous devez créer un serveur HTTP qui retourne dans sa réponse HTTP
  - le contenu du fichier home.html si l'URL utilisé pour effectuer la requête
    HTTP contient la ressource /accueil
  - le contenu du fichier about.html si l'URL utilisé pour effectuer la requête
    HTTP contient la ressource /apropos
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
    case '/accueil':
      responseOctets = fs.readFileSync('./home.html');
      texte = responseOctets.toString('utf-8');
      responseOctets = Buffer.from(texte);
      break;
    case '/apropos':
      responseOctets = fs.readFileSync('./about.html');
      texte = responseOctets.toString('utf-8');
      responseOctets = Buffer.from(texte);
      break;
    case '/falken':
      responseOctets = Buffer.from('Hello professor Falken.\nWould you like to play a game of Chess?');
      break;
    default:
      responseOctets = fs.readFileSync('./404.html');
      texte = responseOctets.toString('utf-8');
      responseOctets = Buffer.from(texte);
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
  Exercices :

  2. Créez un fichier HTML valide : 404.html

  Votre serveur HTTP doit retourner dans sa réponse HTTP le contenu du fichier
  404.html si l'URL utilisé pour effectuer la requête HTTP ne contient pas la
  ressource /accueil ou /apropos.

  N'oubliez pas de préciser le code 404 dans les en-têtes de la réponse HTTP.
**/

/**
 * Sami Radi - VirtuoWorks® - tous droits réservés©
**/
