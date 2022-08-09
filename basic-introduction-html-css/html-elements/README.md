# Script

In this lesson, we will look at various HTML elements that are available to us. We have already used a few of them to create our web page.

> Action: open the index.html from previous lesson.

We have used `<h1>` element to display a header.

> Action: Highlight the usage of `h1`

We used the `<img>` element to embed an image. We used `<p>` tag to write normal text.

Now, let's see, what other elements are available to use.

> Action: Open browser https://developer.mozilla.org/en-US/docs/Web/HTML/Element

You can see that there are lot of elements available. But we will focus on just two elements.

To interact with the user and get an input, we can use the form `<input>` element. This element will render differently based on the `type` we provide. The input element can act as a `button`, `checkbox`, `date picker` etc.

> Action: highlight the examples and click on the running demo.

To display some data to the user in a tabular format, HTML provides a `<table>` element. Table can have an optional header. Each row in the table is represented using a table row element `<tr>`. Each coloumn entry in a row is represented using table data cell element `<td>`.

> Action: open https://developer.mozilla.org/en-US/docs/Web/HTML/Element and highlight various HTML elements available.

HTML elements are available for almost all of the use cases. We should make sure we use the right element based on the HTML standard.

See you in the next lesson

# Text

Every HTML document begins with an `<html>` tag. Every other elements must be descendents of this element. The content of a web page can be wrapped in `<body>` tag.

To include headings, HTML provides different header tags ranging from `<h1>` to `<h6>`.

Normal text can be included in a web page using `<p>` element.

We can use the `<table>` element to display data in tabular format. An optional header can be added to the table using `<thead>` element. Each row in the table is represented using `<tr>` element. To display data in a coloumn in a table row, we need to use `<td>`, the table data cell element.

```html
<html>
  <head>
    <title>This is my web page</title>
  </head>
  <body>
    <h1>This is a top level heading</h1>
    <h2>This is a sub heading</h2>
    <p>This is a normal text</p>

    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>fruit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Apple</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Orange</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
```

MDN has an excellent reference on HTML elements at https://developer.mozilla.org/en-US/docs/Web/HTML/Element

MDN documentation on [Form input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
MDN documentation on [Table element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
