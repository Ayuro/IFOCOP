/**
 * Partie Serveur HTTP (cette fois avec Express JS)
 */
const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.render('index')
});

const server = app.listen(80, () => {
  console.log('Express HTTP Server started on 80');
})

// server est un objet natif de type http.Server

/**
 * Partie Serveur Websocket (reste identique à l'exemple précédent)
 * Cette fois ci on écrit cette partie en utilisant le module WebSocket
 */
const websocket = require('websocket');

const WebSocketServer = websocket.server;

// WebSocketServer est un constructeur :
// - https://github.com/theturtle32/WebSocket-Node/blob/d87afb7ef28f9c2249aa764805af87846d46f522/docs/WebSocketServer.md
const webSocketServer = new WebSocketServer({
  httpServer:server
});

let nombreDeConnexion = 0;
webSocketServer.on('request', (webSocketRequest) => {
  // webSocketRequest est un objet de type WebSocketRequest
  // - https://github.com/theturtle32/WebSocket-Node/blob/d87afb7ef28f9c2249aa764805af87846d46f522/docs/WebSocketRequest.md

  // On décrit la logique à exécuter si la connexion websocket est établie
  // - https://github.com/theturtle32/WebSocket-Node/blob/d87afb7ef28f9c2249aa764805af87846d46f522/docs/WebSocketConnection.md
  webSocketRequest.on('requestAccepted', function(websocketConnection) {
    let increment = 0
    websocketConnection.on('message', (message) => {
      console.log('Message reçu :', message.utf8Data);
      increment ++;
      websocketConnection.sendUTF(`J'ai fini mon service c'est pas le moment ${increment} fois !`);
    })
    websocketConnection.on('close', (code, desc) => {
      console.log('Connexion coupée', code, desc);
      nombreDeConnexion--;
    })
  });

  const leDomaineOuIPutiliséeLorsDeLaRequete = webSocketRequest.host;
  // Renvoyer la réponse HTTP qui accepte la connection websocket
  webSocketRequest.accept(null, leDomaineOuIPutiliséeLorsDeLaRequete);
  // La méthode accept() renvoi un objet de type WebSocketConnection
  nombreDeConnexion++;
  console.log("Nombre de connexion", nombreDeConnexion);
})