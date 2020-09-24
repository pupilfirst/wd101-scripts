> **Target title:** Dynamic drawings

# Dynamic Drawings

> Author's Note: Talk about how things drawn on a canvas need not be static, and how things drawn on a canvas can _change_.
>
> Use the image drawn on the last lesson and convert some of its properties into variables. Set up a function call that _customizes_ the image with supplied properties.
>
> For example, on the stick figure, create an array of "people" objects that describes their height, and maybe the hair-style (bald, long, spiky, cap-wearing, etc.), and iterate over that to draw a group of people.
>
> Or, on the ringed planet, allow control over the number of stars, the radius of the planet, the rings, and number of rings, etc.

```html
<canvas id="my-canvas" width="500" height="500"></canvas>

<script type="text/javascript" src="/main.js"></script>
```

In the last lesson, we used the `<canvas>` element to draw a stick figure.

One thing we didn't talk about was... _why_ should use using a `<canvas>` for drawing in the first place?
Let's think about that for a bit.

If you simply wanted put an image on a webpage, you can draw it on a tool like Paint, or Photoshop, save it as an image file, and add it to your webpage using the `<img>` tag.

```html
<img src="my-image.png" />

<script type="text/javascript" src="/main.js"></script>
```

...and that would be that. Drawing a stick figure in Photoshop is always going to be easier than writing the Javascript required to build that stick figure from scratch using commands. And once you're done drawing, there's very little additional work required to actually put it on the web-page. It's just one line of HTML.

Let's take a look at that `<canvas>` for a second.

```html
<canvas id="my-canvas" width="500" height="500"></canvas>

<script type="text/javascript" src="/main.js"></script>
```

More specifically, let's look at the _code_ that creates our image.

```js
var c = document.getElementById("my-canvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.arc(250, 100, 50, 0, 2 * Math.PI);
ctx.stroke();

let drawLine = (startX, startY, endX, endY) => {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
};

drawLine(250, 150, 250, 350); // Main body
drawLine(250, 200, 150, 150); // Right Arm
drawLine(250, 200, 350, 150); // Left Arm
drawLine(250, 350, 225, 450); // Right Leg
drawLine(250, 350, 275, 450); // Left Leg
```

> HIGHLIGHT THE drawLine CALLS

Notice how most of this is just numbers. It's just _data_. What we've done is convert an image into some data-points coupled with some commands to _use_ that data.

> HIGHLIGHT THE ENTIRE SCRIPT

And this program is something that we control. _We_ decide what the image looks like. And we can _change_ this at any time.

Unlike an image that we draw in Photoshop, or Paint, these images are being created by following our command. If we change our commands, we change the output.

We can use this property to our advantage.

Let's actually try and build something that would actually be useful in the real-world.

- Imagine that you're running a website... where users can register.
- When someone registers for the first time, you want their
