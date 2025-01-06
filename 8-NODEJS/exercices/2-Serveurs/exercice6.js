/**
  Utilisation du module http de Node JS pour créer un serveur http de plus en
  plus élaboré.

  Votre serveur devra être joignable à l'URL :
    [protocole]://[adresse IP ou nom de domaine][:port][/ressource]

  Par exemple :
   - Protocole : http
   - Adresse IP : 10.2.1.0
   - Port : 4321
   - Ressource : /ville/paris.html

   Donne l'URL : http://10.2.1.0:4321/ville/paris.html
**/

/**
  Exercices :

  1. Pour cet exercice vous reprendrez le serveur HTTP de l'exercice précédent.

  Votre serveur HTTP doit gérer différents Mime Types. Vous devez faire en sorte
  que le Mime Type soit conforme à l'extension obtenue à partir de la ressource
  dans l'URL.

  Par exemple :
  - Si l'URL est http://10.2.1.0:4321/photo.jpeg (et que le fichier photo.jpeg
    existe)
  - Alors l'en-tête de la réponse HTTP doit contenir Content-Type : image/jpeg

  Vous devez gérer les Mime Types des formats de fichier suivant :
    css, js, jpeg, png, pdf, gif.

  La liste des Mime Types autorisés est disponible ici :
    http://www.iana.org/assignments/media-types/media-types.xhtml
**/

const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

const myServer = http.createServer();

myServer.on('request', function(requestHTTP, responseHTTP) {
  const slug = (`./${requestHTTP.url}.html`);
  
  const defineHTTP = (code, filePath) => {
    let contentType = 'text/html';
    const reading = fs.readFile(path.normalize(filePath),(err,data) => {
      console.log(contentType);
      if(data) {
        responseHTTP.writeHead(code, {
          'Content-Length': data.length,
          'Content-Type': contentType,
        });
        responseHTTP.write(data, function() {
          responseHTTP.end();
        });
      } else 
        defineHTTP(404, process.cwd() + '/404.html');
    });
  }
  defineHTTP(200,slug);
});

myServer.listen(1986, function() {
  console.log('It\'s alive! ALIVE!');
});

/**
  2. Utiliser votre serveur HTTP pour "servir" votre projet Front End (sur le
    réseau local).

  Pensez à utiliser l'onglet réseau des outils de développement de votre
  navigateur Internet pour vérifier que vous arrivez bien à télécharger toutes
  les ressources exigées par votre projet.

  Ajoutez la gestion des Mime Types manquants si nécessaire...
**/

/**
 * Sami Radi - VirtuoWorks® - tous droits réservés©
**/
