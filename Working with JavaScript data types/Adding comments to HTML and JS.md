Comments are used to add documentation to your code. Comments are always ignored when code executes.

With HTML and JS, the browser is most often where the code executes, so while the browser may receive comments as part of website's payload, it will simply ignore all comments that it sees.

## Comments in HTML

You can add comments to your HTML source by using the following syntax:

```html
<body>
  <!-- This is valid single-line comment. -->

  <p>This is a paragraph.</p>

  <!-- 
    The same characters can be used to write multi-line
    comments, just like this.
  -->
</body>
```

## Comments in JavaScript

Single line comments start with `//`. Any text between `//` and the end of the line will be ignored.

```js
var a = 2;      // Declare a, give it the value of 2
var b = a + 2;  // Declare b, give it the value of a + 2
```

Multiple lines of comments can be easily written by starting with `/*` and ending with `*/`. Any text between `/*` and `*/` will be ignored by JavaScript.

```js
/*
The code below will change
the heading with id = "heading"
in my web page:
*/

document.getElementById("heading").innerHTML = "My First Page";
```