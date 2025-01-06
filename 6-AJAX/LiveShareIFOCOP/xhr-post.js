window.document.addEventListener('DOMContentLoaded', () => {
  console.log('Script POST bien chargé après le chargement de la page !');

  const resultDiv = document.getElementById('display-data');
  // On récupère une référence à notre formulaire...
  const postPostsForm = document.getElementById('post-data-form');

  // On crée une fonction qui fera office de gestionnaire d'événement pour
  // communiquer avec l'API distante et qui sera passée en deuxième argument
  // à la foncftion addEventListener qui sera attachée au formulaire...
  const postData = (event) => {
    event.preventDefault();

    // On crée une instance de l'objet XMLHttpRequest...
    const xhr = new XMLHttpRequest();
    // On récupère les données de notre formulaire au format FormData en utilisant
    // le constructeur prévu à cet effet...
    const formData = new FormData(postPostsForm);
    // On déclare une variable dans laquelle sera stocké l'objet JSON formé par les
    // paires clé/valeur du formulaire...
    const jsonForm = {};

    // On utilise la méthode .append() afin d'ajouter une paire clé/valeur au formulaire...
    formData.append('userId', 33);

    // Ici, on itère sur les entrées du formulaire au format FormData afin de pouvoir créer
    // un objet JSON utilisable. On utiliser la destructuration d'assignation....
    console.log('formdata.entries: ', formData.entries()); // Renvoie un objet de type FormData.Iterator non utilisable tel quel

    // On va donc itérer sur ce FormData.Iterator en utilisant une destructuration d'assignation...
    for (const [key, value] of formData.entries()) {
      console.log(`{ clé: ${key}, valeur: ${value} }`);
      console.log(key, value);
      jsonForm[key] = value;
    }

    // console.log('jsonForm: ', jsonForm);

    xhr.open(
      'POST',
      'https://jsonplaceholder.typicode.com/posts',
      true
    );

    const strForm = JSON.stringify(jsonForm);

    // console.log('jsonForm stringified: ', jsonForm);
    const contentType = 'application/json; charset=UTF-8';

    xhr.setRequestHeader('Content-type', contentType);

    xhr.addEventListener('readystatechange', (event) => {
      console.log('event: ', event);

      if (xhr.DONE && xhr.readyState === 4) {
        console.log('xhr.responseText: ', xhr.responseText);
        const jsonData = JSON.parse(xhr.responseText);
        console.log('jsonData: ', jsonData);

        const postDivElt = document.createElement('div');
        const postTitle = document.createElement('h3');
        const postBody = document.createElement('p');
        const spaceElt = document.createElement('br');
        const separator = document.createElement('hr');

        postTitle.innerText = jsonData.title;
        postBody.innerText = jsonData.body;

        postDivElt.append(postTitle, spaceElt, postBody, separator);
        resultDiv.appendChild(postDivElt);
      } else {
        // Do something in case request fails...
      }
    })

    xhr.send(strForm);
  }

  postPostsForm.addEventListener('submit', postData);
});