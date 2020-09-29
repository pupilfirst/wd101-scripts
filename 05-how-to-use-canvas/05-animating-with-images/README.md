> **Target Title**: Animating with Images

# Script

In the last lesson, we learned how to load an image file and then place it on the canvas.

In this lesson, we're going to take the first step in creating an animation using a series of such images.

In the folder for this exercise, you'll find an `images` folder that contains another folder called `idle`.

> Open the `images/idle` folder in editor.

Here, you can find a set of numbered image files.

> Scan through a few idle images.

Each of these images is _frame_ in an animation. When you watch a movie, or a play a video game, the smooth motion that appears on screen is just a series of images quickly changing one after the other.

> Play video at this link: https://youtu.be/Un-BdBSOGKY?t=392

In it's most crude form, you can create an animation using nothing but a book with a set of drawings. Flipping through these drawings can create the effect of motion.

We're going to do something very similar to what we just saw, except with image files, and by drawing these images one after the other on our `canvas`.

Let's take a look at where we're at right now.

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

loadImage("/images/idle/1.png").then((image) => {
  ctx.drawImage(image, 0, 0, 500, 500);
});
```

We've loaded a single image and drawn it on-screen. To create an animation, we're going to want to load and draw a series of images - an _array_ of images, one after the other. The main thing that's going to change between these images is the _path_ to the image.

We can already see what a valid path to one of these images looks like. If we change the path to another image, we can see that the image drawn on the browser does change.

```js
loadImage("/images/idle/4.png").then((image) => {
  ctx.drawImage(image, 0, 0, 500, 500);
});
```

> Switch to browser and reload.

All that we changed was the filename. And if we look at the files, we can see that the images are simply numbered in the order that they should be drawn on-screen. In fact, we can write a simple function that, given a _frame number_ returns the path to the image.

```js
let imagePath = (frameNumber) => {
  return "/images/idle/" + frameNumber + ".png";
};

loadImage(imagePath(1)).then((image) => {
```

Let's see if that works.

> Switch to browser and reload

Now that we have a way to change the path of the image that we draw, we need to think about how we're going to draw these images one by one.

The simplest way that occurs to me is to simply call this chunk of code, with a delay. However, I can immediately see a problem with that. Here, we're loading an image and then drawing it. This means that once one image is loaded an drawn, we'll need to wait until the next image is loaded before it can be drawn.

If we're loading these images over the internet, that will make it difficult to make the interval, or delay between drawing each image a constant value.

This is not to mention the fact that it would be wasteful - if we let the animation loop - that is to say, play infinitely by playing again once it is over, it would load all of the images again.

I think it's pretty clear that what we need to do is to load all the images _before_ we begin the animation. Let's create a function for that:

```js
let loadImages = () => {
  // Returns an array of loaded images.
};
```

We know that there are 8 images that we need to load.

There's a couple of ways we could do this.

First, we could try loading each image one by one.

```js
let loadImages = () => {
  // Returns an array of loaded images.
  let first = loadImage(imagePath(1));
  let second = loadImage(imagePath(2);
};
```

...and so on, but I can immediately see that that's just a lot of repetition. In fact, we can use a function that we learned about earlier - the `map` function.

Let's start by creating an array that contains the part of the filename that changes:

```js
let loadImages = () => {
  // Returns an array of loaded images.
  [1, 2, 3, 4, 5, 6, 7, 8];
};
```

I'm going to map over these numbers, and then call the `loadImage` function that we wrote earlier.

```js
let loadImages = () => {
  // Returns an array of loaded images.
  let something = [1, 2, 3, 4, 5, 6, 7, 8].map((frameNumber) => {
    let path = imagePath(frameNumber);
    return loadImage(path);
  });
};
```

What is this function returning? What is this `something`? We know that the `map` function takes each element of the array, and then passes that into the inner function. The return value from the inner function is then added to an array, and that's what get set on the `something` variable.

We also know that `loadImage` actually returns a promise. This means that something is actually an array of `promises`.

```js
let promises = [1, 2, 3, 4, 5, 6, 7, 8].map((frameNumber) => {
```

Now, remember that these promises are just that. Promises. They haven't actually been loaded _yet_. However, we only want to start an animation after all of these images have loaded. Another way to say that is that we want to wait until all of these promises have resolved. But what we have is an array of promises. How do we wait for all of them to resolve?

Let's do a quick search.

> Google for `how to resolve many promises`.

Remember how I told you in the last lesson that we'll see _why_ we converted the `onload` callback to a promise? _This_ is why. Let's check out what the `Promise.all` function does.

> Click on _Promise.all() - JavaScript | MDN_

> Read from page: _The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved_.

This is exactly what we're looking for. `Promise.all()` takes an array of promises and returns a single promise that resolves only after all of the promises in the array have resolved. When this single promise resolves, it gives an array of values, one for each of promises that it was waiting on.

Let's try using that in our `loadImages` function.

```js
let loadImages = () => {
  // Return an array of loaded images.
  let promises = [1, 2, 3, 4, 5, 6, 7, 8].map((frameNumber) => {
    let path = imagePath(frameNumber);
    return loadImage(path);
  });

  return Promise.all(promises);
};
```

Let's test if this is working. Let's try to load all images, and then draw the first image after they've all finished loading.

```js
loadImages().then((images) => {
  ctx.drawImage(images[0], 0, 0, 500, 500);
});
```

Let's try picking another loaded image from the array.

```js
loadImages().then((images) => {
  ctx.drawImage(images[3], 0, 0, 500, 500);
});
```

Yup. That works as expected. At this point, all images have been loaded, and are ready to be drawn on the canvas.

Now that we have a list of loaded image files, we can start thinking about how we're going to draw these images one by one, with delay between each. I'm going to imagine that we have an `animate` function that lets us do that:

```js
let animate = () => {};
```

What does this animate function need? Well, to draw anything, it's going to need to context for the canvas. We always call functions that are properties of the context object to actually draw anything on the canvas.

```js
let animate = (ctx) => {};
```

Next, we need the loaded images themselves.

```js
let animate = (ctx, images) => {};
```

One thing we know about an animation is that once an animation has started, it'll take some time to complete it. Let's assume that we're going to wait 100 milliseconds between drawing each image on the canvas. For an animation with 8 frames, we know that it'll finish only after 800 milliseconds.

Let's take this fact into account and have this function return a `Promise`.

```js
let animate = (ctx, images) => {
  return new Promise((resolve) => {});
};
```

We'll set it up so that the `animate` function will return a promise that resolves _after_ the animation is complete. In fact, we can do that first:

```js
let animate = (ctx, images) => {
  return new Promise((resolve) => {
    setTimeout(resolve, images.length * 100);
  });
};
```

If there are 8 frames, the returned promise will resolve in 800 milliseconds. What's the function doing during those 800 milliseconds though? We've got to draw those images one by one, of course. Let's do that, again, using the `setTimeout` function.

```js
return new Promise((resolve) => {
  images.forEach((image, index) => {
    setTimeout(() => {
      ctx.drawImage(image, 0, 0, 500, 500);
    }, index * 100);
  });

  setTimeout(() => resolve(), images[move].length * 100);
});
```

For the first image, index is going to be zero, so it'll draw immediately. The second image will have a timeout of 100ms, the third 200, and so on, until the last, which has a delay of 700ms. A hundred milliseconds after that, the promise itself will resolve, and the animation would have ended.

That's actually it. Let's see if it works, by using it.

> Switch to browser and refresh.

It works! BUT, we're got a small problem that we didn't anticipate. You see when we're drawing each image, one by one, it's drawing the next image _on top_ of the one that came before.

The solution to this problem should be obvious. Clear the canvas before drawing the next image. But we don't know how to do that, so we're going to search for an answer:

> Google `how to clear html canvas`

The first search result looks good.

> Click _HTML canvas clearRect() Method - W3Schools_.

The `clearRect` function seems to take four arguments [SCROLL DOWN] - the X & Y co-ordinates of the upper-left corner, and then the width and height of the rectangular area to clear. Let's use the `clearRect` function before drawing a new image on the canvas.

```js
ctx.clearRect(0, 0, 500, 500);
ctx.drawImage(image, 0, 0, 500, 500);
```

Let's check that animation again.

> Switch to browser and refresh.

Yes that works as expected. We've got a fully functioning animation.

We'll continue working on this in the next lesson.
