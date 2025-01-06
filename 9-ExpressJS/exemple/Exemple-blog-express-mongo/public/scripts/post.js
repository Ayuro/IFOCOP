window.document.addEventListener('DOMContentLoaded', () => {
  const postForm = document.getElementById('posts-form');
  const notificationMessage = document.getElementById('notificationMessage');


  postForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(postForm);
    const formValues = new URLSearchParams(formData);

    console.log('formValues: ', formValues);

    try {
      const result = await fetch('http://localhost:3000/posts',
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          body: formValues
        }
      );

      const { message, error } = await result.json();
  
      notificationMessage.innerText = message;
      
      if (!error) {
        setTimeout(() => {
          postForm.reset();
          notificationMessage.innerText = '';
        }, 3000);
      }
    } catch (error) {
      console.error(error);
    }
  })
});