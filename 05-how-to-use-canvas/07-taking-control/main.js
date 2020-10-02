var c = document.getElementById("my-canvas");
var ctx = c.getContext("2d");

let loadImage = (src, animation, frameNumber) => {
  return new Promise((resolve) => {
    let img = new Image();
    img.onload = () => resolve([img, animation, frameNumber]);
    img.src = src;
  });
};

let imagePath = (frameNumber, animation) => {
  return "/images/" + animation + "/" + frameNumber + ".png";
};

let frames = {
  idle: [1, 2, 3, 4, 5, 6, 7, 8],
  kick: [1, 2, 3, 4, 5, 6, 7],
  punch: [1, 2, 3, 4, 5, 6, 7],
};

let loadImages = () => {
  let promises = ["idle", "kick", "punch"]
    .map((animation) => {
      let animationFrames = frames[animation];

      return animationFrames.map((frameNumber) => {
        let path = imagePath(frameNumber, animation);
        return loadImage(path, animation, frameNumber);
      });
    })
    .flat();

  return Promise.all(promises).then((loadedImages) => {
    let organizedImages = { kick: [], punch: [], idle: [] };

    loadedImages.forEach((loadedImage) => {
      let image = loadedImage[0];
      let animation = loadedImage[1];
      let frameNumber = loadedImage[2];

      organizedImages[animation][frameNumber - 1] = image;
    });

    return Promise.resolve(organizedImages);
  });
};

let animate = (ctx, images, animation) => {
  return new Promise((resolve) => {
    images[animation].forEach((image, index) => {
      setTimeout(() => {
        ctx.clearRect(0, 0, 500, 500);
        ctx.drawImage(image, 0, 0, 500, 500);
      }, index * 100);
    });

    setTimeout(resolve, images[animation].length * 100);
  });
};

loadImages().then((images) => {
  let queuedAnimations = [];

  let aux = () => {
    let selectedAnimation;

    if (queuedAnimations.length === 0) {
      selectedAnimation = "idle";
    } else {
      selectedAnimation = queuedAnimations.shift();
    }

    animate(ctx, images, selectedAnimation).then(aux);
  };

  aux();

  document.getElementById("kick").onclick = () => {
    queuedAnimations.push("kick");
  };

  document.getElementById("punch").onclick = () => {
    queuedAnimations.push("punch");
  };

  document.addEventListener("keyup", (event) => {
    const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"

    if (key === "ArrowLeft") {
      queuedAnimations.push("kick");
    } else if (key === "ArrowRight") {
      queuedAnimations.push("punch");
    }
  });
});
