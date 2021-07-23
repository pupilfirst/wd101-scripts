> **Target title:** Loading External Images

## Script

Before we move on, let's take another look at the path of the image that we wrote in the previous video. It says...

```js
img.src = "/images/idle.png";
```

There's something important going on here. Specifically, the leading `/` character in the path is quite important.

To demonstrate what I mean, here's a example that's I've prepared in the `index.html` file. We'll first take a look at the file in the browser, and then we'll take a peek at the code.

> Switch to the browser that has the root `index.html` loaded.

First of all, there are two _kinds_ of paths. A path to a resource like an image can either be _absolute_, or it can be _relative_.

In this lesson, we're going to start with, and spend most of our time on _relative_ paths, because they're the ones that we work with most of the time.

So here's some quick examples. It says on this page that this is a file `idle1.png` that's sitting inside the `images` folder.

> Switch to editor.

Indeed, if we check inside VSCode, we can see that there's an `images` folder next to `index.html` that contains `idle1.png`.

And the `index.html` file says that the `src` for the `img` tag is `images/idle1.png`.

So when we say _relative_ path, we always mean relative to the path of the HTML file that we're viewing.

In this case, we're looking at an `index.html` file that is at the _root_ of the website. So the path `images/idle1.png` refers to a file `idle1.png` that is sitting inside an `images` folder that _should_ be inside the same folder as the root `index.html` file.

The next example shows an image that is right next to `index.html`. The `idle2.png` image file is a file that sits in the same folder as the HTML, so we can simply say it's filename...

> Switch to browser.

...and the browser is able to load it correctly.

To demonstrate some more examples, we have to move out of the _root_ of the website, and into a folder. For that purpose, I've created a link to the `/nested` path. If I click on this link, I know that it means that there's a `nested` folder that should contain another `index.html` file in it...

> Click on the `/nested` link.

...and when I click on it, the path on the browser changes to `/nested`, and I'm shown a different page.

> Switch to the editor.

If we check the `index.html` file inside the `nested` folder, we immediately see something new.

This page is also using the two _idle_ PNG files we saw earlier. But these files aren't alongside this HTML file.

The first example shows how we can use two _period_ characters to go _one level up_. So when we say _../images/idle1.png_ here, it means, go one level up, then inside the `images` folder, find the `idle1.png` file. Again, the path is _relative_ to the `index.html` file that's inside the `nested` folder that we're in right now.

Another way to refer to a website's resources that in a different path than the current one is to use the leading slash character.

When we put a _forward-slash_ at the front of a path, we're telling the browser to ignore the current path, and to load this file relative to the _root_ of the domain from which the page is being served.

> Switch to the browser, and highlight the element in the console.

In this case, it's `127.0.0.1:8080` - that's the domain, and we're in the `/nested` path. But because this `img` tag's `src` attribute says `/idle2.png`, it'll interpret the path as one that is relative to the root of the website.

Now you could be in a folder that's deeply nested. For example: `/nested/again/and/again`, and if you use this same `img` tag with a `src` that has a slash at the front, then it'll still load it relative to the _root_ of the website.

If I head back to the _root_ `index.html` file...

> Navigate to `/`

...we can finally come to an example of an _absolute_ path. Everything we've seen before is an example of relative paths. Either relative to the current HTML file we're looking at, or relative to the domain of the website.

This here is an example of an absolute path. If we take a look at the code...

> Switch to the editor

...we can see that it's a full URL to some kind of resource. Let's actually copy that URL and paste it in a new browser window to check out what it is:

> Switch to browser, paste the URL `https://picsum.photos/500/500` in another tab.

So, this is the URL for a service that returns a random image from the Unsplash service, at the size that is specified in the URL. It's says `/500/500` here in the URL, so the image that it loads is of that size. That's very handy.

> Switch to root `index.html` tab in browser.

When we use this URL in our website, we're writing an _absolute_ path to a resource - regardless of where this URL is used, it'll always refer to a particular resource, on a particular website, at a particular path.

Now, when we write code, we usually try to write relative paths, and not absolute ones. That's because relative paths allow you to change the _domain_ at which a site is hosted, without changing any of our code to make things work.

For example, right now, this website is being served from my local computer, and I'm using the `npx http-server` command to do that. That's why the website URL looks like this.

But I can also upload this site to a service like Github pages. At that point the URL for the site is going to change. It could be `username.github.io`. If you used relative paths, all links should still work. But if I used an absolute path that included the earlier `http://127.0.0.1:8080` in my code, then those URLs would break for a visitor, because this only works on my system.

Now when you're working with images, and when you try to host your own website - you might run into issues where a particular resource isn't loading correctly.

Remember this lesson about absolute and relative paths. How you write the path to a resource is very important, so if you're seeing _404 Not Found_ in the browser console for some images or JS files, check the path, and make sure it's correct for whereever you've hosted your website.
