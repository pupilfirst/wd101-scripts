In this lesson, we will learn about linking external pages and internal elements to our web pages.

## Linking external pages and internal elements to our web pages

The `a` HTML element (or *anchor* element), with its `href` attribute, creates a hyperlink to web pages, files, email addresses, locations on the same page, or anything else a URL can address.

### External Links

You can use the `a` (anchor) element to link to content outside your web page.

The `a` element needs a destination web address specified using the `href` attribute. They also require anchor text which you click to navigate to that web address. Let's try out the below code on our HTML page.

```html
<a href="https://www.google.org">This links to Google</a>
```

When you open this HTML page on your browser, it will display the text `This links to Google` as a link you can click. And if we click on the link, it will take us to `https://www.google.com`.

### Internal Links

`a` (anchor) elements can also create internal links to jump to different sections within a webpage.

To create an internal link, you assign a link's `href` attribute to a hash symbol `#` plus the value of the `id` attribute for the element that you want to link to, usually further down the page internally.

You then need to add the same `id` attribute to the element you are linking to. An `id` is an attribute that uniquely identifies an element.

Let us create an `a` tag and an `h2` tag on our HTML page. Next, let us update the `id` attribute of the `h2` same as the `href` attribute for the anchor tag.

```html
<a href="#projects-header">Projects</a>
...
<h2 id="projects-header">Projects</h2>
```

When you open this HTML page on your browser and click the Projects link, you will be taken to the section of the webpage with the **Projects** heading element.

In this lesson, we learned about the HTML `a` (anchor) element, and how it is used to link internal elements and external webpages from our web page.

You can learn more about the attributes that can be used with this element [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)