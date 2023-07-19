window.addEventListener("load", () => {
  const kempynck = document.getElementById("kempynck");
  const secret = document.getElementById("secret");
  const secretCube = document.getElementById("secret-cube");

  var eventCompteur = 0,
    isAnimationOn = false;
  const audio = document.getElementById("audio");

  //FUNCTION
  function spawnCamtar() {
    console.log("camtar");
  }

  //Event Click
  kempynck.addEventListener("click", () => {
    audio.volume = 0.2;
    audio.play();

    if (!isAnimationOn) {
      isAnimationOn = true;
      kempynck.animate(
        [
          // keyframes
          { transform: "scale(0.6, 0.6)" },
          { transform: "rotate(-0.25turn)" },
          { transform: "scale(0.2, 0.2)" },
          { transform: "rotate(-0.5turn)" },
          { transform: "scale(0.6, 0.6)" },
          { transform: "rotate(-0.75turn)" },
          { transform: "scale(1, 1)" },
          { transform: "rotate(-1turn)" },
          { transform: "scale(1.4, 1.4)" },
          { transform: "rotate(-1.25turn)" },
          { transform: "scale(1.8, 1.8)" },
          { transform: "rotate(-1.5turn)" },
        ],
        {
          duration: audio.duration * 100,
          iterations: 10,
        }
      );
      eventCompteur++;
      if (eventCompteur == 1) {
        spawnCamtar();
      }
    }
  });

  secretCube.addEventListener("click", () => {
    secret.classList.remove("hide");
  });

  secret.addEventListener("click", () => {
    secret.classList.add("hide");
  });

  audio.addEventListener("ended", (event) => {
    isAnimationOn = false;
  });
});
