var get = document.querySelector.bind(document),
  on = document.addEventListener.bind(document),
  eventCompteur = 0,
  k;

function init() {
  k = get("#k");
  context = k.getContext("2d");

  k.onclick = function (event) {
    if (eventCompteur == 0) {
      var audio = new Audio("marcel.mp3");
      audio.play();
    }
  };
}

on("DOMContentLoaded", init);
