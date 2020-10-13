var c = document.getElementById("my-canvas");
var ctx = c.getContext("2d");

let loadImage = (src) => {
  return new Promise((resolve) => {
    let img = document.createElement("img");
    img.onload = () => resolve(img);
    img.src = src;
  });
};

loadImage("/images/idle.png").then((image) => {
  ctx.drawImage(image, 0, 0, 500, 500);
});
