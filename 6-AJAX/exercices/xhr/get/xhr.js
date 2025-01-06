window.document.addEventListener('DOMContentLoaded', () => {
    // Création de constantes prennant en charge des zones html via leur Id
    const title = document.getElementById('xhrResultTitle');
    const filling = document.getElementById('xhrResultBody');
    const getButton = document.getElementById('xhrGet');
    // Un compteur pour faire défiler les posts au clique
    let counter = 1;
    
    // On écoute le clique
    getButton.addEventListener('click', (event) => {
        const xhr = new XMLHttpRequest();
        const method = 'GET';
        const xhrUrl = `https://jsonplaceholder.typicode.com/posts/${counter}`;
        xhr.open(method, xhrUrl);
        xhr.addEventListener('readystatechange', () => {
            if (4 === xhr.readyState) {
                const jsonData = JSON.parse(xhr.responseText);
                counter++;
                title.innerHTML = jsonData.title;
                filling.innerHTML = jsonData.body;
            }
        });
    
        // xhr.onerror = (xhr, event) => {
        //     console.log('xhr: ', xhr, 'event: ', event);
        // };
        xhr.send();
    });
});

const postData = (event) => {
    event.preventDefault();

    const formData = new FormData(postDataForm);
    console.log('formData: ', formData);
    console.log('formData.entries(): ', formData.entries());
    console.log('formData.entries().next(): ', formData.entries().next());

    for (entry of formData.entries()) {
      console.log(entry);
      
    }
  }

  getAllDataBtn.addEventListener('click', getData);
  getDataBtn.addEventListener('click', getOnePost);
  getPostsForm.addEventListener('submit', getSpecificPost);
  postDataForm.addEventListener('submit', postData);