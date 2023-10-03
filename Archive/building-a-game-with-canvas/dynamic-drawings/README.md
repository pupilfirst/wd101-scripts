> **Target title:** Dynamic drawings

# Script

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

Let me demonstrate what I mean. Let's build an user _avatar_ generator. What I'm talking about is an app that will generates a random _face_ each time you visit the webpage.

Let's get started.

Since we're going focus on just the face in this lesson, let's delete the body, and make the face a lot bigger on our canvas.

I'll first delete the drawLine calls, and then move the circle over to the center of the canvas and increase its radius.

```javascript
ctx.beginPath();
ctx.arc(250, 250, 150, 0, 2 * Math.PI);
ctx.stroke();
```

> Switch to browser and refresh.

Yeah, that looks right. I've got a nice big empty face.

Before we start drawing _inside_ the face, we have to make some decisions - what are the elements of a face?

Obviously a face has a lot of elements - you've got hair, eyes, ears, nose, mouth, chin, skin color, and a lot more. Let's just focus of three of those things for this lesson.

I'm going to pick eyes, nose, & mouth.

```javascript
// Eyes
// Nose
// Mouth
```

When _you_ work through this lesson, feel free to pick whatever facial elements you like.

All right, let's keep in mind that what we're creating is a random face generator. I'm going to write a function just to remind me of that.

```javascript
let drawRandomFace = () => {};
```

Instead of writing any code in this function right now, let's try and build each of of the elements that we've picked, starting with the eyes. I'll create a `drawEyes` function that takes two arguments - the `radius` of the eye and the `color` of the eye.

```javascript
// Eyes
let drawEyes = (radius, color) => {};
```

Now within this function, I have to draw both eyes. I'm just going to draw a circle for the left eye, and then another for the right eye.

```javascript
// Eyes
let drawEyes = (radius, color) => {
  // Left eye
  // Right eye
};
```

One way I can go about drawing the circles for each eye is to copy the code from where we drew the face [HIGHLIGHT FACE JS], or knowing that I'll need to re-use this code, I can write a `drawCircle` function, just like we wrote `drawLine` [HIGHLIGHT drawLine FUNCTION]. Now, this new function needs to take all the arguments that are required to draw a circle. We know that it's the center co-ordinates of the circle, it's radius, and starting and ending angles.

```javascript
let drawCircle = (centerX, centerY, radius, startAngle, endAngle) => {};
```

I'll just copy-paste the code from where we drew the circle for the face, and then modify it to use the arguments.

```javascript
let drawCircle = (centerX, centerY, radius, startAngle, endAngle) => {
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.stroke();
};
```

Now we can use it to draw the face...

```javascript
let drawCircle = (centerX, centerY, radius, startAngle, endAngle) => {
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.stroke();
};

drawCircle(250, 250, 150, 0, 2 * Math.PI);
```

...and finally we can draw the eyes. To start with, we can draw circles for the eyes. I'll put one circle to the left and one to the right.

```javascript
// Eyes
let drawEyes = (radius, color) => {
  // Left eye
  drawCircle(300, 200, radius, 0, 2 * Math.PI);

  // Right eye
  drawCircle(200, 200, radius, 0, 2 * Math.PI);
};
```

But immediately, we can see a problem. We don't have any way to actually set the color that should go inside the circle. We haven't done that before.

Let's try to find out how that can be done.

I'm going to google for `canvas fill circle with color`

The first result [HTML Canvas fill() Method - W3Schools] looks promising, and if we take a look inside, it seems that this isn't actually talking about circle. It's actually talking about drawing rectangles.

But look at what it's telling us to do. Obviously `rect` is not a function we've used before, but this looks similar to how we the circle's `arc` function. What's different are these two lines:

- There's a line which sets a fillStyle, which seems to be setting the color.
- There's also a `fill` function which seems to apply the color.

Let's actually just copy these two lines into our `drawCircle` function, and then change the color that's written down with a new argument for the function - fill color.

```javascript
let drawCircle = (
  centerX,
  centerY,
  radius,
  startAngle,
  endAngle,
  fillColor
) => {
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.fillStyle = fillColor;
  ctx.fill();
  ctx.stroke();
};
```

Now we do have a way to set the color of the eyes:

```javascript
let drawEyes = (radius, color) => {
  // Left eye
  drawCircle(300, 200, radius, 0, 2 * Math.PI, color);

  // Right eye
  drawCircle(200, 200, radius, 0, 2 * Math.PI, color);
};
```

I also remember that we used this `drawCircle` function in one other location - to draw the face itself, so that call [HIGHLIGHT IT] needs to be updated to add the `fillColor` argument.

Now I don't actually want a `fillColor` for this circle, so I'm going to take a guess, and pass `fillColor` as `transparent`.

```javascript
drawCircle(250, 250, 150, 0, 2 * Math.PI, "transparent");
```

We haven't yet called this `drawEyes` function anywhere, so let's call the function as well.

```javascript
drawEyes(15, "brown");
```

Let's see whether that works.

> Switch to browser and refresh.

Yup. We've got eyes.

Just like we did the nose, I'm going to add a `drawNose` function. In the interest of saving time, I'm simply going to paste in code that I've created before:

```js
let drawNose = (type) => {
  // Nose type is either "crooked", or "button".
  if (type === "crooked") {
    drawLine(250, 225, 200, 275);
    drawLine(200, 275, 250, 275);
  } else {
    drawCircle(250, 250, 20, 0, Math.PI, "transparent");
    drawLine(230, 250, 250, 225);
    drawLine(270, 250, 250, 225);
  }
};
```

I haven't done anything _new_ here, but you can see that I've decided that nose has a type, and it's either _crooked_ or _button_. If it's crooked, I'll draw it with two lines, and if it's button, I'm drawing a semi-cricle with two lines on top of it. Let's take a look at how that works.

```js
drawNose("button");
```

And if I switch to `"crooked"`, we've got another kind of nose.

```js
drawNose("crooked");
```

Finally, we can write the `drawMouth` function. Just like with the nose, I'm going to paste this in to save time:

```js
// Mouth
let drawMouth = (expression) => {
  // Expression is either an 'surprise', 'happy' & 'flat'.
  if (expression === "surprise") {
    drawCircle(250, 325, 40, 0, 2 * Math.PI, "transparent");
  } else if (expression === "happy") {
    drawCircle(250, 300, 40, 0, Math.PI, "transparent");
  } else {
    drawLine(200, 325, 300, 325);
  }
};
```

Similar to the nose, I've created _three_ different expressions - suprise, happy, and flat. Surprise is a full circle, happy is semi-circle, and flat is just a line. Let's see how that works by calling it:

```js
drawMouth("happy");
```

First `"happy"`, then `"surprise"`, and then `"flat"`. OK. Those work.

Now that we've written the code to generate a face, we still have an empty `drawRandomFace` function that we haven't written. However, this bit is actually going to be easy. Let's just move in these three function calls into the `drawRandomFace` function, and then call the function itself.

```js
let drawRandomFace = () => {
  drawEyes(15, "brown");
  drawNose("crooked");
  drawMouth("flat");
};

drawRandomFace();
```

What's left to do is to set random values for these function calls.

Let's start with the radius of the eye. I'm going to say that I need a random number between 1 and 20px for the radius of the eye. Let's find out how to generate a random number. Let's google `js random number`.

The first result looks good.

And yes, it tells us that there's a `Math.random()` function. However, it also says that this function always returns a number between 0 & 1. Let's quickly try that out in the console.

```js
Math.random();
```

So it appears to be giving us floating point numbers between 0 & 1. What we want is a integer random number between 1 and 20.

Thankfully, this same page tells us exactly what we need to do to get a random integer number. It says we should multiply the random number with the maximum number that we want, and then `floor` it. `floor` is a just a function that rounds a number _down_ to nearest integer.

In fact, if we scroll down on this page, we find a very helpful section that tells us that it's a good idea to create a proper random function, and it even gives us the code for that function. This `getRndInteger` function takes a minimum value, a maximum value, and then returns a random number integer between those two values. This is exactly what we need, so let's copy and paste that into our code.

```js
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

I'll change the way the function is written a bit, so that it matches our syntax for JS:

```js
let getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
```

Now we can use it to set the radius of the eye.

```js
let drawRandomFace = () => {
  let eyeRadius = getRndInteger(1, 20);

  drawEyes(eyeRadius, "brown");
  drawNose("crooked");
  drawMouth("flat");
};
```

What about these string values though?

Let's actually use the same random number generator to pick an eye color for. I'll create an array of valid colors, and then pick a random color from it.

```js
let drawRandomFace = () => {
  let eyeRadius = getRndInteger(1, 20);
  let eyeColor = ["brown", "blue", "green"][getRndInteger(0, 2)];

  drawEyes(eyeRadius, eyeColor);
  drawNose("crooked");
  drawMouth("flat");
};
```

Similar to that, I can pick the nose type and the mouth expression as well.

```js
let drawRandomFace = () => {
  let eyeRadius = getRndInteger(1, 20);
  let eyeColor = ["brown", "blue", "green"][getRndInteger(0, 2)];
  let noseType = ["crooked", "button"][getRndInteger(0, 1)];
  let expression = ["surprise", "happy", "flat"][getRndInteger(0, 2)];

  drawEyes(eyeRadius, eyeColor);
  drawNose(noseType);
  drawMouth(expression);
};
```

That's actually it. Let's see how that works.

> Switch to browser and refresh.

When we refresh the page, we get a new face.

There you go. That's a very simple random avatar generator.

What we've done here right now - that's not easy to do with Photoshop, or Paint. It's not easy to create random artwork like this manually.

What we're doing is using the data that defines what an image is, to build it from scratch.

In fact, let's just google `random avatar generator` and see what other people have built.

> Click first result: Avataaars Generator (getavataaars.com)

Let's try clicking their _Random_ button.

As you can see it's actually very similar to what we've built, except of course, it's a _lot_ more sophisticated. It's got many more options, and it's much more polished. But at a fundamental level, both this web application, and our small webpage are doing exactly the same thing - taking input data and transforming it into something else.

That's it for this lesson. See you in the next one!
