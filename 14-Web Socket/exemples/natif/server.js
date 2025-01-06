/**
 * Partie Serveur HTTP
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
 * Partie Serveur Websocket
 */
const crypto = require('crypto');

server.on('upgrade', (incomingMessage, socket, head) => {
  // incomingMessage; // objet qui décrit la requête
  // socket; // objet qui décrit la connexion réseau
  // head; // buffer qui contient les en-tête de requête
  const secWebSocketKey = incomingMessage.headers['sec-websocket-key'];
  // D'après : https://datatracker.ietf.org/doc/html/rfc6455#section-4.2.2
  let secWebSocketAccept = secWebSocketKey + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
  secWebSocketAccept = crypto.hash('sha1', secWebSocketAccept, 'base64');

  const responseHeaders = [
    'HTTP/1.1 101 Switching Protocols',
    'Upgrade: websocket',
    'Connection: Upgrade',
    'Sec-WebSocket-Accept:' + secWebSocketAccept
  ].join('\n').concat('\n\n')

  console.log('response headers', responseHeaders);

  socket.write(responseHeaders, () => {
    // Cette fonction est déclenché APRES avoir répondu au navigateur
    // HTTP 101 Switching protocols
    console.log('En-tête de réponse HTTP envoyés');

    socket.on('data', (chunk) => {
      console.log(chunk);

      // Position par défaut du masque binaire.
      const maskLocation = 2;
      // Position par défaut du masque binaire.
      const maskingKey = chunk.slice(maskLocation, maskLocation + 4);
      // Position par défaut des données.
      let dataLocation = maskLocation + 4;
      // Tableau pour le stockage des données décodées.
      const decodedData = [];
      for (let i = 0; dataLocation < chunk.length; i++) {
        // Décodage octet par octet.
        decodedData.push(chunk[dataLocation] ^ maskingKey[i % 4]);
        dataLocation++
      };
      // Création d'un buffer (suite d'octets) à partir du tableau d'octets décodés.
      const buffer = Buffer.from(decodedData);
      // Conversion du buffer en chaîne de caractères.
      const message = buffer.toString();

      console.log(message);

    });
  })
})