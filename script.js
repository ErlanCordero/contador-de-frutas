const fruits = ['🍎', '🍌', '🍓', '🍊', '🍇'];
let currentFruit;
let currentCount;

function getRandomFruit() {
    const fruit = fruits[Math.floor(Math.random() * fruits.length)];
    currentCount = Math.floor(Math.random() * 5) + 1; // Entre 1 y 5
    return Array(currentCount).fill(fruit);
}

function displayFruits() {
    currentFruit = getRandomFruit();
    const fruitDisplay = document.getElementById('fruit-display');
    fruitDisplay.innerHTML = '';
    currentFruit.forEach(fruit => {
        const span = document.createElement('span');
        span.textContent = fruit;
        fruitDisplay.appendChild(span);
    });

    const questionLabel = document.querySelector('label');
    questionLabel.classList.remove('label-visible'); // Ocultar la etiqueta
    setTimeout(() => {
        questionLabel.classList.add('label-visible'); // Mostrar la etiqueta
    }, 100); // Mostrar después de un breve retraso
}

document.getElementById('check-button').addEventListener('click', () => {
    const guess = parseInt(document.getElementById('guess').value);
    const result = document.getElementById('result');

    result.innerHTML = ''; // Limpiar resultados anteriores

    if (guess === currentCount) {
        result.textContent = '¡Correcto! 🎉';
        const celebrationEmoji = document.createElement('span');
        celebrationEmoji.textContent = '🥳🎊✨';
        celebrationEmoji.classList.add('celebration');
        result.appendChild(celebrationEmoji);
    } else {
        result.textContent = `Incorrecto. Hay ${currentCount} frutas.`;
        const sadEmoji = document.createElement('span');
        sadEmoji.textContent = '😢💔';
        sadEmoji.classList.add('sad');
        result.appendChild(sadEmoji);
    }

    document.getElementById('next-button').style.display = 'block';
});

document.getElementById('next-button').addEventListener('click', () => {
    document.getElementById('result').textContent = '';
    document.getElementById('guess').value = '';
    
    // Desvanecer y mostrar la etiqueta de la pregunta
    const questionLabel = document.querySelector('label');
    questionLabel.classList.remove('label-visible'); // Ocultar la etiqueta
    setTimeout(() => {
        displayFruits(); // Llamar a la función para mostrar las frutas
        questionLabel.classList.add('label-visible'); // Mostrar la etiqueta después
    }, 100); // Tiempo para ocultar antes de mostrar
});

// Iniciar el juego
displayFruits();