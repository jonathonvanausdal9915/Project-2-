const workoutHandeler = async() => {

    const workout_name = document.querySelector('#name').value.trim();
    const workout_type = document.querySelector('#activity').value.trim();
    const date = document.querySelector('#date').value.trim();



    if (workout_name, workout_type, date) {
        const response = await fetch('/api/workout/save', {
            method: 'POST',
            body: JSON.stringify({}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};


document.querySelector('#workoutbtn').addEventListener('submit', workoutHandeler);