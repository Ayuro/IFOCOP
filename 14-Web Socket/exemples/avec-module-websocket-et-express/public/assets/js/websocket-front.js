const socket = new WebSocket('ws://192.168.109.197');

socket.addEventListener('open', (event) => {

  console.log('open', event);
  window.document.getElementById('click-me').addEventListener('click', () => {
    socket.send(`Bonjour, je voudrais un café s'il vous plaît !`);
  })

});

socket.addEventListener('error', (event) => {
  console.log('error', event);
});

socket.addEventListener('message', (event) => {
  console.log('message', event);
  window.document.getElementById('reponse').innerHTML = event.data;
});

socket.addEventListener('close', (event) => {
  console.log('close', event);
});