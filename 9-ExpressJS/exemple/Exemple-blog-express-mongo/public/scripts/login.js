window.document.addEventListener('DOMContentLoaded', () => {
  const myForm = document.getElementById('login');
  const notificationMessage = document.getElementById('notificationMessage');

  if (myForm) {
    myForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(myForm);
      const searchParams = new URLSearchParams(formData);
  
      const result = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: searchParams
      });
  
      const { success, message, userId } = await result.json();

      notificationMessage.innerText = message;
      
      if (success) {
        setTimeout(() => {
          window.location = `/user-account/${userId}`;
        }, 2000);
      }
    })
  }
});
