/***********************************************************
****************ROUTES ET FICHIERS STATIQUES****************
***********************************************************/

/*********************************
***********Présentation***********
*********************************/
/*
En utilisant la gestion des routes et l'utilisation des fichiers statiques, vous allez réaliser un mini site.
*/


/*********************************
*************Exercice*************
*********************************/
/*
------ 1 ------
Créez trois documents HTML :
- Chacun contient un titre et un menu,
- Le même fichier CSS est utilisé par les trois documents,
- Prévoyez une image d'en-tête utilisée dans tous les documents.

------ 2 ------
Un menu, présent dans les trois pages, comportera trois liens : page d'accueil, page 1 et page 2. Ceux-ci permettront de naviguer entre les trois pages.
Utilisez un app.use et trois app.get.
*/

import url from 'url';
import {dirname, join, normalize} from 'path'
import express from 'express';

const __dirname = dirname(url.fileURLToPath(import.meta.url));
const app = express();

app.use('/js', express.static(join(__dirname, 'public', 'js')))
app.use('/css', express.static(join(__dirname, 'public', 'css')))
app.use('/images', express.static(join(__dirname, 'public', 'images')));
app.use('/avions', express.static(join(__dirname, 'public', 'images/avions')));

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

app.get('/image', (req, res, next) => {
    return res.sendFile(
        'image.html',
        htmlOptions,
        (err) => {
            if(err) {
                next(err);
            } else {
                console.log('Fichier image.html servi avec succès !');
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