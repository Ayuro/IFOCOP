/**
 * Partie Serveur HTTP (identique à l'exemple précédent)
 */
const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer();

server.on('request', (incomingMessage, serverResponse) => {
  console.log('Request received');
  const pathToFile = path.normalize('public/index.html');
  let data;
  let statusCode = 200;
  try {
    data = fs.readFileSync(pathToFile);
  } catch(e) {
    statusCode = 500;
    data = Buffer.from('<html><head><title>Internal Server Error</title></head><body><h1>500</h1><p>Internal Server Error</p></body></html>')
  }
  serverResponse.writeHead(statusCode, {
    'Content-Length': data.length,
    'Content-Type': 'text/html;charset=utf-8'
  });
  serverResponse.write(data, () => {
    serverResponse.end();
  })
});

server.listen(80, () => {
  console.log('HTTP Server started on 80');
})

/**
 * Partie Serveur Websocket (cette fois avec le module WebSocket)
 * - https://www.npmjs.com/package/websocket?activeTab=readme
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