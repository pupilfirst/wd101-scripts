_ACTION: Visit page https://tailwindcss.com/docs/installation#using-tailwind-via-cdn_

One of things we'd quickly skipped over when introducing you to Tailwind is the way we installed it.

We did so by pasting in a link to a compiled stylesheet that contains _all_ of the classes that Tailwind introduces

When it's included like that it's a huge file. Uncompressed, it's over 3 megabytes in size, and if you system isn't very fast, it can actually slow down your computer when the browser has goes through all of it. That's not good.

In fact, Tailwind's documentation warns us that using Tailwind like this has several disadvantages. To enable of these additional features, we need to install Tailwind in a different way.

So what's the preffered way of installing and using Tailwind?

_ACTION: Jump to first installation option_.

Well, the first option mentioned here is to install Tailwind as PostCSS plugin.

Now this might not make sense to you right now. But the important bit to notice is the installation command:

```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

NPM is a package manager for the JavaScript programming language.

The reality of modern web development is that a lot of the tools that make our work easier and more fun, are tied to the Javascript ecosystem. So even if you don't plan to do much programming, a passing familiarity with JS, and its tooling ecosystem is essential learning for all web developers.

Because of this, from the next level onward, we're going to start learning Javascript.

So, see you there!
