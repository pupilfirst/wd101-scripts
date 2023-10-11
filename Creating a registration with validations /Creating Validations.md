In this lesson, we will add validations to the form we created.

Before submitting data, it is crucial to ensure all required form controls are correctly filled. This is called form validation. Validation helps us ensure that the submitted data matches the requirements set for these form controls.

Validation done in the browser is called `client-side` validation, while validation done on the web server is called `server-side` validation.

In this lesson, we will focus on client-side validation.

If the data entered is correctly formatted, the application allows the data to be submitted. But, if the data is not in the proper format, we give the user an error message explaining what needs to be corrected and let them try again.

## Types of Form validation

There are two different types of client-side validation:

1. Built-in form validation, that uses HTML form validation features.
2. JavaScript validation, which is written using JavaScript.

Built-in form validation has better performance than JavaScript, but it is not as customizable as JavaScript validation.

## Built-in form validation using HTML


Built-in validation is used to validate most user data without relying on JavaScript. This is done by using validation attributes on form elements.

Some commonly used validation attributes are listed below:

1. `required`: Specifies whether a form field needs to be filled in before the form can be submitted.
2. `minlength` and `maxlength`: Specifies the minimum and maximum length of text data (strings)
3. `min` and `max`: Specifies the minimum and maximum values of numerical input types
4. `type`: Specifies whether the data needs to be a number, an email address, or some other specific preset type.

If the data entered in a form field follows all the rules specified by the above attributes, it is considered valid. If not, it is considered invalid.

When an element is `valid`, the following are true:

The element matches the `:valid` CSS pseudo-class, which lets you apply a specific style to valid elements.

If the user tries to send the data, the browser will submit the form, provided there is nothing else stopping it from doing so (e.g., JavaScript).

When an element is `invalid`, the following are true:

The element matches the `:invalid` CSS pseudo-class, and sometimes other UI pseudo-classes (e.g., :out-of-range) depending on the error, which lets you apply a specific style to invalid elements.

If the user tries to send the data, the browser will block the form and display an error message.

> Note: Follow the instructions in the video below on the `index.html` file you have created in this level.

## JavaScript validation

We use JavaScript validations in cases where we want to take control over the look and feel of error messages. They are also helpful while working with old browser versions that do not support HTML's built-in form validation.

You can learn more about Form validation properties and how to use them in the following references.

1. [Form validations](https://www.w3schools.com/js/js_validation.asp)
2. [Learn JavaScript form validation](https://www.freecodecamp.org/news/learn-javascript-form-validation-by-making-a-form/)
3. [Form data constraint validations](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation)