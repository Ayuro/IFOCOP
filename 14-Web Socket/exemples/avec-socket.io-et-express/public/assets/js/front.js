window.document.addEventListener('DOMContentLoaded', () => {

  // La fonction io est disponible si la librairie front-end socket.io a été
  // chargée. Cette fonction est documentée ici :
  // @voir : https://socket.io/docs/v4/client-api/#iourl
  const socket = io('http://192.168.111.186');

  // L'objet de type Socket obtenu en front-end est documenté ici :
  // @voir : https://socket.io/docs/v4/client-api/#socket

  socket.on('connect', () => {

    console.log('Connecté au serveur socket.io');

    window
      .document
      .getElementById('titre')
      .addEventListener('click', () => {

        socket.emit('un-identifiant-pour-cette-action', {
          uneInformationCruciale: "Salut ça boume !"
        });
        // Message envoyé à travers la connexion websocket :
        // "["un-identifiant-pour-cette-action",{"uneInformationCruciale":"Salut ça boume !"}]""

        socket.on('un-message-regulier', (laDonneeProvenantDuServeur) => {
          console.log("laDonneeProvenantDuServeur", laDonneeProvenantDuServeur)
        })

    })

  });

});