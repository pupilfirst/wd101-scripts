Keeping _Cascading Style Sheets_ (CSS) inside of HTML files isn't a common practice. Let's start by learning how we can keep our styles in their own `.css` files.

** Video **

To learn move about CSS, check out [w3schools.com, which has a very detailed tutorial](https://www.w3schools.com/css/default.asp). The number of different ways that you can style a web page is infinite. You're limited only by your imagination, so take your time and experiment!

### Recap: How to include CSS in your webpage

* **Inline:** There's no need to use _selectors_ here, directly include a `style` attribute in the element. For example: `<h1 style="color: red;">Heading</h1>`
* **Embedded:** We can place CSS in the HTML file using a `<style> ... </style>` tag.
* **External:** The CSS is kept in a seperate file, and we use a `link` tag, like so: `<link rel="stylesheet" href="path/to/my/custom.css">`. This is generally the preferred way of writing custom CSS.