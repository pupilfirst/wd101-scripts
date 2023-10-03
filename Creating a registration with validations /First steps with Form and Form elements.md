In this lesson, we will learn about HTML Forms and using Form controls within them to collect user input on web pages.

The HTML `form` element helps to create an HTML form for user input. It is used as a container for elements such as text fields, checkboxes, radio buttons and submit buttons.

Let's create a `form` that can collect user data. This element wraps all the other elements that go inside our form.

In the HTML document created earlier enter the following code.

```html
<form>## form elements</form>
```

You cannot have forms nested inside another form. That means you cannot have a `form` element inside another `form` element.

Now let's add a few form-related elements to the above `form`.

### Text fields

The `input` element with the type `text` is used to get Text-based user data from the web pages.

```js
<form>
   <input type="text" id="name" name="name">
</form>
```

The `type` attribute indicates what kind of input we want the user to enter. If we give a value of text to the `type` attribute, it means the input requires a text value to be entered.

There are many possible values for this particular attribute. Some possible values are email, password etc.

### The `Label` element

The `label` element defines a label for many form elements. It is used to provide context for the form elements.

> Action: Open the HTML Document created previously and add a Label to the Form element as below.

```js
<form>
   <input type="text" id="name" name="name">
   <label for="name">User Name:</label>
</form>
```

The `for` attribute associates the label with a particular form element. The way it matches is by the ID of the input element.

### Checkboxes

The `input` element with the type `checkbox` allows a user to select 0 or more options of a limited number of choices.

> Action: Open the HTML Document created previously and add a checkbox to the Form element as below.

```js
<input type="checkbox" id="checkbox" name="checkbox">
<label for="checkbox">Yes</label>
```

### Radio button

The `input` element with the type `radio` allows a user to select a single option from a limited number of choices.


```js
<input type="radio" id="radio" name="radio" value="true">
<label for="radio">True</label>
```

### Submit button

The `input` element with the type `submit` allows a user to send the collected form data to a web server.


```js
<button type="submit">Submit</button>
```

The above-mentioned controls are some basic form-related controls used across most web forms. Next, we will learn about using these controls to create a full-fledged web form to be used on our web page.