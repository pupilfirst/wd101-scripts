In the previous lesson, we added classes to a CSS file, and used them in the HTML file.

I'd mentioned that this is helpful in avoiding repetition in our code.

Now in most courses that you might have seen before, you would be taught how to write more CSS, what more of these properties do, etc.

That would take a lot of time. Also, there are plenty of resources online that can teach you all about the different CSS properties that exist.

So instead of that, we're going to jump ahead a bit, and show you what a lot of professional developers do these days - which is to use a CSS library that makes styling much simpler.

We're going to include a CSS library called Tailwind in our web page.

_ACTION: Show https://tailwindcss.com_

One of the ways we can include Tailwind's CSS in our page is to simply put a link to a hosted version of CSS into our HTML.

Let's actually start by removing all CSS from this page, and see how it looks without any additional styling. I'll keep the image's styling in-place, because it'll be too large without it.

_ACTION: Remove all styling except the one on the image._

Now, when we reload the page, we can see that by default, the first-level heading is the biggest element - it's bold and big. The second-level heading is still bold, but smaller, and the regular paragraph text is smaller still.

Let's try and introduce the Tailwind CSS library by copying a link to the entire Tailwind CSS library and including it in our page.

_ACTION: Copy-paste from https://tailwindcss.com/docs/installation#using-tailwind-via-cdn_

```html
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
```

Notice how the different level headings, and the paragraphs all look the same now.

One of the things that CSS libraries like Tailwind do is to _reset_ the default styling of HTML elements to a blank slate. This makes it much easier to have identical styling on all web browsers.

I'm not going to go into detail about this particular aspect. If you're interested, you can find more information about this below this video.

So, at this point, you might be wondering what exactly Tailwind has introduced, besides making everything look very _bland_.

What Tailwind has added are CSS classes. A _very_ large number of CSS classes that let you do a wide variety of things.

For example, to add some color back to this first heading, I can add a few classes:

```html
<h1 class="font-bold bg-green-400 text-xl underline italic">
```

When we refresh the page, we can see that these classes I just added are changing how the element looks. The names of classes are also somewhat self-explanatory, making it easy to both write and understand what the element is going to look like.

Now, this looks about right. But let's try to make it better. I think that the heading isn't big enough. I'd also like to add some space between the text, and the edges of the screen. And let's lose that underline.

```html
<h1 class="font-bold bg-green-400 text-3xl italic p-4">
```

There, that looks much better.

In the next lesson, I'm going to demonstrate how we can use Tailwind to further improve how this page looks, and talk a bit about how you can learn to use Tailwind properly.
