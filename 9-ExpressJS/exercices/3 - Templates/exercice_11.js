/*********************************************************
*****************TEMPLATE PUG - HÉRITAGE*****************
*********************************************************/

/*********************************
***********Présentation***********
*********************************/
/*
Une seconde technique permet également de ne pas répéter son code.
Dans ce second cas, on utilise un template parent qui agit comme une structure de base. Le template enfant contient les éléments spécifiques.
On utilise pour se faire le mot clef extends (cf. https://pugjs.org/language/inheritance.html).
*/


/*********************************
*************Exercice*************
*********************************/
/*
------ 1 ------
Reprenez le code de l'exercice précédent.

------ 2 ------
Utilisez le layout pour mettre à part l'en-tête de la page et le menu.
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
