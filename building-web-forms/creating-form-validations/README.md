# Text

In this lesson, we will add validations to the form we created.

Before submitting data, it is crucial to ensure all required form controls are correctly filled. This is called form validation. Validation helps us ensure that the submitted data matches the requirements set for these form controls.

Validation done in the browser is called client-side validation, while validation done on the web server is called server-side validation.

In this lesson, we will focus on client-side validation.

If the data entered is correctly formatted, the application allows the data to be submitted. But, if the data is not in the proper format, we give the user an error message explaining what needs to be corrected and let them try again.

## Types of Form validation

There are two different types of client-side validation:

1. Built-in form validation, that uses HTML form validation features.
2. JavaScript validation, which is coded using JavaScript.

Built-in form validation has better performance than JavaScript, but it is not as customizable as JavaScript validation.

## Built-in form validation using HTML

Built-in validation is used to validate most user data without relying on JavaScript. This is done by using validation attributes on form elements.

Some commonly used validation attributes are listed below:

1. `required`: Specifies whether a form field needs to be filled in before the form can be submitted.
2. `minlength` and `maxlength`: Specifies the minimum and maximum length of text data (strings)
3. `min` and `max`: Specifies the minimum and maximum values of numerical input types
4. `type`: Specifies whether the data needs to be a number, an email address, or some other specific preset type.

If the data entered in a form field follows all the rules specified by the above attributes, it is considered valid. If not, it is considered invalid.

When an element is `valid`, the following things are true:

The element matches the `:valid` CSS pseudo-class, which lets you apply a specific style to valid elements.

If the user tries to send the data, the browser will submit the form, provided there is nothing else stopping it from doing so (e.g., JavaScript).

When an element is `invalid`, the following things are true:

The element matches the `:invalid` CSS pseudo-class, and sometimes other UI pseudo-classes (e.g., :out-of-range) depending on the error, which lets you apply a specific style to invalid elements.

If the user tries to send the data, the browser will block the form and display an error message.

Let us add validation to the form we created earlier. We will add `required` validation to the Name field we created.

```js

<form>
  <label for="name">Name</label>
  <input type="text" id="name" name="name" required>
</form>

```

We can add some styling to let the user know of the validation error scenario.

```css
input:invalid {
  border: 1px solid red;
}

input:valid {
  border: 1px solid black;
}
```

We can notice that when the user leaves the name field blank and clicks on the submit button the input text box is highlighted with red colour.

> Note: Showcase the above implementation in the browser.

## JavaScript validation

We use JavaScript validations in cases where we want to take control over the look and feel of error messages. They are also helpful while working with old browser versions that do not support HTML's built-in form validation.

Let us try adding validations for the Email field which we created earlier.

```js

<form>
  <label for="email">Email</label>
  <input type="email" id="email" name="email">
</form>

```

Now let us add the JavaScript code for validating if the email address provided is valid or not.

```js
const email = document.getElementById("email");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("This is not a valid email address!");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});
```

Below is how the above piece of code works.

First, we create a variable with a reference to the email input

We then add an event listener to the element that runs each time the value inside the input is changed.

We check whether the email input's `validity.typeMismatch` property provided by the `input` element returns `true`, meaning that the value entered is not the right format for an email address.

If so, we call the `setCustomValidity()` function with a message, which is displayed by calling `reportValidity()` function.

This renders the input `invalid`, so that when you try to submit the form, the submission fails and the error message is displayed.

If the `validity.typeMismatch` property returns `false`, we call the `setCustomValidity()` function with an empty string. This renders the input `valid`, so the form will submit successfully.

You can learn more about Form validation properties and how to use them in the following references.

1. [Form validations](https://www.w3schools.com/js/js_validation.asp)
2. [Learn JavaScript form validation](https://www.freecodecamp.org/news/learn-javascript-form-validation-by-making-a-form/)
3. [Form data constraint validations](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation)
