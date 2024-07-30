/************************************************************
************UTILISATION DES TEMPLATES - MINI SITE************
************************************************************/

/*********************************
*************Exercice*************
*********************************/
/*
------ 1 ------
Reprenez le code de l'exercice 6.

------ 2 ------
Utilisez Pug pour transformer vos trois documents HTML en template.

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
