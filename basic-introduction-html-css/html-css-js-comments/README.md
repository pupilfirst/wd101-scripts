# Script

We will learn how to add comments to our HTML web page in this lesson. Before learning to do that, we will explore why we need comments in our code.

When we are doing a personal project, it is easy for us to think and understand the context of the code. If we keep aside the project for a few months, we might forget the reasons for many decisions.

Comments act as a guide for other developers or ourselves to navigate through the project. Comments don't get executed. It is there for pure documentation purposes.

Let's open up our HTML page in VS Code.

> Action: Open the HTML page from previous lesson.

Writing comments has varying syntax with different programming languages. In HTML, we write a comment by enclosing the text between `<!--` and `-->`.

> Action: Write

```html
<!-- This is a sample comment.
It can span multiple lines -->
```

If we save the file and then head to our browser and reload the page, we see the same web page as before. Adding comments didn't change any behaviour in particular.

Similarly, we can write comments in our CSS file as well. Like I said earlier, the syntax varies with different languages. But the goal of adding comments remains the same.

> Action: Open the `index.css` file.

In CSS, we start a comment with `/*` and then end the comment with `*/`.

> Action: Write `/* This class adds red color to every h1 tag. */`

The comment can be a single line or multi-line.

> Action: Write

```css
/*
This class adds red color to every <h1> tag.
This is because we only use <h1> to display alerts in our code.
*/
```

Writing comments in JavaScript is similar to that of CSS. Multi-line comment in JavaScript is enclosed within `/*` and `*/`.

> Action: Open `index.js` and add

```javascript
/* This is a multi-line comment.
The following code won't get executed.
console.log("This won't show up!");
*/
```

We can also write a single line comment in JavaScript by prefixing `//`. The browser ignores any text that comes after `//`.

> Action: Write a single line comment.

```javascript
console.log("This will show up in console"); // Print a message to the developer console.
```

Let's save the file and reload our web page. I will open the web developer console. We can see that the message got printed.

If I move the `//` to the beginning of the line, we can see that VS Code already changed the highlighting, indicating the line is a comment.

> Action: move the // to start of console.log

If we now save the file and reload our page. We can see that the message no longer gets printed.

## Conclusion

In this lesson, we learnt why we need comments in our code base and how to write comments in HTML, CSS, and JavaScript.

# Text

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

CSS comments can be a single line or multi-line.

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
