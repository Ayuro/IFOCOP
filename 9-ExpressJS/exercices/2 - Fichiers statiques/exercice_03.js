/***********************************************************
************UTILISATION DES FICHIERS STATIQUES 1************
***********************************************************/

/*********************************
***********Présentation***********
*********************************/
/*
Un serveur délivre de nombreux fichiers statiques : CSS, JavaScript, image, son, vidéo …
Express permet de faire référence à ces fichiers en les plaçant dans un sous-dossier. Celui-ci est déclaré dans le fichier js, avant la gestion des routes (app.get(), …) de la façon suivante :
app.use("/<nom du dossier>", express.static(__dirname + '/<nom du dossier>'));
Vous pouvez ensuite appeler l'élément dans le document html envoyé au client en spécifiant une URL relative.
*/

/*********************************
*************Exercice*************
*********************************/
/*
Vous devez envoyer au client avec la méthode send de l'objet res une balise image. Pour se faire, suivez la procédure ci-dessous :

------ 1 ------
Reprenez le code de l'exercice 1.

------ 2 ------
Créez un dossier à côté de votre fichier contenant une image. Déclarez ce dossier dans votre fichier JavaScript grâce à la méthode présentée ci-dessus.

------ 3 ------
Quand l'utilisateur se connecte à votre serveur, envoyez-lui une balise image qui affichera l'image contenue dans le dossier dans le navigateur.
*/

// CODE A C/C DANS app.js AFIN DE L'EXECUTER

import url from 'url';
import {dirname, join, normalize} from 'path'
import express from 'express';

const __dirname = dirname(url.fileURLToPath(import.meta.url));
const app = express();

app.use('/images', express.static(join(__dirname, 'public', 'images')));

const htmlOptions = {
    root: normalize(join(__dirname, 'public', 'html'))
  };

app.get('/', (req, res, next) => {
  console.log("I'm alive!");
  return res.sendFile(
    'index.html',
    htmlOptions,
    (err) => {
        if(err) {
            next(err);
        } else {
            console.log('Fichier index.html servi avec succès !');
        }
    }
  );
});

app.get('/fin', (req, res, next) => {
    console.log("This is the end... myyyy friend");
    return res.send();
});

app.listen(1986, () => {
  console.log("J'écoute le port 1986");
});