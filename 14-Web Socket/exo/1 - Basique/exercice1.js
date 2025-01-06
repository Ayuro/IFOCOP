/**
  1. Testez le serveur basique de l'exercice 0.
**/

const express = require('express');
const app = express();

app.set('view engine', 'html');

app.use(express.static('exercice0'));

app.get('/', (request, response) => {
  response.render('websocket-client')
});

app.listen(8888, () => {
  console.log('Server started on 8888');
})