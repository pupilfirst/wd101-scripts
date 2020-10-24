var c = document.getElementById("my-canvas");
var ctx = c.getContext("2d");

let loadImage = (src, callback) => {
  let img = document.createElement("img");
  img.onload = () => callback(img);
  img.src = src;
};

let imagePath = (frameNumber) => {
  return "/images/idle/" + frameNumber + ".png";
};

let loadImages = (callback) => {
  let images = [];
  let imagesToLoad = 8;

  [1, 2, 3, 4, 5, 6, 7, 8].forEach((frameNumber) => {
    let path = imagePath(frameNumber);

    loadImage(path, (image) => {
      images[frameNumber - 1] = image;
      imagesToLoad = imagesToLoad - 1;

      if (imagesToLoad === 0) {
        callback(images);
      }
    });
  });
};

let animate = (ctx, images, callback) => {
  images.forEach((image, index) => {
    setTimeout(() => {
      ctx.clearRect(0, 0, 500, 500);
      ctx.drawImage(image, 0, 0, 500, 500);
    }, index * 100);
  });

  setTimeout(callback, images.length * 100);
};

loadImages((images) => {
  animate(ctx, images, () => console.log("Done!"));
});
