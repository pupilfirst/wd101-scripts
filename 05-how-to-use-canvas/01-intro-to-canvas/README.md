> **Concept being taught:** Use the right tool for the job.
> **Target title:** Beyond the DOM.

# Script

So far in this course, every time you've written some line of code, to make something appear in the browser window, you have been using an interface known as the Document, Object, Model - abbrieviated to D.O.M, and usually just called the _DOM_.

```html
<html>
  <head>
    <script type="text/javascript" src="/main.js"></script>
  </head>

  <body>
    <p>Hello World</p>
  </body>
</html>
```

However, the DOM isn't the only way available to you, as a developer, to get the browser to show things on-screen. With the DOM, you're describing what the user sees by writing a collection of tags, and then styling it:

```html
<body>
  <p>Hello World</p>
  <p style="color: red">A second line</p>
</body>
```

It's basically a description of what the browser should show the user.

The `<canvas>` element works a bit differently. It's also a tag, and just like any other tag, you start by placing the `<canvas>` tag in your HTML file.

```html
<body>
  <canvas></canvas>
</body>
```

This is where the differences start. Just like a physical canvas that you would use to draw on, a canvas also has a width a height. We need to specify that so that the browser knows what it's dimension are.

```html
<canvas width="500" height="500"></canvas>
```

Now if had a physical canvas, and I told you to draw a line on it with a pen, what you would probably do is pick up the pen, place it at a starting point on the canvas, and then draw a line to some end-point. Drawing within the canvas works just like that - drawing is a series of steps, and we need to use Javascript to execute those steps.

Let's try and draw a line on the canvas.

But the first question is - how do you draw a line on canvas? Well, let's try to find out.

> Google: canvas draw line

Usually, if what you searched for is a common question, and your search phrase is simple, then you're going to find a good answer for your question in the first couple of results.

Here, the first result is a good one. Let's take a look.

This page tells us exactly what we need to do to draw a line. Let's copy that into our Javascript file, and take a closer look at it.

```js
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(300, 150);
ctx.stroke();
```

You can kind of see that it's breaking down all of the steps to actually drawing a line.

1. The first step is to get the canvas element on which were's going to draw a line.
2. On the second line, we're getting what's call the _context_ of the canvas. This is a part of how canvas works - we'll be interacting with the context to actually execute commands on the canvas.
3. On the third line, we're instructing the context to begin a path.
4. Then we moving to the starting point on the canvas.
5. Then we tell context to draw a line to a different point on the canvas.
6. Finally we tell context to _stroke_ the path that we created.

Now, if this seems a _bit_ more complicated than it _should_ be, that's because these commands actually let you do more than just draw a line - that's where the `beginPath()` and `stroke()` commands come in - but let's ignore that for the moment, and see if this actually works, on our browser.

So if I switch to the browser, and...

> Shift-refresh on browser.

...refresh the page, nothing happens.

Let's check the Javascript console to see if there's any error.

And yes, we do have an error: it says: _Cannot read property 'getContext' of null_. And beneath that, there's actually a link to our JS file's line where the error actually occured. Let's click that!

> Click on main.js

Notice how the browser has drawn a red squiggly line at the location where the error occured. Now the error says that it couldn't read the property `getContext` of _null_. From this, I can understand that `c`, is for some reason `null`. Now we got `c` by calling the `getElementById` function on the HTML document.

This gives us a clue. It's clearly trying to find an element using it's ID, and it's expecting the `id` to be `myCanvas`. But we didn't specify any `id` in our HTML document. Let's try doing that.

> Switch to editor.

I'll set the `id` for our `<canvas>` tag as `my-canvas`.

```html
<canvas id="my-canvas" width="500" height="500"></canvas>
```

Now I'll update the `id` used in the Javascript file as well.

```js
var c = document.getElementById("my-canvas");
```

Now when we reload the page in our browser.

We've got a line!

However, let's face it, a line is not that impressive. Let's try and do something a bit more complicated before we end this lesson. Let's draw a human stick figure!

Now, when I draw a stick figure, I usually start with a circle for the head, then I draw a line for the body, then two lines for each arm, and two lines for each leg.

While we know how to draw lines, we don't know how to draw a circle! Let's try and find out how to do that.

Let's google _canvas draw circle_.

Just like last time, the first result should be fine for us.

We can see that this is pretty similar to how we draw a line. Except the main part of the work is done using the `arc` function. It looks like it's got a lot of arguments though - we need to find out what those are.

If we scroll down on a page a bit, we can see that there's an explanation for those arguments.

- The first two are the X & Y co-ordinates of the center of the circle.
- The third is radius of the circle.
- The fourth & fifth are actually the starting angle and ending angle. Remember - we're actually using the `arc` function - so we can use this to draw a part of the circle. Now the documentation says that the value is actually measured in radians, which means that the starting angle for a circle would be 0, and the ending angle would be TWO-PI.

Let's actually copy that command into our Javascript file, and change it a bit.

```js
ctx.arc(250, 100, 50, 0, 2 * Math.PI);
```

I'm actually going to set the center of the circle to 250 by 100. So the center will be 250 pixels from the left of the screen (it'll be centered), and 100 pixels from the top of the screen. I'll leave the radius at 50 pixels, the starting angle at 0, and ending angle at 2 times PI, because I want a full circle.

Now, I know that when we drew the line we needed to call the `stroke` function to actually draw those pixels, so I'm going to add that as well:

```js
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.stroke();
```

Let's see what happens on the browser.

> Switch to browser and refresh.

We have a circle, but it looks like we have a line connecting our first line to the beginning of the circle.

If we look at our code, we can sort of understand why that might be happening.

You see, when we began drawing this image, we instructed context to _begin_ a path. We never told it to stop drawing a path.

> Switch to the browser.

So we can see that what it did was it continued drawing along the path that our imaginary pen followed. It first drew the line, then it moved to the starting point of the circle, drew the circle and then stopped.

> Switch to editor.

We can make an educated guess about how to avoid this, though. Let's just try creating another path:

```js
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.stroke();
```

And yes, that works.

With what we know now, drawing a stick figure it just a matter of knowing the starting points and ending points of the line. For example, let's modify the first line so that it forms the body of the stick figure:

```js
ctx.beginPath();
ctx.moveTo(250, 150);
ctx.lineTo(250, 350);
ctx.stroke();
```

If the circle were the head, then we begin from the chin of the person, and drawn a line straight down.

> Switch to browser and refresh.

That looks good. Now let's draw four lines for the arms and legs. I'm just going to copy and paste this in - just to save time.

```js
// Right Arm
ctx.beginPath();
ctx.moveTo(250, 200);
ctx.lineTo(150, 150);
ctx.stroke();

// Left Arm
ctx.beginPath();
ctx.moveTo(250, 200);
ctx.lineTo(350, 150);
ctx.stroke();

// Right Leg
ctx.beginPath();
ctx.moveTo(250, 350);
ctx.lineTo(225, 450);
ctx.stroke();

// Left leg
ctx.beginPath();
ctx.moveTo(250, 350);
ctx.lineTo(275, 450);
ctx.stroke();
```

> Switch to browser and refresh.

Aaand we have our stick figure. Go ahead and play around with the `<canvas>` element - you can do a lot more than just draw circles and lines - think of a shape you want to draw and try searching for `canvas draw SHAPE` and try reading the documentation and following the instructions.

Have fun! See you in the next lesson!
