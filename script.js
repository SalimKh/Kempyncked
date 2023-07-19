var get = document.querySelector.bind(document),
  on = document.addEventListener.bind(document),
  eventCompteur = 0,
  k;

function init() {
  k = get(".k");
  var audio = new Audio("marcel.mp3");

  k.onclick = function (event) {
    if (eventCompteur == 0) {
      eventCompteur++;
      audio.play();

      k.animate(
        [
          // keyframes
          { transform: "scale(0.6, 0.6)" },
          { transform: "rotate(-0.25turn)" },
          { transform: "scale(0.2, 0.2)" },
          { transform: "rotate(-0.25turn)" },
          { transform: "scale(0.6, 0.6)" },
          { transform: "rotate(-0.25turn)" },
          { transform: "scale(1, 1)" },
          { transform: "rotate(-0.25turn)" },
          { transform: "scale(1.4, 1.4)" },
          { transform: "rotate(-0.25turn)" },
          { transform: "scale(1.8, 1.8)" },
          { transform: "rotate(-0.25turn)" },
        ],
        {
          // timing options
          duration: 900,
          iterations: 10,
        }
      );
    }
  };

  audio.addEventListener("ended", (event) => {
    eventCompteur = 0;
  });
}

on("DOMContentLoaded", init);
