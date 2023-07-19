window.addEventListener("load", () => {
  const kempynck = document.getElementById("kempynck");
  var eventCompteur = 0,
    isAnimationOn = false;
  const audio = document.getElementById("audio");
  const contentDiv = document.getElementsByClassName("content")[0];

  //FUNCTION
  function clickCamtar(event) {
    if (!isAnimationOn) {
      camtar = event.target;
      isAnimationOn = true;
      camtar.animate(
        [
          // keyframes
          { transform: "translateX(-60vh)" },
        ],
        {
          duration: 1000,
          iterations: 1,
        }
      );
      setTimeout(() => {
        camtar.remove();
        kempynck.setAttribute("src", "camtarK.png");
        isAnimationOn = false;
      }, 1000);
    }
  }

  function spawnCamtar() {
    const camtar = document.createElement("img");
    camtar.setAttribute("src", "camtar.png");
    camtar.setAttribute("draggable", "false");
    camtar.setAttribute(
      "style",
      "transform: scale(0.5, 0.5);position:absolute;top:0px;right:0px;z-index: 1;"
    );
    contentDiv.appendChild(camtar);
    camtar.addEventListener("click", clickCamtar);
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
    }
  });

  audio.addEventListener("ended", (event) => {
    isAnimationOn = false;
    if (eventCompteur == 1) {
      spawnCamtar();
    }
  });
});
