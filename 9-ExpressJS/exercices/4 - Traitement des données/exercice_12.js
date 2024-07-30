/***********************************************************
****************GÉRER LES VALEURS DANS L'URL****************
***********************************************************/

/*********************************
***********Présentation***********
*********************************/
/*
Il existe plusieurs façons de traiter des informations fournies dans l'url.
Parmis celles-ci, il y a les propriétées params et query de l'objet req.

------ 1 ------
Si je saisis dans l'url http://www.monsite.com/infos/truc/machin
et que je traite du côté serveur, je peux récupérer les données de la façon suivante :
  app.get('/infos/:un/:deux', (req,res) => {
    console.log(req.params.un); //affiche truc
    console.log(req.params.deux); //affiche machin
  });

------ 2 ------
Si je saisis dans l'url http://www.monsite.com/question?r=chose&t=bidule
et que je traite du côté serveur, je peux récupérer les données de la façon suivante :
  app.get('/question', (req,res) => {
    console.log(req.query.r); //affiche chose
    console.log(req.query.t); //affiche bidule
  });
*/


/*********************************
*************Exercice*************
*********************************/
/*
------ 1 ------
Reprenez le site de l'exercice 10. Pour changer de page, vous passer la référence de celle-ci dans l'url en traitant avec req.params.

------ 2 ------
Reprenez le site de l'exercice 11. Pour changer de page, vous passer la référence de celle-ci dans l'url en traitant avec req.query.
*/

import url from 'url';
import {dirname, join, normalize} from 'path'
import express from 'express';

const __dirname = dirname(url.fileURLToPath(import.meta.url));
const app = express();

app.set('view engine', 'pug');
app.set('views', 'public/views/pages');
app.use('/js', express.static(join(__dirname, 'public', 'js')))
app.use('/css', express.static(join(__dirname, 'public', 'css')))
app.use('/images', express.static(join(__dirname, 'public', 'images')));
app.use('/avions', express.static(join(__dirname, 'public', 'images/avions')));

const htmlOptions = {
    root: normalize(join(__dirname, 'public', 'html'))
};

app.get('/', (req, res, next) => {
    console.log("I'm alive!");
    return res.render('home', {
        pageTitle: 'Accueil',
        mySite: 'My WebSite',
    })
})

app.get('/image', (req, res, next) => {
    return res.render('image', {
        pageTitle: 'Images',
        mySite: 'My WebSite'
    })
});

app.get('/autretrucpug', (req, res, next) => {
    return res.render('autretrucpug', {
        pageTitle: 'Un autre truc',
        mySite: 'My WebSite'
    })
});

app.get('/fin', (req, res, next) => {
    console.log("This is the end... myyyy friend");
    return res.send();
});

app.listen(1986, () => {
  console.log("J'écoute le port 1986");
});
