/**
  Utilisation du module http de Node JS pour créer un serveur http de plus en
  plus élaboré.

  Votre serveur devra être joignable à l'URL :
    [protocole]://[adresse IP ou nom de domaine][:port][/ressource]

  Par exemple :
   - Protocole : http
   - Adresse IP : 168.192.10.168
   - Port : 5678
   - Ressource : /index.html

  Donne l'URL : http://168.192.10.168:5678/index.html
**/

/**
  Exercices :

  1. Créez un serveur HTTP qui retourne dans sa réponse HTTP le contenu du
  fichier dont le nom est le même que celui obtenu à partir de l'URL si ce
  fichier existe.

  Et, si le fichier n'existe pas le serveur HTTP retournera dans sa réponse HTTP
  le contenu du fichier 404.html que vous avez créé pour l'exercice précédent.

  Vous devrez donc reconstruire le chemin qui vous permettra d'ouvrir un fichier
  à partir de la ressource fournie dans l'URL.

  Par exemple, si l'URL est :

  - http://168.192.10.168:5678/html/contact.html (la ressource est donc
    /html/contact.html)

  Le serveur HTTP devra ouvrir et obtenir le contenu du fichier dont le chemin
  système est :
  - c:\diwjs\nodejs\app\html\contact.html (ou c:\diwjs\nodejs\app\ est mon
    dossier de travail)

  Pour obtenir le chemin vers le dossier dans lequel votre serveur s'exécute,
  vous pouvez utiliser l'objet Process vu précédemment. Et pour faire en sorte
  que les slash soient corrects, vous pouvez utiliser le module path de Node JS
  et particulièrement sa méthode .normalize() . Documentée ici :
    https://nodejs.org/api/path.html#path_path_normalize_p
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
 * Sami Radi - VirtuoWorks® - tous droits réservés©
**/
