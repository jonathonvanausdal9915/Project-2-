<<<<<<< HEAD
const loginFormHandler = async(event) => {
    event.preventDefault();

    const email = document.querySelector('#user-name').value.trim();
    const password = document.querySelector('#user_password').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#siginbtn').addEventListener('submit', loginFormHandler);
=======
const loginHandler = async (event) => {
  event.preventDefault();
  console.log('working'); 

  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('.help').addEventListener('submit', loginHandler);
>>>>>>> 706675075ed2606fe67d4c258d498c39306c6388
