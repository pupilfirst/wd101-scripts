# Text

In this lesson, we will learn how to add comments to our HTML web page. But, why we need comments in our code?

When we are doing a personal project, it is easy for us to think and understand the context of the code. If we keep aside the project for a few months, we might forget the reasons for many decisions.

Comments act as a guide for other developers or ourselves to navigate through the project. Comments don't get executed. It is there for pure documentation purposes.

## HTML comments

Mozilla Developer Network states,

> HTML has a mechanism to write comments in the code. Browsers ignore comments, effectively making comments invisible to the user. The purpose of comments is to allow you to include notes in the code to explain your logic or coding.

We can write a comment in HTML by wrapping the text between `<!--` and `-->`

```html
<html>
  <body>
    <!-- We will add a heading to our web page -->
    <h1>This is a heading</h1>
    <!-- The comments can be
    multi line as well -->
  </body>
</html>
```

Comments in HTML can be a single line or multi-line.

## CSS comments

We can write comments in CSS by wrapping text between `/*` and `*/`.

```css
.heading-alert {
  color: red; /* we make the font color red */

  /* Let's give a padding of
  10px everywhere */
  padding: 10px;
}
```

CSS comments can be a single line or multi-line comment.

## JavaScript comments

We can write comments in JavaScript using two different constructs.

We can write single line comments by prefixing the line with two backslashes. `//`.

```javascript
// This is a comment.
// console.log("This won't get executed");
```

We can write multi-line comments in JavaScript by wrapping the text between `/*` and `*/`. We cannot nest a multi-line comment.

```javascript
/*
This is a multi
line comment.
*/
```
