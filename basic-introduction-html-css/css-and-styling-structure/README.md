# Text
In the past few lessons, you've learned what HTML is and how it is used to mark up documents.
But those documents looked very basic in web browsers, isn't it? Headings looks larger than regular text, paragraphs break onto a new line and have space between them. Links are colored and underlined to distinguish them from the rest of the text.

The web would be a boring place if all websites looked like that. Using CSS, you can control exactly how HTML elements will look in the browser. Let's know more about it.

# Script

In this lesson, we will learn about, what CSS or Cascading Style Sheets is and how we can use it in our webpages.

### What is CSS?

While HTML is used to define the structure and semantics of your content, CSS or Cascading Style Sheets allows you to create great-looking web pages. You can use CSS to change the font, color, size, and spacing of your content. You can also split it into multiple columns, or add animations and other decorative features.

### CSS syntax

CSS is a rule-based language — you define the rules by specifying groups of styles that should be applied to particular elements. 

For example, you can decide to have the main heading on your page to be shown as large red text.

````
h1 {
    color: red;
    font-size: 32px;
}
````

1. In this example, the CSS rule starts with a selector . It selects the HTML element that we are going to style. In this case, we are styling level one heading.
2. Then inside the curly braces, we've made two declarations, in **property** and **value** pair. We've defined *color* property to be *red* and *font-size* property to be of *32px*.

Every CSS property has a different set of allowable values. 

A CSS style sheet will contain many such rules, written one after the other. Like:

````
h1 {
    color: red;
    font-size: 32px;
}
p {
    color: green;
}
````

### How CSS is structured?

Now, let's say we've defined these set of rules, but how we will apply them to our HTML elements?

Well, the very first thing we need to do, is to tell the HTML document that we have some CSS rules we want it to use. 

#### Adding CSS to HTML document

There are three different ways to apply CSS to an HTML document:
1. with inline styles
2. with an internal style sheet
3. with an external style sheet

> Action: Open VS Code and add this plain HTML code
````
  <html>
    <head>
      <title>My CSS</title>
    </head>
    <body>
      <h1>Hello World!</h1>
      <p>Trying CSS for first time</p>
    </body>
  </html>
````

##### Inline styles

The very first way to add CSS to HTML elements is by writing **Inline CSS**.

> Action: In VS code add inline CSS and show the output in the browser.
````
  <html>
    <head>
      <title>My CSS</title>
    </head>
    <body>
      <h1 style="color: blue; font-size: 36px">Hello World!</h1>
      <p style="color:red;">Trying CSS for the first time</p>
    </body>
  </html>
````

It works, but now imagine that if we would build a large scale application, using **Inline CSS**, the website's HTML files are going to look really messy.

And another thing, what if I had a bunch of **header** tags throughout my website, and I have to change all of its *color* from *blue* to *red*? It will be an irritating task, right? 

So, inline CSS is something which you should only do, if it's absolutely necessary. And I personally don't recommend it.

##### Internal stylesheet

The second way to add CSS to HTML elements is by adding an **internal stylesheet**.

Inside the HTML **HEAD**, you can add the **internal stylesheet**.

> Action: Open VS Code and add internal stylesheet to the HTML
````
  <style>
    h1 {
      color: purple;
      background: yellow;
    }
    p {
      color: grey;
    }
  </style>
````

> Action: Show changes in browser
In some circumstances, internal stylesheets can be useful. But for sites with more than one page, an internal stylesheet becomes a less efficient way of working. To apply uniform CSS styling to multiple pages using internal stylesheets, you must have an internal stylesheet in every web page.

So, it's not a recommended approach. And that leads to the third approach, external stylesheets.

##### External stylesheet

An external stylesheet contains CSS in a separate file with a .css extension. This is the most common and useful method of bringing CSS to a document.

> Action: Open VS Code and create style.css file
````
  h1 {
    color: purple;
    background: yellow;
  }
  p {
    color: grey;
  }
````
> Action: Link the CSS in HTML
````
  <html>
    <head>
      <title>My CSS</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <h1>Hello World!</h1>
      <p>Trying CSS for first time</p>
    </body>
  </html>
````

The `href` attribute of the `<link>` element needs to reference a file on your file system. In the example above, the CSS file is in the same folder as the HTML document, but you could place it somewhere else and adjust the path. 

The advantage of this approach is, you can define all of your styling rules in a single CSS file and link it to multiple webpages. This will keep your web interface consistent, and you will save a lot of time.

So, this is the recommended approach for writing CSS.

### To summarize,

CSS or Cascading Style Sheets is used to style the webpages. We've learned that there are three different ways to add CSS to an HTML file, and the external stylesheet is the recommended approach.

In the next lesson, we will continue our CSS journey. See you there.
