const displayProfile = async(event) => {
    event.preventDefault();

    const name = document.querySelector('#first-name').value.trim();
    const lastName = document.querySelector('#last-name').value.trim();
    const email = document.querySelector('#email').value.trim();

    if (name && lastName && email) {
        const response = await fetch(`/api/users`, {
            method: 'POST',
            body: JSON.stringify({ name, lastName, email }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            document.location.replace('/');
        }
    }
};

document.querySelector('#saveBtn').addEventListener('submit', displayProfile);