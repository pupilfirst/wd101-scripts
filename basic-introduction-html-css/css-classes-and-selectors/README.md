# Text
To style different elements in our HTML page, first we have to find a way to refer to those elements. In CSS, selectors are used to **target** the HTML elements on our web pages that we want to style. There are a wide variety of CSS selectors available, which helps us to precisely select which element to style. 

Let's find out how to use these selectors.

# Script 
In this lesson, we are going to learn how to style different elements in our HTML page.

## CSS selectors

A CSS selector is the first part of a CSS Rule. And, you've already seen a **selector** in the previous lesson, when we selected the **h1** element, to style it.

### Types of selectors

There are three different ways in which we can accomplish styling elements in an HTML page.
1. The first one is that we can directly target the HTML elements.
2. The second, we can add an ID to the element,
3. And third, we can grab it by the class.

#### The CSS element Selector

The element selector selects HTML elements based on the element name.

> Action: Open VS Code with previous lesson setup, and select the **body** tag to style it. Also explain the code.
````
body {
  background-color: purple;
}
p {
  color: grey;
}
````

#### The CSS id Selector

The **id** selector uses the id attribute of an HTML element to select a specific element. The **id** of an element is unique within a page, so the **id** selector is used to select one unique element!

To select an element with a specific id, write a hash (#) character, followed by the id of the element.

> Action: Show the ID selector in action, and explain the code.
````
#heading2 {
  text-align: center;
  color: green;
}
````

#### The CSS class Selector

The class selector selects HTML elements with a specific class attribute. To select elements with a specific class, write a period (.) character, followed by the class name.

> Action: Show the **class** selector in action, and explain the code.
````
.center {
  text-align: center;
}
.button {
  background: green;
  color: white;
  padding: 8px 16px;
}
````

Now the obvious question is, when to use which selectors?

So for example, in the **`body`** tag we've defined the `background-color`, in the `p` tag we've set the color to be `grey`. So, it's saying the HTML `body` tag and every single `p` tag throughout the webpage should have these styling properties.
Now, obviously, every p tag color might not be `grey`. So be mindful when you target these elements directly.

Now, for `class` selector, we've created a `button` class, and defined `background`, `color`, `padding` etc. We can apply this `button` class to every single `button` in our webpage. So classes are great when you want to use the same style in multiple areas throughout your website.

And in case of `id`  selector, be mindful to use it. As Ids are mainly or traditionally used to interact with your HTML using JavaScript.

### *Conclude*
That's it, this is the difference between three different types of selectors, and how to use them to style your HTML elements. 

See you in the next lesson.
