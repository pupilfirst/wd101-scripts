Hey there, in this lesson we will learn two very key concepts of CSS - the concept of Order and Inheritance.

### Cascading order
The term **cascading** means hierarchical order in which different stylesheet types interact when two styles come into conflict. The conflict occurs when two different styles are applied to the same element.

For these kind of cases, there is an order for stylesheets according to their priority.
- Browser Defaults.
- External Style Sheets (Linked or Imported).
- Internal Style Sheets (Embedded).
- Inline Styles.

Here, **Browser Defaults** have the lowest priority, then comes the **External Style Sheets**, then **Internal Style Sheets** and finally **Inline Styles**, which has the highest priority.

It also means that, when a conflict arises between two styles, this order will come to effect.

To make it clearer:
- You must place **inline styles** in the `<body>` of the HTML document, and **internal stylesheets** must be placed in the <head> of the HTML document. So that, the inline styles will always be the last used ones and therefore they will take precedence.

### Inheritance

HTML uses parent-child relationships. A child element will usually inherit the characteristics of the parent element. For example, look at the following code.

> Action: Open VS Code

````
  <html>
    <head>
      <style>
        body {
          color: blue;
        }
      </style>
    </head>
    <body>
      <p>
        Hey we've learning CSS inheritance.
      </p>
    </body>
  </html>
````

Since the `<p>` tag, which is our child element, is inside of the `<body>` tag, which is the parent element, it will take all the styles given to the `<body>` tag. 

But if you want the *paragraph* to take on some rules of the `body` but not others, you can override the rules you don’t want. Like:

> Action: Open VS Code

````
  <html>
    <head>
      <style>
        body {
          color: blue;
        }
        p {
          color: red;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <p>
        Hey we've learning CSS inheritance.
      </p>
    </body>
  </html>
````

#### Internal Priorities

Now, the selectors have their set of priorities as well. The **ID** selector has the highest priority, followed by **class** and **element** selectors.

It means that, if you have an element with a **class** and **ID** selector with different styles, it is the **ID** style that takes precedence. 

> Action: Open VS Code

##### Let’s see an example of overriding CSS style with the ID selector:


````
  <html>
    <head>
      <style>
        #testid {
          color: blue;
          font-weight: bold;
        }
        .example {
          color: red;
          font-weight: normal;
        }
      </style>
    </head>
    <body>
      <p id="testid" class="example">
        Hey we're learning CSS priorities.
      </p>
    </body>
  </html>
````

> Action: Show the output on browser

As we can see, the **Class** was placed after the **ID**, but the **ID** still takes precedence.

##### Let’s see another example of overriding CSS style with the Class selector:

> Action: Open VS Code

````
  <html>
    <head>
      <style>
        #testid {
          color: #777777;
          font-style: normal;
          background-color: lightgreen;
        }
        .example {
          display: block;
          color: whitesmoke;
          font-style: italic;
          background-color: lightblue;
          padding: 20px;
        }
      </style>
    </head>
    <body>
      <div id="testid">
        <span class="example">
          Hey we're learning CSS priorities.
        </span>
      </div>
    </body>
  </html>
````

Here, the **Class** selector overrode the **ID** selector, because it was the last used one. An **ID** selector only takes precedence over a **Class** selector if they are both used in the same element.

#### The use of **important!**

An **!Important** declaration is a great way to override the styles you want. When an **important** rule is used on a style declaration, this declaration will override any other declarations. Let’s see how you can use the !important declaration to override inline styles.

> Action: Open VS Code

````
  <html>
    <head>
      <style>
        .box[style*="color: red"] {
          color: white !important;
        }
        .box {
          background-color: blue;
          padding: 15px 25px;
          margin: 10px;
        }
      </style>
    </head>
    <body>
      <div class="box" style="color: red;">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </div>
    </body>
  </html>
````

> Explain the code

However, you should avoid using **!important**, because it makes debugging more difficult by breaking the natural cascading in your stylesheets.

### To conclude
In the next lesson, we will continue our CSS journey, and we will use these rules to design beautiful user interfaces.
