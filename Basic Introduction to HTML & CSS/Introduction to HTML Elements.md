# HTML Structure:

An HTML document begins with the `<html>` tag, serving as the root element. All other elements must be descendants of this element. The main content of a web page is typically enclosed within the `<body>` tag.

## Headings:

To create headings in HTML, you can use a range of header tags, from `<h1>` to `<h6>`. These tags help establish a hierarchy of importance on your web page, with `<h1>` being the highest level of importance and `<h6>` the lowest.

## Text Content:

Normal text content can be added to a web page using the `<p>` element. This element is used for paragraphs and separates text into distinct blocks.

## Tabular Data:

For presenting data in a tabular format, HTML provides the `<table>` element. You can include an optional header for the table using the `<thead>` element. Each row within the table is represented by the `<tr>` element. To populate data within a specific column in a table row, you should use the `<td>` element, which stands for "table data cell."

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