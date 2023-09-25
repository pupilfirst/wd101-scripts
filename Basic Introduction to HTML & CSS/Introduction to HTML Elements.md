Every HTML document begins with an `<html>` tag. All other elements must be descendents of this element. The content of a web page can be wrapped in `<body>` tag.

To include headings, HTML provides different header tags ranging from `<h1>` to `<h6>`.

Normal text can be included in a web page using `<p>` element.

We can use the `<table>` element to display data in tabular format. An optional header can be added to the table using `<thead>` element. Each row in the table is represented using `<tr>` element. To display data in a column in a table row, we need to use `<td>`, the table data cell element.

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