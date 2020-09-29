> **Target title:** Promises vs Callbacks

# Script

Before we start working on the animation system, there's one more thing I want to do here. There's an experiment that I want to run.

The question I have is do we really need to set the `onload` callback for the image element? Will this work if we simply set the source for the image, and then tell context to draw the image. Let's try that out:

```js
let img = new Image();
img.src = "/images/idle.png";
ctx.drawImage(img, 0, 0, 500, 500);
```

> Switch to browser and refresh.

Not suprisingly, nothing shows up on screen. So it appears that we're only allowed to draw an image onto a canvas after it is fully loaded.

```js
let img = new Image();

img.onload = function () {
  ctx.drawImage(img, 0, 0, 500, 500);
};

img.src = "/images/idle.png";
```

Now using the `onload` callback is a fairly good way to get this working. But I think that there's a better way to _write_ what's going on here. Notice how the last action that actually takes place - the `drawImage` function call - is written _before_ the final line.

We're writing it in this order because we want to specify what should happen _after_ the image is loaded, and then actually trigger the loading the image by specifying its `src`.

There is a way that we can move these lines around so that they're in a more sensible order though, and that's by using _promises_.

Now you've seen promises before in this course, so what we're going to do is to convert this `onload` call into a promise that _eventually_ resolves, so that we can write something like `loadImage` and `then` `drawImage`.

```js
loadImage(src).then((image) => {
  ctx.drawImage(image, 0, 0, 500, 500);
});
```

First, let's write the `loadImage` function:

```js
let loadImage = (src) => {};

let img = new Image();
```

We know that the loadImage function is supposed to return a promise, so let's create a new `Promise`.

```js
let loadImage = (src) => {
  return new Promise((resolve) => {});
};
```

Now what is this promise supposed to do? Well, it's supposed [HIGHLIGHT LINES BELOW FUNCTION DEFINITION] to create a `new Image()`, set the `onload` property, and then finally set the `src` property. Let's copy and paste those lines in.

```js
let loadImage = (src) => {
  return new Promise((resolve) => {
    let img = new Image();

    img.onload = function () {
      ctx.drawImage(img, 0, 0, 500, 500);
    };

    img.src = "/images/idle.png";
  });
};
```

What happens after an image is loaded is something that's happens once a promise resolves, so let's remove the `drawImage` function call, and instead, call the `resolve()` function there.

Let's also set the `src` property to the `src` that we receive as an argument in this function.

```js
img.onload = () => resolve(img);
img.src = src;
```

That should actually be it. Let's try using the promise to load and display the image.

> Switch to browser and reload.

That still works! Now the code might not look terribly different from when we were directly setting the `onload` callback function. In fact, it's a bit longer than before. _But_, we are using promises, and that grants us a few advantages - we'll see one of those in action in the next lesson.
