> **Target title**: Install Node.Js on your PC and serve up some HTML & JS

# Script

```html
<p>Hello HTML!</p>

<script type="text/javascript" src="/main.js"></script>
```

```js
console.log("Hello JS!");
```

In this level, you're going to see me work with both HTML and CSS files.

To run the code that I've written here - both the HTML and the JS, I'm going to be _serving_ up these files using Javascript package called _http-server_. I'm executing this package by going to the directory that contains my code.

```
$ ls -l
```

and then running the `npx http-server` command.

To run this command, you'll need Node.js installed on your system. This lesson will additional information that will tell you how to install Node.js on your computer.

When I run this command, I'm shown an address. If I copy that and paste it in the browser, I can see the HTML, and if I check the console, I can see that the Javascript log command has also executed.

If you don't have Node.js installed in your system already, follow the instructions in this target to be able to follow along.
