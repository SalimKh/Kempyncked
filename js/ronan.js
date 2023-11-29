const countersHTML = document.querySelectorAll(".countdown__number");
const playButtonHTML = document.getElementById("play");
const justificationHTML = document.getElementById("justification");
const replayButtonHTML = document.getElementById("replay");
const overlayHTML = document.getElementById("overlay");
const countdownHTML = document.getElementById("countdown");
const looseHTML = document.getElementById("loose");
const bestScoreHTML = document.getElementById("best-score");

const rightHTML = document.getElementById("right");
const leftHTML = document.getElementById("left");
const questionHTML = document.getElementById("question");
const scoreTextHTML = document.getElementById("scoreText");

const choices = [
  {
    question: "La piscine",
    response: 1,
    score: 2,
    justification: "Le sport ultime de gauche",
  },
  {
    question: "gwada",
    response: 2,
    score: 1,
    justification: "La Gwadance à son art",
  },
  {
    question: "basketball",
    response: 1,
    score: 2,
    justification: "Ya pas de contact",
  },
  {
    question: "rugby",
    response: 2,
    score: 1,
    justification: "Un sport de bonhomme",
  },
  {
    question: "ronan",
    response: 1,
    score: 2,
    justification: "Le mec est dans le déni",
  },
  {
    question: "twitter",
    response: 2,
    score: 1,
    justification: "La twittosphère à son paroxysme",
  },
  {
    question: "janna",
    response: 1,
    score: 1,
    justification: "Aimer brasser du vent",
  },
  {
    question: "macron",
    response: 2,
    score: 2,
    justification: "Le petit filou",
  },
  {
    question: "les furys",
    response: 1,
    score: 1,
    justification: "Ils aiment les animaux",
  },
  {
    question: "le yoga du rire",
    response: 1,
    score: 1,
  },
  {
    question: "La pêche",
    response: 1,
    score: 2,
    justification: "Être en pleine nature",
  },
  {
    question: "Le véganisme",
    response: 1,
    score: 1,
    justification: "vraiment ???",
  },
  {
    question: "TikTok",
    response: 1,
    score: 2,
    justification: "La jeunesse...",
  },
  {
    question: "Les vieux",
    response: 2,
    score: 2,
    justification: "Merci la perte des neuronnes",
  },
  {
    question: "Le Rap",
    response: 1,
    score: 1,
    justification: "La révolte urbaine",
  },
  {
    question: "Le saucisson",
    response: 2,
    score: 1,
    justification: "un bon morceau de porc",
  },
  {
    question: "Les super-héros",
    response: 2,
    score: 1,
    justification: "Le modèle américains",
  },
  {
    question: "Les cryptomonnaies",
    response: 2,
    score: 1,
    justification: "de l'argent à perdre",
  },
  {
    question: "Le président argentin",
    response: 2,
    score: 1,
    justification: "Étonnant pour certains",
  },
  {
    question: "Le cirque",
    response: 2,
    score: 1,
    justification: "Avoir des animaux enfermés ?",
  },
  {
    question: "La Toplane",
    response: 2,
    score: 2,
    justification: "Bagarre Land",
  },
  {
    question: "La zoologie",
    response: 1,
    score: 1,
    justification: "Un amour pour nos amis",
  },
  {
    question: "La vodka",
    response: 1,
    score: 1,
    justification: "La boisson de gauche par excellence",
  },
  {
    question: "Les Enseignants",
    response: 1,
    score: 1,
    justification: "Ils ont la patience d'instruire les jeunes",
  },
  {
    question: "L'équitation",
    response: 2,
    score: 2,
    justification: "Un sport de riche",
  },
  {
    question: "Le champagne",
    response: 2,
    score: 2,
    justification: "La boisson de droite par excellence",
  },
  {
    question: "Les comédies musicales",
    response: 1,
    score: 2,
    justification: "Un penchant artistique",
  },
  {
    question: "La guitare",
    response: 1,
    score: 2,
    justification: "L'instrument le plus à gauche",
  },
  {
    question: "Le leg day",
    response: 2,
    score: 2,
    justification: "Faire un vrai sport",
  },
  {
    question: "Le golf",
    response: 2,
    score: 2,
    justification: "Richesse Land",
  },
  {
    question: "La sorcellerie",
    response: 2,
    score: 2,
    justification: "Gros débats mais avoir des pouvoirs...",
  },
  {
    question: "Les tatouages",
    response: 1,
    score: 1,
    justification: "Un besoin de dessin",
  },
  {
    question: "Le football",
    response: 1,
    score: 1,
    justification: "Le sport le plus populaire",
  },
  {
    question: "JDG",
    response: 2,
    score: 1,
    justification: "Le mec plus à droite que macron wtf",
  },
  {
    question: "Le gluten",
    response: 2,
    score: 1,
    justification: "À gauche, c'est sans gluten",
  },
  {
    question: "L'Art To Play",
    response: 1,
    score: 2,
    justification: "Les fameux kikoojap",
  },
  {
    question: "Le père noël",
    response: 2,
    score: 2,
    justification: "Un chef d'entreprise pour la consommation",
  },
  {
    question: "L'armée",
    response: 2,
    score: 1,
    justification: "Les cerveaux du groupe",
  },
  {
    question: "La drogue",
    response: 1,
    score: 1,
    justification: "N'est-ce pas Ronan",
  },
  {
    question: "Corbel qui veut jouer que pour gagner",
    response: 2,
    score: 1,
    justification: "Il me fait très peur",
  },
  {
    question: "Les nains",
    response: 2,
    score: 1,
    justification: "À la bonne franquette",
  },
  {
    question: "Les elfes",
    response: 1,
    score: 1,
    justification: "Des gens qui bouffent de la verdure",
  },
  {
    question: "Le béhourd",
    response: 2,
    score: 1,
    justification: "Mettre des armures pour aller en croisade",
  },
  {
    question: "Alan qui met des timeouts",
    response: 2,
    score: 1,
    justification: "La dictature",
  },
];

choices.sort(() => Math.random() - 0.5);

let choiceIndex = 0;
let score = 0;
let isGamePlaying = false;

function handleAction(win) {
  if (!isGamePlaying) return;
  if (win) {
    score += choices[choiceIndex].score * 100;
    displayScore();
  } else {
    handleLoose();
  }
  if (choiceIndex + 1 >= choices.length) handleReset();
  choiceIndex++;
  setUpChoice();
}

function displayScore() {
  scoreTextHTML.innerHTML = score;
}

function handleLoose() {
  isGamePlaying = false;
  handleBestScore();

  overlayHTML.classList.remove("hide");
  bestScoreHTML.innerHTML = localStorage.getItem("BEST_SCORE");
  justificationHTML.innerHTML = `"${choices[choiceIndex].justification}"`;
  looseHTML.classList.remove("hide");
  questionHTML.classList.add("hide");
}

function handleBestScore() {
  const bestScore = localStorage.getItem("BEST_SCORE");
  if (bestScore !== null) {
    if (score > parseInt(bestScore)) {
      localStorage.setItem("BEST_SCORE", score);
    }
  } else {
    localStorage.setItem("BEST_SCORE", score);
  }
}

function handleReset() {
  choiceIndex = 0;
  choices.sort(() => Math.random() - 0.5);
}

leftHTML.addEventListener("click", () => {
  handleAction(choices[choiceIndex].response === 1);
});

rightHTML.addEventListener("click", () => {
  handleAction(choices[choiceIndex].response === 2);
});

function startGame() {
  isGamePlaying = true;
  overlayHTML.classList.add("hide");
  countdownHTML.classList.add("hide");
  questionHTML.classList.remove("hide");
  setUpChoice();
}

function setUpChoice() {
  questionHTML.innerHTML = choices[choiceIndex].question;
}

// COUNTDOWN
let time = countersHTML.length - 1;

let countdown;

function update() {
  countersHTML[time - 1].classList.add("active");
  countersHTML[time].classList.remove("active");
  countersHTML[time].classList.add("activated");

  time--;

  if (time === 0) {
    clearInterval(countdown);
    startGame();
  }
}

playButtonHTML.addEventListener("click", () => {
  playButtonHTML.classList.add("hide");
  countdownHTML.classList.remove("hide");
  countersHTML[countersHTML.length - 1].classList.add("active");
  countdown = setInterval(update, 1000);
});

replayButtonHTML.addEventListener("click", () => {
  score = 0;
  displayScore();
  looseHTML.classList.add("hide");
  countdownHTML.classList.remove("hide");
  for (let i = 0; i < countersHTML.length; i++) {
    countersHTML[i].classList.remove("activated");
    countersHTML[i].classList.remove("active");
  }
  countersHTML[countersHTML.length - 1].classList.add("active");
  time = countersHTML.length - 1;

  countdown = setInterval(update, 1000);
});
