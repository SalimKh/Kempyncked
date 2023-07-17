var get = document.querySelector.bind(document),
  on = document.addEventListener.bind(document),
  canvas;

function init() {
  canvas = get("canvas");
  context = canvas.getContext("2d");
}

on("DOMContentLoaded", init);
