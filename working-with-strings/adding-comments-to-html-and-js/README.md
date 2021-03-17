Whenever we write code, whether that's HTML, or Javascript, or any other programming language, we're telling the _computer_ how to do a certain thing.

But the computer is not the _only_ thing that you're communicating with through your programs. You're also going to be talking with _people_. The code that you write could be read by your colleagues at work. If you're working on an open-source project, it's going to be read by people who you might not even know. _You_ are going to be reading your own code in the future, and you might have forgotten what a certain piece of code is supposed to do.

It's possible to leave messages in your code for such people. When that's someone else, or to yourself, for future reference. And such messages are called comments.

In HTML, you can write comments by wrapping them with a special set of characters like this:

```html
<!-- This is a comment -->
<div>Hello World</div>
```

Anything written between these characters will be ignored by the browser. This includes line breaks, so you can write multiple lines of comments using the same syntax.

```html
<!-- This is a
multi-line comment -->
<div>Hello World</div>
```

In Javascript files, you can write comments in two ways. To write a single line of comment, you can prefix the line with two forward-slash characters:

```js
// This is a single line of comment.
console.log("Hello from a JS file");
```

To write multiple lines of comments, you can use the _slash-star_ syntax:

```js
// This is a single line of comment.

/* This is a
multi-line comment. */
console.log("Hello from a JS file");
```

So, just to recap, these comments do not change the way your program will work in any way. All they're meant to do is to _help_ with whoever is going to be _looking_ at the source code of your program or website. It'll provide some documentation for something like a complex function, or a tricky piece of code.
