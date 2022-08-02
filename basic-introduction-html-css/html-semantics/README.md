# Text

In this lesson, we will take a look at the semantics of HTML. In programming, semantics refers to the meaning of a piece of code.

In HTML, we use `<img>` tag to display an image. The `<img>` tag has the semantic meaning of including a picture on our webpage. Similarly, we use `<h1>` tag to display a heading. The `<h1>` element gives the text it wraps a semantic role of top-level heading on the web page.

We can make a text wrapped by `<span>` to look like a heading, but it doesn't have any semantic value. Using the correct element for its intended usage has its benefits.

An adequately structured web page can help a search engine (such as: Google, Yahoo or Bing), extract essential keywords. It can act as a signpost for screen readers to help navigate a page for visually impaired users.

We should code HTML to represent the data that will be populated and not based on its default presentation styling. We can change the presentation styling using _Cascading Style Sheet_.

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

We can represent a generic standalone section of a document using the `<section>` tag. It should always have a heading.

```html
<h1>Learning HTML</h1>
<section>
  <h2>Introduction</h2>
  <p>This document acts as a guide to master HTML</p>
</section>
```

To represent a self-contained text, the `<article>` tag can be used. We can create an `<article>` with one or more `<section>` within it.

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

A few other semantic elements available are `<footer>`, `<nav>`, `<article>`, `<summary>` etc.

Mozilla has excellent documentation on semantic HTML https://developer.mozilla.org/en-US/docs/Glossary/Semantics
