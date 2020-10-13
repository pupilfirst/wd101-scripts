> **Target title:** Loading External Images

# Script

In the last lesson, we saw how we can turn data into images, dynamically while the program is executing.

> Refresh the browser to illustrate the dynamic nature of things.

In this lesson, we're actually going to go in the _opposite_ direction, and we're going to import an image that we've created _outside_, using a regular drawing application, and then saved as a PNG file on our computer.

In the folder for this exercise, you'll find an `images` folder that contains a single image file.

> Open the image in VSCode.

This a drawing of a martial artist who is holding a _ready stance_.

This image is actually a part of series of images that forms an _animation_. We're actually going to build a very small animation system using a series of images of this martial artist to finish this level, and this is the first step.

In this lesson, we're simply going to try to display that image in browser, using our `canvas` element.

> Switch to editor, HTML file.

Now, you might be wondering, if we simply wanted to display an image, why not use an `<img>` tag?

```html
<canvas id="my-canvas" width="500" height="500"></canvas>

<script type="text/javascript" src="/main.js"></script>
```

We can certainly do that, _but_, remember that our eventual objective is to build an animation of this martial artist where this image is just the first _frame_ of that animation.

The `<canvas>` element gives us a lot of control over what is drawn on-screen, and coupled with Javascript, it is really well-suited for building things like animations.

```html
<canvas id="my-canvas" width="500" height="500"></canvas>

<script type="text/javascript" src="/main.js"></script>
```

However, before we get to the animation part, we need to simply display this image in the canvas. Let's try and do that first.

From my Javascript file, I'm going to delete everything except the first few lines where we get the context for our `<canvas>` element.

```js
var c = document.getElementById("my-canvas");
var ctx = c.getContext("2d");
```

Now displaying an image on a `<canvas>` isn't something we've done before. So let's search for how we can do that.

> Google `canvas insert image`.

As usual, the first result looks promising.

> Click on _HTML canvas drawImage() Method - W3Schools_

And yes, it does contain some code that looks useful. We're already familiar with the first two lines of this function - we do this ourselves, but the last two lines are new.

The third line of this function seems to be creating an `img` variable that's getting an element using its ID from the webpage, and the fourth line is a call to the `drawImage` function which accepts the `img` and what appears to be co-ordinates.

And yes, if we scroll down a bit, we can see that the second and third arguments are simply the X & Y co-ordinates at which the image will be placed.

However, we have a small problem here. This line of code is taking an image that is _already_ on-screen, and _then_ placing it on the canvas. What _we_ really want to do is load an image, from our computer, or server, and display it straight onto the `canvas` element.

Let's try changing our search string a bit to see if we can find a better result. Instead of `canvas insert image`, I'm going to search for `canvas load image`. Let's see if that makes a difference.

> On a new tab, search for `canvas load image`.

The fourth result on this page looks good. It says _Load image from URL and draw to HTML5 Canvas_. That is _exactly_ what we want to do, so let's take a look at that tutorial.

> Click on _Load image from url and draw to HTML5 Canvas - Tutorialspoint_

This looks better.

- Instead of picking an `<img>` element is already on-screen, this piece of code starts by creating a brand new `img` element.
- The second part of the code is setting an `onload` property for the new image, and setting it as a function which calls the `drawImage` function on the canvas context. So once the image is loaded, this function will be called, which will draw the image on the canvas.
- Finally, we're setting the `src` for the image - the location from which the image is to be loaded.

This code does appear to have a bug, though. It names the first variable `myImg`, but then proceeds to set the `onload` and `src` attributes on an `img` variable. When copying code that you find from the Internet, always double-check to make sure that it's free from bugs.

Let's copy and paste this into our Javascript file, fix that variable name, update the source and a few other things.

```js
let img = new Image();

img.onload = function () {
  ctx.drawImage(img, 0, 0);
};

img.src = "/images/idle.png";
```

The main change that I've made here is that I've updated the source of the image to point to my `idle.png` file.

You're also probably unfamiliar with the `new` syntax that is being used to create an image. This is a part of Javascript's support for object-oriented programming, which we're not covering in this introductory course.

In fact, there is another way to create a new image. If we search for how to _create an image_...

> Google `javascript create image`.

...the first result...

> Click _HTML DOM Image Object - W3Schools_.

...contains a line of code that shows us another, more familiar way to create an image. Let's use that instead.

```js
let img = document.createElement("img");
```

Let's see if this works.

> Switch to browser and refresh.

The image has showed up, but we seem to have a small problem - the image seems to be larger than our canvas. In fact, we had set the canvas's size 500 pixels wide and high, whereas the image is more than 1000 pixels wide and high.

> On browser, switch to _HTML canvas drawImage() Method - W3Schools_

When going through the documentation for the `drawImage` function, you might have noticed that it takes additional arguments. It says here that it has a second form, where we can pass two more arguments that lets us specify the width and the height of the image. Let's try that.

```js
ctx.drawImage(img, 0, 0, 500, 500);
```

That looks perfect. Let's move onto the next lesson.
