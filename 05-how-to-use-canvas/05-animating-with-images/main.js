var c = document.getElementById("my-canvas");
var ctx = c.getContext("2d");

let loadImage = (src) => {
  return new Promise((resolve) => {
    let img = new Image();
    img.onload = () => resolve(img);
    img.src = src;
  });
};

let imagePath = (frameNumber) => {
  return "/images/idle/" + frameNumber + ".png";
};

let loadImages = () => {
  // Return an array of loaded images.
  let promises = [1, 2, 3, 4, 5, 6, 7, 8].map((frameNumber) => {
    let path = imagePath(frameNumber);
    return loadImage(path);
  });

  return Promise.all(promises);
};

let animate = (ctx, images) => {
  return new Promise((resolve) => {
    images.forEach((image, index) => {
      setTimeout(() => {
        ctx.clearRect(0, 0, 500, 500);
        ctx.drawImage(image, 0, 0, 500, 500);
      }, index * 100);
    });

    setTimeout(() => resolve(), images[move].length * 100);
  });
};

loadImages().then((images) => {
  animate(ctx, images);
});
