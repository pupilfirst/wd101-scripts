# Script

In this video, we will look at various HTML elements available. Let's create a new HTML file and name it `page.html`

>Action: create a new HTML file and save it as page.html


In HTML, we use tags to construct a web page. For example, there is this element called `<h1>`.

>Action: Write `<h1> This is a heading </h1>`
```html
<h1>This is a heading </h1>

```

If you open the file in your browser, you can see that a heading is added to the web page.

>Action: switch back to the editor.

If I hover over the tag, the editor gives me a nice little information about the tag. Let me click and open the Mozilla Developer Network (MDN) reference.

>Action: open https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements in a new tab.


You can see that different heading tags are available. `<h1>` is a top-level heading. `<h2>` is slightly smaller. The size gets smaller with `<h3>` and `<h4>` and so on. Let's write and test these elements.

>Action: Write text with `h1`, `h2`, `h3` and `h4` and compare the size.

The size will differ with browsers as they come with different default style settings.

To write a normal text, we can use the `<p>` tag.

> Action: Write `<p>This is a paragraph with long content to explain something.</p>` Save and refresh the page.

```html
<p>This is a paragraph with long content to explain something.</p>
```

These are the basic HTML tags that we can use to display texts.

HTML elements are available for almost all of the use cases. HTML comes with `<li>` and `<ul>` tags to display a list. There is an element `<a>` representing a link to another web page.

>Action: open https://developer.mozilla.org/en-US/docs/Web/HTML/Element and highlight various HTML elements available.

You can see there are 100+ HTML elements available. We should make sure we use the right element for the proper usage.


#Text

Every HTML document begins with an `<html>` tag. Every other elements must be descendents of this element. The content of a web page can be wrapped in `<body>` tag.

To include headings, HTML provides different header tags ranging from `<h1>` to `<h6>`.

Normal text can be included in a web page using `<p>` element.

```html
<html>
  <head>
    <title>This is my web page </title>
  </head>
  <body>
    <h1>This is a top level heading</h1>
    <h2>This is a sub heading</h2>
    <p>This is a normal text</p>
  </body>
</html>
```
MDN has an excellent reference on HTML elements at https://developer.mozilla.org/en-US/docs/Web/HTML/Element
