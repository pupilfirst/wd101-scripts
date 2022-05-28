# Script

In this video, we will take a look at the semantics of HTML. In programming, semantics refers to the meaning conveyed.

>Action: highlight the HTML code that we wrote previously.

We used the `<img>` tag to display an image in the previous video. The `<img>` tag has the semantic meaning of including a picture on our webpage. Similarly, we used `<h1>` tag to display a heading. The `<h1>` element gives the text it wraps a semantic role of top-level heading on the web page.

>Action: write a `span` with inline CSS styling and make it look like a heading

We can make a text wrapped by `<span>` look like a heading, but it doesn't have any semantic value.

Using the correct element for its intended usage has its benefits.

An adequately structured web page can help a search engine extract essential keywords. It can act as a signpost for screen readers to help navigate a page for visually impaired users.

We should code HTML to represent the data that will be populated and not based on its default presentation styling. We can change the presentation styling using *Cascading Style Sheet*.

>Action: Write a semantic HTML web page & show the result in the web browser.

```html

<html>
  <head>
    <title>Writing semantic HTML</title>
  </head>
  <body>
    <header>Semantic HTML </header>
    <main>
      <p>This is a paragraph </p>
    </main>
  </body>
</html>

```
Here, we have `<title>`, which represents the web page's title. There is a `<header>` tag that wraps the web page's heading. Then there is core content enclosed within the `<main>` tag.

We have many such semantic HTML elements. We will look into it in the following video.