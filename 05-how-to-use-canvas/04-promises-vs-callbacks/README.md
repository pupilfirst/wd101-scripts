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

Now using the `onload` callback is a fairly good way to get this working. But I think that there's a better way to _write_ what's going on here. Notice how the last action that actually takes place is written before
