let moveFiles = {
  idle: [
    "idle/1.png",
    "idle/2.png",
    "idle/3.png",
    "idle/4.png",
    "idle/5.png",
    "idle/6.png",
    "idle/7.png",
    "idle/8.png",
  ],
  kick: [
    "kick/1.png",
    "kick/2.png",
    "kick/3.png",
    "kick/4.png",
    "kick/5.png",
    "kick/6.png",
    "kick/7.png",
  ],
  punch: [
    "punch/1.png",
    "punch/2.png",
    "punch/3.png",
    "punch/4.png",
    "punch/5.png",
    "punch/6.png",
    "punch/7.png",
  ],
};

let animate = (ctx, images, move) => {
  return new Promise((resolve) => {
    images[move].forEach((image, index) => {
      setTimeout(() => {
        ctx.clearRect(0, 0, 500, 500);
        ctx.drawImage(image, 0, 0, 500, 500);
      }, index * 100);
    });

    setTimeout(() => resolve(), (images[move].length - 1) * 100);
  });
};

/*
 * Given an object containing move names mapped to paths, it returns
 * a promise of an object with all loaded images.
 */
let loadMoves = (moves) => {
  let promises = Object.keys(moves)
    .map((moveName) => {
      return moves[moveName].map((imagePath, index) => {
        return loadImage(moveName, "/images/" + imagePath, index);
      });
    })
    .flat();

  return Promise.all(promises).then((values) => {
    let loadedMoves = { kick: [], punch: [], idle: [] };

    values.forEach((loadedValue) => {
      let [moveName, index, image] = loadedValue;
      loadedMoves[moveName][index] = image;
    });

    return Promise.resolve(loadedMoves);
  });
};

// Given a path, it returns the promise of a loaded image.
let loadImage = (moveName, path, index) => {
  return new Promise((resolve) => {
    let image = new Image();
    image.onload = () => resolve([moveName, index, image]);
    image.src = path;
  });
};

let main = () => {
  let nextMove = "idle";
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  ctx.font = "20px Arial";
  ctx.fillText("Loading images...", 20, 20);

  loadMoves(moveFiles).then((images) => {
    let aux = () => {
      animate(ctx, images, nextMove).then(aux);
    };

    aux();
  });

  document.getElementById("kick").onclick = () => (nextMove = "kick");
  document.getElementById("punch").onclick = () => (nextMove = "punch");
  document.getElementById("idle").onclick = () => (nextMove = "idle");
};

main();

// The following is the starting point for the above program:

// let image = new Image();

// image.onload = () => {
//   ctx.drawImage(image, 0, 0, 500, 500);
// };

// image.src = "/images/idle/1.png";
