# Script

In this video, we will take a look at the semantics of HTML. In programming, semantics refers to the meaning of a piece of code.

> Action: highlight the HTML code that we wrote previously.

We have used the `<img>` tag to display an image. The `<img>` tag has the semantic meaning of including a picture on our webpage. Similarly, we used `<h1>` tag to display a heading. The `<h1>` element gives the text it wraps a semantic role of top-level heading on the web page.

> Action: write a `span` with inline CSS styling and make it look like a heading

We can make a text wrapped by `<span>` look like a heading, but it doesn't have any semantic value.

Using the correct element for its intended usage has its benefits.

An adequately structured web page can help a search engine (such as: Google, Yahoo or Bing), extract essential keywords. It can act as a signpost for screen readers to help navigate a page for visually impaired users.

We should code HTML to represent the data that will be populated and not based on its default presentation styling. We can change the presentation styling using _Cascading Style Sheet_.

> Action: Write a semantic HTML web page & show the result in the web browser.

```html
<html>
  <head>
    <title>Writing semantic HTML</title>
  </head>
  <body>
    <header>Semantic HTML</header>
    <main>
      <p>This is a paragraph</p>
    </main>
  </body>
</html>
```

Here, we have `<title>`, which represents the web page's title. There is a `<header>` tag that wraps the web page's heading. Then there is core content enclosed within the `<main>` tag.

We have many such semantic HTML elements available.

> Action: open https://developer.mozilla.org/en-US/docs/Glossary/Semantics and highlight the different elements available.

Here you can see that we have elements like `<nav>` which should be used to provide navigation links. Another element we have is `<section>`, which can be used to represent a generic standalone section of a document. `<section>` should always have a heading.

> Action: write a section with heading.

```html
<h1>Learning HTML</h1>
<section>
  <h2>Introduction</h2>
  <p>This document acts as a guide to master HTML</p>
</section>
```

Another element we can use to represent a self-contained text is `<article>`. We can create and `<article>` with one or more `<section>` within it.

> Action: write the following example.

```html
<article>
  <h1>Reviews</h1>
  <section>
    <h4>Simple to understand</h4>
    <p>HTML is simple to understand</p>
  </section>
  <section>
    <h4>Easy to learn</h4>
    <p>Very easy to learn HTML</p>
  </section>
</article>
```

## Conclusion

So we learnt about semantics in HTML and the elements that help us in writing semantic HTML.

# Text

HTML comes with various elements to represent the data which will be populated. To display headings, HTML provides `h1`, `h2`, `h3`, `h4`, `h5`, `h6`. To represent list items, we can use `li` and `ul` elements.

An adequately structured web page can help a search engine extract essential keywords. It can act as a signpost for screen readers to help navigate a page for visually impaired users.

Semantic HTML example:

```html
<html>
  <head>
    <title>Writing semantic HTML</title>
  </head>
  <body>
    <header>Semantic HTML</header>
    <main>
      <p>This is a paragraph</p>
    </main>
  </body>
</html>
```

A few other semantic elements available are `<footer>`, `<nav>`, `<article>`, `<summary>` etc.

Mozilla has excellent documentation on semantic HTML https://developer.mozilla.org/en-US/docs/Glossary/Semantics
