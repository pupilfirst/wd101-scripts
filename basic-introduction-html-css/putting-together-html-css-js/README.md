#Script

In this video, we will learn how to put together a web page that contains HTML, CSS, and JavaScript.

We will first look into how to add CSS to our web page. We can add CSS property to an HTML element in multiple ways. We can do that by adding it as an inline style property.

> Action: Write `<h1 style="color: red;">This is a heading </h1>`

We can also use the `<style>` element to include CSS in our web page.

> Action: Write `<style> h1{ color: red; }</style>`

We can remove the inline `style` attribute from the `<h1>`. Let's save the file and refresh our page. The heading is styled the same as before.

But this is not how we do it in web development. We instead write the styling rules in a separate file and then link it with our HTML. We do that so using the `<link>` element.

Let's first create a file and name it `index.css`.

> Action: Create a file and save it as index.css.

We can now cut this inline styling we wrote and paste it into the CSS file. Let me give it a unique name, `heading-alert`.

> Action: write the CSS code

```css
.heading-alert {
  color: red;
}
```

I have prefixed the name with a dot (`.`). It is called class name in CSS. We can now use this name and reference it in our HTML file.

Let's remove the CSS we included with the `style` element.

> Action: Remove the `<style>` element.

We can add the `heading-alert` to our `<h1>` element as a class attribute.

> Action: Write `<h1 class="heading-alert">This is a heading </h1>`

Now let's link the CSS file we wrote with our page.

> Action: write `<link href="index.css" rel="stylesheet">`

The `rel` stands for relationship, and we tell the browser to include a CSS file as a stylesheet.

If we save the file and refresh our page, we can see that we have the same styling.

We now know how to link a CSS file to an HTML page. We can now look into how to add JavaScript to our web page.

> Action: open https://developer.mozilla.org/en-US/docs/Web/HTML/Element#scripting and highlight the usage.

If we go through the MDN reference, we see that there is a `<script>` element that can be used to embed executable code. And this is used to embed JavaScript code.

Let's add a `<script>` element to our web page.

> Action: Add `<script> console.log("Hello from JavaScript!"); </script>` to the end of HTML file.

Let's save the file and then switch back to our browser and reload the page. We can then open the console in Firefox by Tools > Browser Tools > Web Developer Tools. You can also right-click and select the `inspect` menu item to open the Web Developer Tools.

We can see that `Hello from JavaScript!` is printed in the console.

Like what we did with the CSS, we usually write our JavaScript in separate files and then include it on our web page.

Let's create a new file and name it `index.js.`

> Action: create a new file and save it as `index.js.`

Now, let's cut the JavaScript code that we wrote and paste it into the new file.

> Action: Switch to HTML file. Select the JS code, right-click and cut the code. Paste it into the new index.js file.

Let's save this file. Now that we have our JavaScript file ready, we can include it on our web page. We can use the same `<script>` element.

> Action: Open https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-src

The `<script>` element has an `src` attribute which can be used to include an external JavaScript file.

> Action: Scroll down the page and copy the Basic Usage example
> `<script src="javascript.js"></script>`

Let's copy this basic usage example and paste it into our HTML page. We named our file `index.js`, so let's edit to make sure we include the correct JavaScript file.

> Action: Edit `<script src="javascript.js"></script>` to `<script src="index.js"></script>`

Save the HTML file. Switch back to the browser and reload our page. We can see that the `Hello from JavaScript!` is printed on the Web Developer Console.

We have now glued together HTML, CSS, and JavaScript.

#Text

HTML doesn't have any presentation information. We do that by using CSS. We can add CSS to HTML elements in the following ways:

- Embed the CSS properties as inline `style` attribute.

  ```html
  <h1 style="color: red;">This is a heading</h1>
  ```

- Use `<style>` element to embed CSS rules.

  ```html
  <html>
    <head>
      <style>
        h1 {
          color: red;
        }
      </style>
    </head>
    <body>
      <h1>This is a heading</h1>
    </body>
  </html>
  ```

- Link a CSS file using the `<link>` element.

  `index.css`

  ```css
  .heading-alert {
    color: red;
  }
  ```

  `test.html`

  ```html
  <html>
    <head>
      <link href="index.css" rel="stylesheet" />
    </head>
    <body>
      <h1 class="heading-alert">This is a heading</h1>
    </body>
  </html>
  ```

JavaScript can be emdedded into an HTML page using `<script>` element.

- We can directly embed it in the `<script>` element.

  ```html
  <html>
    <head>
      <link href="index.css" rel="stylesheet" />
    </head>
    <body>
      <h1 class="heading-alert">This is a heading</h1>
      <script>
        console.log("Hello from JavaScript!");
      </script>
    </body>
  </html>
  ```

- We can also write Javascript in a separate file and add the file as a source in the `<script>` element.

  `index.js`

  ```javascript
  console.log("Hello from JavaScript!");
  ```

  `test.html`

  ```html
  <html>
    <head>
      <link href="index.css" rel="stylesheet" />
    </head>
    <body>
      <h1 class="heading-alert">This is a heading</h1>
      <script src="index.js"></script>
    </body>
  </html>
  ```
