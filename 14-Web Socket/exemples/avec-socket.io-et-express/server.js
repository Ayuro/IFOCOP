/** Partie HTTP */
import express from 'express';

const app = express();

app.set('views engine', 'pug');

app.use(express.static('./public'));

app.get('/', (req, res) => {
  return res.render('index.pug');
});

const httpServer = app.listen(80, () => {
  console.log('HTTP Server started on port 80');
})

/** Partie Socket.io back-end */
import { Server } from 'socket.io'

// Le constructeur Server de socket.io est documenté ici :
// @voir : https://socket.io/docs/v4/server-api/#server
const ioServer = new Server(httpServer);
// A partir du moment ou on a associé le serveur HTTP à une
// nouvelle instance de serveur créé avec le constructeur
// Server de socket.io, à PARTIR DU FRONT-END l'url
// /socket.io/socket.io.min.js permet d'obtenir le contenu du fichier
// dans le dossier node_modules/socket.io/client-dist/socket.io.min.js

ioServer.on('connection', (socket) => {
  console.log('Connexion établie avec le serveur websocket');
  // L'objet socket fourni est documenté ici :
  // @voir : https://socket.io/docs/v4/server-api/#socket

  socket.on('un-identifiant-pour-cette-action', (laDonneeProvenantDuNavigateur) => {
    socket.join("le groupe des gens qui ont cliqué sur le titre");
    console.log(laDonneeProvenantDuNavigateur);
  })

  setInterval(function(){
    // Envoi le message uniquement à la connexion représentée par socket
    socket.emit('un-message-regulier', 'Taratata tsouin tsouin !')
    // Envoi le message à toutes les connexions en cours avec le serveur
    // ioServer.emit('un-message-regulier', 'Taratata tsouin tsouin !')
    ioServer
      .to('le groupe des gens qui ont cliqué sur le titre')
      .emit('un-message-regulier', 'Je vous ai vu cliqué sur le titre c\'est pas bien !')
  }, 1000)
})
