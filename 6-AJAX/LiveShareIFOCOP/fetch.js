window.addEventListener('DOMContentLoaded', () => {
  const resultDiv = document.getElementById('display-data');
  const getDataBtn = document.getElementById('get-data');
  const getAllDataBtn = document.getElementById('get-all-data');
  const getPostsForm = document.getElementById('get-post-form');
  let postId = 1;

  getDataBtn.addEventListener('click', () => {
    const data = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    console.log('Données reçues: ', data);
  });

  const executor = (resolve, reject) => {
    setTimeout(() => {
      // resolve('Promesse tenue !');
      reject(new Error('Une erreur est survenue...'));
    }, 3000);
  }

  const maPremierePromesse = new Promise(executor);

  /* En utilisant la syntaxe de chaînage .then() .catch() .finally() */
  // maPremierePromesse
  //   .then(data => {
  //     console.log('data dans le chaînage: ', data);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   })
  //   .finally(() => {
  //     console.info('Tout est terminé !');
  //   });

  /* En utilisant le sucre syntaxique async/await et la syntaxe ES6 avec fonction flèche */
  const myAsyncFn = async () => {
    try {
      const data = await maPremierePromesse;
      console.log('data: ', data);
    } catch (error) {
      console.error(error); 
    }
  }

  /* Facon d'écrire sans la syntaxe ES6, avec une déclaration de fonction standard... */
  async function myAsyncFn2() {
    try {
      const data = await maPremierePromesse;
      console.log('data: ', data);
    } catch (error) {
      console.error(error);
    }
  }

  myAsyncFn();

  const url = 'https://randomuser.me/api/';
  const options = {
    method: 'GET'
  };

  const getData = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      result.results.forEach(user => {
        const userInfo = document.createElement('div');
        for (let info in user) {
          console.log('INFO: ', user[info]);
          const userDetail = document.createElement('div');
          const spacing = document.createElement('br');
          userDetail.innerHTML = `${info}: ${JSON.stringify(user[info])}`;
          userInfo.append(userDetail, spacing);
        }
        resultDiv.appendChild(userInfo);
      })
    } catch (error) {
      console.error(error);
    }
  }
  getData();
});