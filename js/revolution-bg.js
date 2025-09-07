document.addEventListener("DOMContentLoaded", () => {
    const bg = document.querySelector('.animated-bg');
    for (let i = 0; i < 18; i++) {
        const el = document.createElement('div');
        el.className = 'bg-shape';
        el.style.left = `${Math.random() * 100}%`;
        el.style.animationDuration = `${6 + Math.random() * 8}s`;
        el.style.background = `hsla(${Math.random()*360}, 80%, 60%, 0.18)`;
        bg.appendChild(el);
    }
});

const imagePairs = [
    {
        first: "../ressources/pokemonRes/pokemon1-shadow.png",
        second: "../ressources/pokemonRes/pokemon1.png",
        answer: "kempynck"
    },
    {
        first: "../ressources/pokemonRes/pokemon1-shadow.png",
        second: "../ressources/pokemonRes/pokemon2.png",
        answer: "camion"
    },
    {
        first: "../ressources/pokemonRes/pokemon3_Shadow.png",
        second: "../ressources/pokemonRes/pokemon3.png",
        answer: "kempynck"
    }
    // Ajoutez d'autres paires ici
];

let currentPair = null;
let usedIndices = [];
let asAnswered = false;

function resetBgColor() {
    document.body.classList.remove("bg-green", "bg-red");
}

function setBgColor(color) {
    resetBgColor();
    document.body.classList.add(color);
}

function getNextPair() {
    if (usedIndices.length === imagePairs.length) {
        // All images used, reset
        usedIndices = [];
    }
    let idx;
    do {
        idx = Math.floor(Math.random() * imagePairs.length);
    } while (usedIndices.includes(idx) && usedIndices.length < imagePairs.length);
    usedIndices.push(idx);
    return imagePairs[idx];
}

document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.querySelector(".nouvelle-partie-btn");
    const gameContainer = document.querySelector(".game-container");
    const gameImage = document.getElementById("game-image");
    const guessInput = document.getElementById("guess-input");
    const submitGuess = document.getElementById("submit-guess");
    const animatedBg = document.querySelector(".animated-bg");

    // Create or select the result message element
    let resultMsg = document.getElementById("result-message");
    if (!resultMsg) {
        resultMsg = document.createElement("div");
        resultMsg.id = "result-message";
        resultMsg.style.textAlign = "center";
        resultMsg.style.fontSize = "3rem";
        resultMsg.style.margin = "1rem 0";
        // Insert after the title, before the image
        const title = gameContainer.querySelector("#game-image");
        title.insertAdjacentElement("afterend", resultMsg);
    }

    function showNewPair() {
        currentPair = getNextPair();
        gameImage.src = currentPair.first;
        resultMsg.textContent = "";
        guessInput.value = "";
        resetBgColor();
        animatedBg.style.filter = "";
        gameImage.style.opacity = "1";
        guessInput.disabled = false;
        submitGuess.innerHTML = "Valider";
        asAnswered = false;
    }

    startBtn.addEventListener("click", () => {
        gameContainer.style.display = "block";
        startBtn.style.display = "none";
        showNewPair();
    });

    submitGuess.addEventListener("click", () => {
        if (asAnswered) {
            showNewPair();
            guessInput.focus();
        } else {
            const guess = guessInput.value.trim().toLowerCase();
            // Show second image
            gameImage.src = currentPair.second;
            guessInput.disabled = true;
            if (guess === currentPair.answer) {
                setBgColor("bg-green");
                resultMsg.textContent = "Bien joué !";
            } else {
                setBgColor("bg-red");
                resultMsg.textContent = `Raté c'était ${currentPair.answer} !`;
            }
            resultMsg.style.color = "#f1f1f1";
            submitGuess.innerHTML = "Suivant";
            asAnswered = true;
        }
    });

    guessInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !submitGuess.disabled) submitGuess.click();
    });
});