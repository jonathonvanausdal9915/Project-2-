const goalHandler = async () => {

    const name = document.querySelector('#name').value.trim();
    const activity = document.querySelector('#activity').value.trim();

    if (name && activity) {
        const response = await fetch('/api/goal', {
            method: 'POST',
            body: JSON.stringify({name, activity}),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.goal-form').addEventListener('submit', goalHandler);