const loginHandler = async(event) => {
    console.log('working');

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (email && password) {
        const response = await fetch('/api/users', {
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