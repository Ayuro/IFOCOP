'use strict';

const getSpecificPost = (event) => {
  resultDiv.innerHTML = '';
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  let specificPostId = undefined;

  const formData = new FormData(getPostForm);

  xhr.open('GET', `https://jsonplaceholder.typicode.com/posts/${specificPostId}`);

  xhr.addEventListener('readystatechange', () => {
    if (xhr.DONE && xhr.readyState === 4) {
      const jsonData = JSON.parse(xhr.responseText);
      if (undefined !== jsonData.title && undefined !== jsonData.filling) {
        const postDivElt = document.createElement('div');
        const postTitle = document.createElement('h3');
        const postBody = document.createElement('p');
        const spaceElt = document.createElement('br');
        const separator = document.createElement('hr');

        postTitle.innerText = jsonData.title;
        postBody.innerText = jsonData.filling;
        postDivElt.append(postTitle, spaceElt, postBody, separator);
        resultDiv.aappendChild(postDivElt);
        } else {
        resultDiv.innerText = 'Aucun post ne correspond à ce numéro.';
      }
    } else {
      if(xhr.status === 404 || xhr.onerror) {
        resultDiv.innerHTML = "";
      }
    }
    xhr.send();
  });
  getDataBtn.addEventListener('click', getOnePost);
  getAllDataBtn.addEventListener('click', getData);
  getPostsForm.addEventListener('submit', getSpecificPost);
};