const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn = addEventListener('click', generateJoke);

generateJoke()


function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        },
    }

    fetch('https://icanhazdadjoke.com', config)
        .then(response => response.json())
        .then(data => {
            jokeEl.innerHTML = data.joke
        })
        
}

// OR

// Everytime you use await within a function, you need to name function async
/* async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        },
    }

}

const response = await fetch('https://icanhazdadjoke.com', config);

const data = await res.json();

jokeEl.innerHTML = data.joke */