Watch and follow the steps below to make your first webpage!

> Note: You will create the files being covered in this level, under your `wd101\html-css` folder. Thus, on your terminal, execute

```bash
## Go to html-css folder
cd /home/NAME/wd101/html-css
```

Once you are inside `html-css` folder, open VSCode from the terminal by tying in `code .`.

```bash
code .
```


## Adding a second page, and linking to it

Now that you've created _one_ page, let's quickly take a look at how to add a _second_ page, and then _link_ to it.

To create a second page, let's create a new HTML file: `about.html` in the same folder as `index.html`. You can write whatever you like in this page.

Now, to link to this page from `index.html`, add the following tag.

```html
<!-- Somewhere in the index.html file... -->
<a href="about.html">About</a>
```

In the `about.html` file, you can add a link _back_ to the `index.html` file.

```html
<!-- Somewhere in the about.html file... -->
<a href="index.html">Homepage</a>
```

Such links that allow you to navigate between webpages are called _hyperlinks_.

Check out [documentation on W3Schools](https://www.w3schools.com/html/html_links.asp) to learn more.