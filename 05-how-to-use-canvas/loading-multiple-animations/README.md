> **Target title**: Loading Multiple Animations

# Script

In the last lesson, we built a method to create an animation from a series of images.

In this lesson, we're going to introduce two more, different, animations, and then allow the user to take control of which animation gets played.

In the folder for this exercise, inside the `images` folder, you'll find two new folders that hold the frames for two more animations. One is an animation of the martial artist executing a `kick`, and the other a `punch`.

> Browse through the images.

To let the user control these animations, we're going to need some kind of element that they can interact with. We'll start by adding two buttons to this page.

Beneath the canvas, I'll add two buttons:

```html
<canvas id="my-canvas" width="500" height="500"></canvas>
<button>Kick (Left Arrow Key)</button>
<button>Punch (Right Arrow Key)</button>
```

I'll set a unique `id` for each button so that we can locate them from Javascript.

```html
<button id="kick">Kick (Left Arrow Key)</button>
<button id="punch">Punch (Right Arrow Key)</button>
```

> Switch to browser and refresh.

That looks okay.

When we click the _Kick_ or the _Punch_ buttons, we want those animations to play on-screen.

Let's take a look at our Javascript, and think about how we can do that.

```js
let c = document.getElementById("my-canvas");
let ctx = c.getContext("2d");

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
  animate(ctx, images, () => {
    console.log("Done!");
  });
});
```

Let's scan this file from top to bottom and think about the changes we'll need to make. When we encounter something that we need to change, we'll pause, make the changes and then resume.

The first two lines are fine, no changes required there. The `loadImage` function is also fine - it takes any path to an image, and trigges the supplied callback function with the loaded image.

The next function, `imagePath` clearly has a problem. The function has a hard-coded directory name. Since this function will need to give the path to an image for the other two animations as well, this `idle` part will need to become an argument. Let's do that.

```js
let imagePath = (frameNumber, animation) => {
  return "/images/" + animation + "/" + frameNumber + ".png";
};
```

That was a simple change. Let's move on.

The next function, `loadImages`, again, has a problem. This function uses the `imagePath` function that we just updated, and it's making the assumption that there's one move, so this function will need to be updated.

Since we now have three different animations, we'll need this function to load the frames of all three of the animations that we want to show - `idle`, `kick` and `punch`. This function also makes the assumption that there are _eight_ frames in an animation. But if we look at the folder containing the frames, we can see that both `kick` and `punch` have only seven frames in their animation. So we need to start by handling this difference.

We need to store this information in some way to be able to make use of it. We can create a simple object called `frames` that contains this information:

```js
let frames = {
  idle: [1, 2, 3, 4, 5, 6, 7, 8],
  kick: [1, 2, 3, 4, 5, 6, 7],
  punch: [1, 2, 3, 4, 5, 6, 7],
};

let loadImages = () => {
```

With that information available in the app, we can use it to update the `loadImages` function to load all 22 frames before we begin playing the animation:

```js
let loadImages = (callback) => {
  let images = { kick: [], punch: [], idle: [] };
  let imagesToLoad = 0;

  ["idle", "kick", "punch"].forEach((animation) => {
    let animationFrames = frames[animation];
    imagesToLoad = imagesToLoad + animationFrames.length;

    animationFrames.forEach((frameNumber) => {
      let path = imagePath(frameNumber, animation);

      loadImage(path, (image) => {
        images[animation][frameNumber - 1] = image;
        imagesToLoad = imagesToLoad - 1;

        if (imagesToLoad === 0) {
          callback(images);
        }
      });
    });
  });
};
```

So it looks like this function is okay. Let's move onto the next one.

In the previous lesson where we had only one animation, all it had to do was draw each frame from the given array of loaded images one after the other. But now that we have three different animations, we definitely need to be able to tell this function _which_ animation to play. So I'm going to start by adding that as an argument for this function:

```js
let animate = (ctx, images, animation, callback) => {
```

Now that this function _knows_ which animation to play, updating it is pretty simple:

```js
let animate = (ctx, images, animation, callback) => {
  images[animation].forEach((image, index) => {
    setTimeout(() => {
      ctx.clearRect(0, 0, 500, 500);
      ctx.drawImage(image, 0, 0, 500, 500);
    }, index * 100);
  });

  setTimeout(callback, images[animation].length * 100);
};
```

We've actually made quite of bit of changes so far, so let's see if it works. We'll need to make one small change to the last bit of this program - we need to now tell the program _which_ animation to play. I'm going to start by saying `idle`.

```js
loadImages((images) => {
  animate(ctx, images, "idle", () => {
    console.log("Done!");
  });
});
```

> Switch to browser and refresh.

The idle animation still works, let's try the other two animations:

```js
animate(ctx, images, "kick", () => {
```

> Switch to browser and refresh.

```js
animate(ctx, images, "punch", () => {
```

> Switch to browser and refresh.

That works perfectly.

In order to make these animations controllable by the user, all we need to do is to somehow connect them to these buttons and allow the user to take control of what's happening on the canvas.

We'll figure out how to do that in the next lesson.
