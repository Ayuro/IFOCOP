import url from 'url';
import {dirname, join, normalize} from 'path'
import express from 'express';

const __dirname = dirname(url.fileURLToPath(import.meta.url));
const app = express();

app.use('/html', express.static(join(__dirname, 'public', 'html')))
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