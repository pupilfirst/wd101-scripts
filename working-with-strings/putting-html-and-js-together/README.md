You've already tried writing Javascript directly in the browser, using the developer console. While this is great try out small snippets of code, that's not really how we create more complex programs.

We're going to use our installation of Visual Studio Code to create the files that hold our source code, somewhere on the computer.

We'll start by creating an `index.html` file that holds our HTML. I'll create that, and add a simple `<p>` which contains the string `Hello World`. Using my file explorer, I'm simply going to open this `index.html` file - it should open in your browser, and it'll say `Hello World` on the page.

Now HTML pages aren't just text, there's almost always some Javascript code that you need to execute. To include some Javascript code along with this HTML, I can add a simple `<script type="text/javascript">` tag that contains only one line - a `console.log("Hello from JS")` statement.

If I open up the developer console and refresh the page, I can see that the Javascript has executed.

Now you're very rarely going to write Javascript directly into an HTML file. Instead, a better option is to keep JS in it's own file. We can do that by creating a new `main.js` file, that contains a `console.log("Hello from a JS file");` line, and then updating the `<script>` tag to include the `src` from which the JS is to be loaded:

```js
<script src="main.js"></script>
```

If I reload the page, we can see the updated text being logged to the Javascript console.

So that's how you write HTML and JS as seperate files and load them together when you open the HTML file. I'll see you in the next lesson.
