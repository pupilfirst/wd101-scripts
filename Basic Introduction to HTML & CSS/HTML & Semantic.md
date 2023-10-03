# Understanding HTML Semantics:

In this lesson, we'll delve into the semantics of HTML. In programming, semantics refers to the meaning conveyed by a piece of code.

## Semantics in HTML:

In HTML, semantics play a crucial role in defining the meaning of elements. For instance, we use the `<img>` tag to display images. The `<img>` tag carries the semantic meaning of including a picture on our webpage. Similarly, the `<h1>` tag is used to display top-level headings, providing semantic structure to the text it encloses.

## Choosing the Right Element:

While we can visually style text wrapped by a `<span>` to resemble a heading, it lacks semantic value. Using the appropriate HTML element for its intended purpose offers several advantages.

## Benefits of Semantic Structure:

A well-structured web page benefits in multiple ways. It aids search engines like Google, Yahoo, or Bing in extracting essential keywords, improving discoverability. Additionally, it serves as a guide for screen readers, assisting visually impaired users in navigating the content effectively.

## Separating Data from Presentation:

It's important to code HTML to represent the underlying data rather than focusing on its default presentation. Presentation styling can be modified using Cascading Style Sheets (CSS).

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

Mozilla has excellent documentation on semantic HTML: https://developer.mozilla.org/en-US/docs/Glossary/Semantics