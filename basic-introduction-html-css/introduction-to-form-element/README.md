In this video, we will learn about HTML Form element and how it is used to collect user input in web pages.

The HTML `form` element is used to create an HTML form for user input. It is used as a container for elements such as text fields, checkboxes, radio buttons and submit buttons.

Let's create a `form` that can get user data and perform an action.

> Action: Open the HTML Document created previously and add an Form element as below.

```js
<form>
    ## form elements
</form>
```

Now let's add a few form elements to the above element.

### Text fields

The `input` element with type `text` is used to get Text based user data from the web pages.

> Action: Open the HTML Document created previously and add a text field to the Form element as below.

```js
<form>
    <input type="text" id="name" name="name">
</form>
```


### The `Label` element

The `label` element defines a label for many form elements. It is used to provide context for the used form elements.

> Action: Open the HTML Document created previously and add a Label to the Form element as below.

```js
<form>
    <input type="text" id="name" name="name">
    <label for="name">User Name:</label>
</form>
```

### Checkboxes

The `input` element with type `checkbox` allows an user to select 0 or more options of a limited number of choices.

> Action: Open the HTML Document created previously and add a checkbox to the Form element as below.

### Radio button

The `input` element with type `radio` allows an user to select a single option from a limited number of choices.

> Action: Open the HTML Document created previously and add a radio button to the Form element as below.

### Submit button

The `input` element with type `submit` allows an user to submit the collected user data to the web server.

> Action: Open the HTML Document created previously and add a submit button to the Form element as below.