window.document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('resultTitle');
    const body = document.getElementById('resultFilling');
    const getButton = document.getElementById('get-data');
    let counter = 1;
  
    getButton.addEventListener('click', async (_event) => {
      const method = 'GET';
      const fetchUrl = `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records/`;
  
      try {
        const response = await fetch(fetchUrl, { method });
        const jsonData = await response.json();
        console.log(jsonData.results[counter]);
  
        if (Object.keys(jsonData).length) {
          counter++;
          title.innerHTML = jsonData.results[counter].title;
          body.innerHTML = jsonData.results[counter].lead_text;
        } else {
          counter = 1;
          title.innerHTML = 'Aucune donnée';
          body.innerHTML = 'Réessayez ultérieurement.';
        }
      } catch (error) {
        console.error(error);
      }
    });
});