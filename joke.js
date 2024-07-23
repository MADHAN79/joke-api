document.addEventListener('DOMContentLoaded', function()  {
    
    const generateBtn = document.getElementById("generateBtn");

function fetchJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    }) 
    .then(response => response.json())
    .then(data => {
        document.getElementById('joke').innerText = data.joke;
    })
    .catch(error => console.error('Error fetching joke:', error));
}

function runConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

generateBtn.addEventListener("click", function() {
    fetchJoke();
    runConfetti();
});

fetchJoke();
});
