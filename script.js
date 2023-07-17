var canvas;

function init() {
  canvas = get("canvas");
  context = canvas.getContext("2d");
}

on("DOMContentLoaded", init);
