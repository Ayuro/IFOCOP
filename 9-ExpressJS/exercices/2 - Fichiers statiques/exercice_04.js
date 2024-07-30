/***********************************************************
************UTILISATION DES FICHIERS STATIQUES 2************
***********************************************************/

/*********************************
***********Présentation***********
*********************************/
/*
Vous pouvez déclarer autant de dossier statique que vous le souhaitez.
*/

/*********************************
*************Exercice*************
*********************************/
/*

------ 1 ------
Créez deux dossiers à côté de votre fichier. Placez une image dans chaque dossier.

------ 2 ------
Déclarez successivement ces deux dossiers dans votre fichier JavaScript.

------ 3 ------
Quand l'utilisateur se connecte à votre serveur, envoyez-lui la balise image correspondant au premier dossier.

------ 4 ------
S'il saisit le texte 'image' dans l'URL, affichez lui l'image correspondant au second dossier.
*/

// CODE A C/C DANS app.js AFIN DE L'EXECUTER

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