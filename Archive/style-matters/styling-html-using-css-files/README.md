Previously, we've seen how to build an HTML file, and how we can style it by writing some CSS inside the `style` properly of elements.

While this works fine, this isn't really how developers write styling for HTML elements. It's much more common to keep the _styling_ of a website _separate_ from its structure, using seperate CSS files.

For example, let me create an `index.css` file next to the `index.html` file.

What we're trying to do is to write the styling for an element, here in the CSS file, and then link it to a particular element.

The most common way to do that is to write a CSS class.

For example, I can create a CSS class called `.my-heading`.

```css
.my-heading {
  background-color: chartreuse;
}
```

...and say that it has the property `background-color: chartreuse;`.

Now, back in my HTML file, I first need to _link_ to the CSS file, so that it's also loaded along with the HTML.

```html
<link rel="stylesheet" href="index.css">
```

Once the link is in place, instead of the `style` property, I can use the `class` property, and simply mention the name of the class I want to apply to this element.

```html
<h1 class="my-heading">
```

Let's reload the page, and see if it still works.

Yes, it does.

The great thing about classes is that you can have more than one property assigned to it.

For example, if we wanted to _underline_ this heading, we can simply head into the CSS file and add one more property:

```css
.my-heading {
  background-color: chartreuse;
  text-decoration: underline;
}
```

Now, when we reload the page, we can see that an underline has been added to the heading.

We can also add multiple classes to an element. For example, let's add another class called `emphasis`, and use it in the HTML file.

```css
.emphasis {
  font-style: italic;
}
```

```html
<h1 class="my-heading emphasis">
```

If we reload the page, we can see that the new styling has been applied.

When writing CSS like this, we are able to re-use the same styling for many different elements. This lets us avoid repeating ourselves, when we write code.

In the next lesson, we'll actually add a library called Tailwind, that adds a lot of very useful CSS classes. It's something that will let us build a good looking UI very quickly.
