window.document.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById('resultTitle');
  const body = document.getElementById('resultFilling');
  const getButton = document.getElementById('get-data');
  const postDataForm = document.getElementById('post-data-form');
  const userId = 42;
  let counter = 1;

  postDataForm.addEventListener('click', async (event) => {
    event.preventDefault();
    const resultDiv = document.getElementById(`display-post-result`);
    const fetchUrl = `https://jsonplaceholder.typicode.com/posts`;

    const formData = new FormData(postDataForm);
    const jsonData = {};
    formData.append('userId', userId);

    for (const [key, value] of formData.entries()) {
      jsonData[key] = value;
    }

    try {
      const response = await fetch(fetchUrl, { 
        method: 'POST',
        body: JSON.stringify(jsonData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const jsonResponse = await response.json();
      const postDivElt = document.createElement('div');
      const postTitle = document.createElement('h3');
      const postBody = document.createElement('p');
      const spaceElt = document.createElement('br');
      const separator = document.createElement('hr');

      postTitle.innerText = jsonResponse.title;
      postBody.innerText = jsonResponse.body;

      postDivElt.append(postTitle, spaceElt, postBody, separator);
      resultDiv.appendChild(postDivElt);
      postDataForm.reset();
    } catch (error) {
      console.error(error);
    }
  });
});