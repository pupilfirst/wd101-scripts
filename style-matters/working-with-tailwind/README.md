In the last lesson we added the Tailwind CSS library and made some changes to how the heading at the top looks.

Let me quickly make some more improvements:

```html
<h2 class="font-bold text-xl my-2">A story about the time when I visited a backwaters.</h2>

<img class="float-left max-w-auto md:max-w-lg md:mr-4" src="backwaters.jpg" alt="A scenic backwater image" />

<p class="p-2">
```

All right. I think that looks better.

The reason I'm able to write these classes quickly is because I already what classes Tailwind makes available.

If you didn't know beforehand, how would you find out?

Now something that's still wrong with this page is that the content goes all the way to the edges, and it doesn't look right at different browser widths.

_ACTION: Resize the browser and show effect._

If we look at a well-designed website like `reddit.com`, we can see how it changes its layout based on the width of the page.

_ACTION: Resize the browser on reddit.com and show effect._

We can get started with doing something similar with Tailwind very easily.

One of the best things about using a library like Tailwind is the excellent documentation that it has that shows you exactly what all of its classes do.

_ACTION: View page https://tailwindcss.com/docs_

The feature we're looking for is `container`.

_ACTION: View page https://tailwindcss.com/docs/container_

This documentation tells us that what we should probably do, is wrap the content we want to center in a `div` that has these classes. Let's copy that, and paste it into our code.

I'll also add some margin to the top to distance it from the first heading.

```html
<div class="container mx-auto px-4 mt-4">
  <!-- ... -->
</div>
```

Watch what happens when I change the width of the browser window.

Using a container div like this is one of ways that we can implement responsive styling - this means having a web page look different, or more optimized for different devices that have different screen sizes.ß

In this lesson, we've learned how using a CSS library like Tailwind can quickly let you add styling to a webpage.

Yes, learning all of it's features will take some time, but it's worth learning your way around at least one such library.
