var c = document.getElementById("my-canvas");
var ctx = c.getContext("2d");

let img = new Image();

img.onload = function () {
  ctx.drawImage(img, 0, 0, 500, 500);
};

img.src = "/images/idle.png";
