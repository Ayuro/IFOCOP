/**********************************************************
*****************TEMPLATE PUG - INCLUSION*****************
**********************************************************/

/*********************************
***********Présentation***********
*********************************/
/*
Pour ne pas répéter plusieurs fois les mêmes lignes de code dans différents template Pug, il est possible d'utiliser l'inclusion.
Cela consiste à déporter la partie du code qui se répète dans un autre fichier pour l'appeler ensuite dans les fichiers qui en ont l'usage.
On utilise pour se faire le mot clef include (cf. https://pugjs.org/language/includes.html)
*/


/*********************************
*************Exercice*************
*********************************/
/*
------ 1 ------
Reprenez le code de l'exercice précédent.

------ 2 ------
Utilisez l'inclusion pour mettre à part l'en-tête de la page et le menu.
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
