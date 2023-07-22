window.addEventListener("load", () => {
  const kempynck = document.getElementById("kempynck");
  const secret = document.getElementById("secret");
  const secretCube = document.getElementById("secret-cube");

  var eventCompteur = 0,
    isAnimationOn = false,
    hasTouchScreen = false;
  const audio = document.getElementById("audio");
  const contentDiv = document.getElementsByClassName("content")[0];

  if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
  }

  if (hasTouchScreen) {
    kempynck.setAttribute("class", "kempynckMobile");
  }

  //FUNCTION
  function clickCamtar(event) {
    if (!isAnimationOn) {
      camtar = event.target;
      isAnimationOn = true;
      camtar.setAttribute(
        "style",
        "transform: scale(0.5, 0.5);position:absolute;top:50vh;right:50vh;z-index: 1;transform-origin:top right; transition: all 1000ms ease-in-out;"
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
      "transform: scale(0.5, 0.5);position:absolute;top:0px;right:0px;z-index: 1;transform-origin:top right;"
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

  secretCube.addEventListener("click", () => {
    secret.classList.remove("hide");
  });

  secret.addEventListener("click", () => {
    secret.classList.add("hide");
  });

  audio.addEventListener("ended", (event) => {
    isAnimationOn = false;
    if (eventCompteur == 1) {
      spawnCamtar();
    }
  });
});
