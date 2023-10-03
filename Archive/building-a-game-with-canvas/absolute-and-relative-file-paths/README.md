> **Target title:** Loading External Images

## Script

Before we move on, let's take another look at the path of the image that we wrote in the previous video. It says...

```js
img.src = "/images/idle.png";
```

There's something important going on here. Specifically, the leading `/` character in the path is quite important.

It's an example of a _relative_ path to a resource. The path is relative to the _root_ of the website.

Another way to write this path would be to _remove_ the leading slash. If I reload the page, it still works.

But it's different. To demonstrate what I mean, let me create a new folder called `nested` in the root of the website, and the copy the `index.html` file there.

I'll modify the title so that it says `- Nested`, so that we can differentiate between this page, and the root of our website.

When I reload the page, the image doesn't load anymore.

If I open up the console, I can see that it says that the browser encountered an error trying to load the image, and it seems to be looking for the `images` folder _inside_ the nested folder.

So. When there isn't a leading forward slash character in a path, the browser is trying to load the path relative to where the user is right now - that's the `/nested` path.

If we put the `/` back in, and reload, the image loads up again, because the leading slash tells the browser to load the image relative to the _root_ of the website instead of whatever the current page might be.

Just a quick reminder that these paths are applicable not just to images, but to other kinds of resources that webpage can load. For example, when we say `/main.js` in our `<script>` tag, we're writing a path to a Javascript file that's relative to the root of the website.

So... what we've used so far are _relative_ paths. These paths are relative to either the current path, or the root of our website.

However, there are _absolute_ paths as well. I'll paste in an example: `https://picsum.photos/500/500`.

This is a full path to an image, from a service that loads a random image.

Whenever I reload the page, the service sends back a random image!

Usually, we use such _absolute_ paths when we're loading a resource that isn't a part of our website. The absolute indicates that if you use the path from anywhere, it'll always what we expect. I can visit the path in a new browser, and it loads a random image.

So that was a quick tutorial about absolute and relative paths. Mostly you'll want to use relative paths, and you'll want to stick to using paths that have a leading forward-slash character.

But if you ever run into trouble with images or JS files that don't load, remember to check the browser's console - it'll usually tell you what's going wrong.
