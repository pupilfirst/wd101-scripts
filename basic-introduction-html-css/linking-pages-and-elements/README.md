We learnt in previous lessons how to link images to our web pages. In this video, we will take a look at linking external pages and internal elements to our web pages. 

## Linking external pages and internal elements to our web pages

### External Links

You can use `a` (anchor) elements to link to content outside of your web page.

`a` element needs a destination web address called an `href` attribute. They also need anchor text which you click to navigate to that web address. Here's an example:

> Action: Open the HTML Document created previously and add an HTML anchor Tag as below.

```
<a href="https://www.google.org">This links to google</a>
```

Then your browser will display the text `This links to google` as a link you can click. And that link will take you to the web address https://www.google.com.

### Internal Links

`a` (anchor) element can also be used to create internal links to jump to different sections within a webpage.

To create an internal link, you assign a link's `href` attribute to a hash symbol `#` plus the value of the `id` attribute for the element that you want to internally link to, usually further down the page. 

You then need to add the same `id` attribute to the element you are linking to. An `id` is an attribute that uniquely describes an element.

Here's an example:

> Action: Open the HTML Document created previously and add an HTML anchor Tag as below.

```
<a href="#projects-header">Projects</a>
...
<h2 id="projects-header">Projects</h2>
```

When users click the Projects link, they'll be taken to the section of the webpage with the Projects heading element.





