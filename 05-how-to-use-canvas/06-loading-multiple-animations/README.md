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
<button id="kick">Kick (Left Arrow Key)</button>
<button id="punch">Punch (Right Arrow Key)</button>
```

I'll set a unique `id` for each button so that we can locate them from Javascript.

> Switch to browser and refresh.

That looks okay.

When we click the _Kick_ or the _Punch_ buttons, we want those animations to play on-screen.

Let's take a look at our Javascript, and think about how we can do that.

```js
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

    setTimeout(resolve, images.length * 100);
  });
};

loadImages().then((images) => {
  animate(ctx, images);
});
```

Let's scan this file from top to bottom and think about the changes we'll need to make. When we encounter something that we need to change, we'll pause, make the changes and then resume.

The first two lines are fine, no changes required there. The `loadImage` function is also fine - it takes any path to an image, and returns a promise to load it.

The next function, `imagePath` clearly has a problem. The function has a hard-coded directory name. Since this function will need to give the path to an image for the other two animations as well, this `idle` part will need to become an argument. Let's do that.

```js
let imagePath = (frameNumber, animation) => {
  return "/images/" + animation + "/" + frameNumber + ".png";
};
```

That was a simple change. Let's move on.

The next function, `loadImages`, again, has a problem. This function uses the `imagePath` function that we just updated, and it's making the assumption that there's one move, so this function will need to be updated.

Let's think about what this function _needs_ to do us. This function needs to load all the images that are will be required to draw the frames of our animations on the canvas. This means that it'll need to load the frames of all three of the animations that we want to show - `idle`, `kick` and `punch`. This function also makes the assumption that there are _eight_ frames in an animation. But if we look at the folder containing the frames, we can see that both `kick` and `punch` have only seven frames in their animation. How do we handle these differences.

Well first of all, our program needs to store this information in some way to able to make use of it. I think that a simple object that stores the names of the animation, and the number of frames that the animation has. Let's create that first:

```js
let frames = {
  idle: [1, 2, 3, 4, 5, 6, 7, 8],
  kick: [1, 2, 3, 4, 5, 6, 7],
  punch: [1, 2, 3, 4, 5, 6, 7],
};

let loadImages = () => {
```

With that information available in the app, we can use it to let `loadImages` load all 22 frames before we begin playing the animation:

```js
let loadImages = () => {
  let promises = ["idle", "kick", "punch"].map((animation) => {
    let animationFrames = frames[animation];

    return animationFrames.map((frameNumber) => {
      let path = imagePath(frameNumber, animation);
      return loadImage(path);
    });
  });

  return Promise.all(promises);
};
```

This isn't quite right though. Notice how we have two nested `map` functions calls. The inner `map` will return an array of promises to load the images of a particular animation, which means that the outer map will return an array containing three elements - each an array that contains the promises that we actually want.

We know from reading the documentation of `Promise.all` that it accepts a flat list of arrays, and then resolves it only when all of the promises in that array have resolved.

The solution for this particular problem should be obvious - flatten the array. i.e., simply call `flat()` on the return from the outer `map`.

```js
let promises = ["idle", "kick", "punch"]
  .map((animation) => {
    let animationFrames = frames[animation];

    return animationFrames.map((frameNumber) => {
      let path = imagePath(frameNumber, animation);
      return loadImage(path);
    });
  })
  .flat();
```

Technically, this function should now do what it's supposed to do. When it's called, it should return every one of the images after they are loaded and are ready to be drawn on the canvas. So it looks like this function is okay. Let's move onto the next function.

Once again, we need to think about what the `animate` function is supposed to do. In the previous lesson where we had only one animation, all it had to do was draw each frame from the given array of loaded images one after the other. But now that we have three different animations, we definitely need to be able to tell this function _which_ animation to play. So I'm going to start by adding that as an argument for this function:

```js
let animate = (ctx, images, animation) => {
```

Now that we know which animation to play, how do we use it?

It's tricky, because `images` is just a flat array of loaded images. That's the change we made a minute ago. It doesn't actually have any information about which animation a particular loaded image is from. This means that we can't really use this array shape.

What we want is something similar to the `frames` object that we wrote before. If `images` had also been an object of the same shape, but with an array of loaded images instead of the frame numbers, the work here would be much easier.

So let's go back to the `loadImages` function and make it return something that we can actually use. This is the shape of the loaded images object that we'd like to get.

```js
// {idle: [frame1, frame2, ...], kick: [...], punch: [...]}
return Promise.all(promises);
```

That would mean that I'll need to change the resulting array a bit. I'll add a `then` to the promise chain so that I can change the resulting array of loaded images. I'll start by creating the object that I actually want to resolve from the promise to load images - an well-organized set of loaded images.

```js
return Promise.all(promises).then((loadedImages) => {
  let organizedImages = { kick: [], punch: [], idle: [] };
});
```

Then by going over each of the `loadedImages`, I should be able to populate this object. The three things that I'm looking for are the name of the `animation`, the `frameNumber`, and loaded `image` itself. Once I have those three, I can simply add the information to the object, and then return a resolved promise with that object.

```js
return Promise.all(promises).then((loadedImages) => {
  let organizedImages = { kick: [], punch: [], idle: [] };

  loadedImages.forEach((loadedImage) => {
    let image;
    let animation;
    let frameNumber;

    organizedImages[animation][frameNumber - 1] = image;
  });

  return Promise.resolve(organizedImages);
});
```

Once again, we have a small problem. When the promise to load an image resolves, all we have is the `loadedImage` itself - we don't know which `animation` it's from, or which `frameNumber` it has.

That's because this information wasn't required in our earlier lesson. We need to modify the `loadImage` function to return this additional information as well. Let's take another look at `loadImages`.

> When reading the next paragraph, highlight keywords in the `loadImages` function.

When I'm loading each of the images, I know which `animation` I'm loading it for, and I know which `frameNumber` I'm instructing the browser to load. It's just that we aren't passing this information to the `loadImage` function, and it ends up resolving with just the loaded image. Let's pass this info to `loadImage`, and then have it call `resolve` adding that extra info.

```js
// loadImages()
return animationFrames.map((frameNumber) => {
  let path = imagePath(frameNumber, animation);
  return loadImage(path, animation, frameNumber);
});
```

```js
let loadImage = (src, animation, frameNumber) => {
  return new Promise((resolve) => {
    let img = new Image();
    img.onload = () => resolve([img, animation, frameNumber]);
    img.src = src;
  });
};
```

Now that the required information is being passed through, we can fill in the blanks in the `then` that we wrote just a little while ago.

```js
let image = loadedImage[0];
let animation = loadedImage[1];
let frameNumber = loadedImage[2];
```

We can now go back to the `animate` function, and use the info we have to decide which animation to actually _play_.

```js
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
```

That was a lot of work. Let's see if it works. We'll need to make one small change to the last line of the program - we need to now tell the program _which_ animation to play. I'm going to start by saying `idle`.

```js
loadImages().then((images) => {
  animate(ctx, images, "idle");
});
```

> Switch to browser and refresh.

The idle animation still works, let's try the other two animations:

```js
animate(ctx, images, "kick");
```

> Switch to browser and refresh.

```js
animate(ctx, images, "punch");
```

> Switch to browser and refresh.

That works perfectly.

In order to make these animations controllable by the user, all we need to do is to somehow connect them to these buttons and allow the user to take control of what's happening on the canvas.

We'll figure out how to do that in the next lesson.
