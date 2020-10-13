var c = document.getElementById("my-canvas");
var ctx = c.getContext("2d");

let loadImage = (src, callback) => {
  let img = document.createElement("img");
  img.onload = () => callback(img);
  img.src = src;
};

loadImage("/images/idle.png", (img) => ctx.drawImage(img, 0, 0, 500, 500));
