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
        location: req.url
    })
})

app.get('/image', (req, res, next) => {
    return res.render('image', {
        pageTitle: 'Images',
        location: req.url
    })
});

app.get('/autretrucpug', (req, res, next) => {
    return res.render('autretrucpug', {
        pageTitle: 'Un autre truc',
        location: req.url
    })
});

app.get('/fin', (req, res, next) => {
    console.log("This is the end... myyyy friend");
    return res.send();
});

app.listen(1986, () => {
  console.log("J'écoute le port 1986");
});
