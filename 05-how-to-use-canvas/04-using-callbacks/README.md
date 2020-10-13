> **Target title:** Using Callbacks

# Script

Before we start working on the animation system, there's one more thing I want to do here. There's an experiment that I want to run.

The question I have is do we really need to set the `onload` callback for the image element? Will this work if we simply set the source for the image, and then tell context to draw the image. Let's try that out:

```js
let img = document.createElement("img");
img.src = "/images/idle.png";
ctx.drawImage(img, 0, 0, 500, 500);
```

> Switch to browser and refresh.

Not suprisingly, nothing shows up on screen. So it appears that we're only allowed to draw an image onto a canvas after it is fully loaded.

```js
let img = document.createElement("img");

img.onload = function () {
  ctx.drawImage(img, 0, 0, 500, 500);
};

img.src = "/images/idle.png";
```

Now using the `onload` callback is a fairly good way to get this working. But I think that there's a better way to _write_ what's going on here.

Later on in this level, we're going to be loading a lot of images, so it'll be nice if we had a way to load any given image, and then once it has loaded, do _something_ with that loaded image. One way that we can do that is by writing a new function that accepts a callback. Let's call this function `loadImage`.

```js
let loadImage = (src, callback) => {
  // Load an image, then trigger the callback function.
};

let img = document.createElement("img");
```

This function accepts the `src` of an image, and the callback function that it's supposed to call once an image is loaded. We can actually copy and paste our earlier code, and make a minor change.

```js
let loadImage = (src, callback) => {
  let img = document.createElement("img");
  img.onload = () => callback(img);
  img.src = src;
};
```

I'll set the `src` attribute as the `src` argument that we get.

I'll also set the `onload` attribute for image as a function that calls the `callback` function with the image. That way, whatever callback function is passed to this `loadImage` function will only call it with the image _after_ it has been loaded.

We can now try using this in the code below.

```js
let loadImage = (src, callback) => {
  let img = document.createElement("img");
  img.onload = () => callback(img);
  img.src = src;
};

loadImage("/images/idle.png", (img) => ctx.drawImage(img, 0, 0, 500, 500));
```

That should actually be it. Let's see if our new `loadImage` function works.

> Switch to browser and reload.

That still works! Now the code might not look terribly different from when we were directly setting the `onload` callback function. In fact, it's a bit longer than before. _But_, when we want to load multiple images, this function will come in handy - we'll see how this helps in the next lesson.
