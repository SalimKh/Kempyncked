const countersHTML = document.querySelectorAll(".countdown__number");
const playButtonHTML = document.getElementById("play");
const replayButtonHTML = document.getElementById("replay");
const overlayHTML = document.getElementById("overlay");
const countdownHTML = document.getElementById("countdown");
const looseHTML = document.getElementById("loose");

const rightHTML = document.getElementById("right");
const leftHTML = document.getElementById("left");
const questionHTML = document.getElementById("question");
const scoreTextHTML = document.getElementById("scoreText");

const choices = [
  {
    question: "La piscine",
    response: 1,
    score: 2,
  },
  {
    question: "gwada",
    response: 2,
    score: 1,
  },
  {
    question: "basketball",
    response: 1,
    score: 2,
  },
  {
    question: "rugby",
    response: 2,
    score: 1,
  },
  {
    question: "ronan",
    response: 1,
    score: 2,
  },
  {
    question: "twitter",
    response: 2,
    score: 1,
  },
  {
    question: "janna",
    response: 1,
    score: 1,
  },
  {
    question: "macron",
    response: 2,
    score: 2,
  },
  {
    question: "les furys",
    response: 1,
    score: 1,
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
  },
  {
    question: "Le véganisme",
    response: 1,
    score: 1,
  },
  {
    question: "TikTok",
    response: 1,
    score: 2,
  },
  {
    question: "Les vieux",
    response: 2,
    score: 2,
  },
  {
    question: "Le Rap",
    response: 1,
    score: 1,
  },
  {
    question: "Le saucisson",
    response: 2,
    score: 1,
  },
  {
    question: "Les super-héros",
    response: 2,
    score: 1,
  },
  {
    question: "Les cryptomonnaies",
    response: 2,
    score: 1,
  },
  {
    question: "La KPOP",
    response: 1,
    score: 2,
  },
  {
    question: "Le Veganisme",
    response: 1,
    score: 1,
  },
  {
    question: "Le cirque",
    response: 2,
    score: 1,
  },
  {
    question: "La Toplane",
    response: 2,
    score: 2,
  },
  {
    question: "La zoologie",
    response: 1,
    score: 1,
  },
  {
    question: "La vodka",
    response: 1,
    score: 1,
  },
  {
    question: "Les Enseignants",
    response: 1,
    score: 1,
  },
  {
    question: "L'équitation",
    response: 2,
    score: 2,
  },
  {
    question: "Le champagne",
    response: 2,
    score: 2,
  },
  {
    question: "Les comédies musicales",
    response: 1,
    score: 2,
  },
  {
    question: "La guitare",
    response: 1,
    score: 2,
  },
  {
    question: "Le leg day",
    response: 2,
    score: 2,
  },
  {
    question: "Le golf",
    response: 2,
    score: 2,
  },
  {
    question: "La sorcellerie",
    response: 2,
    score: 2,
  },
  {
    question: "Les tatouages",
    response: 1,
    score: 1,
  },
  {
    question: "Le football",
    response: 1,
    score: 1,
  },
  {
    question: "JDG",
    response: 2,
    score: 1,
  },
  {
    question: "Le gluten",
    response: 2,
    score: 1,
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
  overlayHTML.classList.remove("hide");
  looseHTML.classList.remove("hide");
  questionHTML.classList.add("hide");
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
