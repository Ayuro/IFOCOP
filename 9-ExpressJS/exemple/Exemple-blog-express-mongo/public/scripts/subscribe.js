window.document.addEventListener('DOMContentLoaded', () => {
  console.log('Script JS chargé correctement dans la page.');
  const myForm = document.getElementById('subscribe');
  const notificationMessage = document.getElementById('notificationMessage');

  if (myForm) {
    myForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(myForm);
      const searchParams = new URLSearchParams(formData);
  
      const response = await fetch('http://localhost:3000/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: searchParams
      });

      const { message, url, timeout, success } = await response.json();

      notificationMessage.innerText = message;
      
      if (success) {
        myForm.reset();

        setTimeout(() => {
          window.location = url;
        }, timeout);  
      }
    })
  }
});
