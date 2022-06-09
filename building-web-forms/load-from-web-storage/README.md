# Script

In this video, we will save the data collected from user in client side using Web Storage APIs available in HTML5. Since we would like to persist the data even after the browser is closed, we should use `LocalStorage`.

We are collecting `name`, `email`, `password`, `date of birth` and `age group` in our `user form`.
We will now add a `save` button to persist these data to the LocalStorage.

> Action: Add a button with type submit to the user form.

Now let's actually add the functionality to save the data.

> Action: Switch to VS Code and write the following function. Explain we are using `getElementById` and `getElementsByName` selectors.

```js
const saveUserForm = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const ageGroup = [...document.getElementsByName("agegroup")].find(
    (item) => item.checked
  ).value;
  const userDetails = {
    name,
    email,
    password,
    dob,
    ageGroup,
  };
  localStorage.setItem("user-details", JSON.stringify(userDetails));
};

let form = document.getElementById("user_form");
form.addEventListener("submit", saveUserForm, true);
```

Now we need to invoke this function on the form submission. We will attach a handler to the form submission event and prevent the default behaviour from happening.

> Action: Click on save button. Open developer console and examine the localStorage data

Now, let's open the developer tools and head over to storage tab. We can see that, a new entry with key `user-details` has been created.

We can now try to populate our form with the data saved in localStorage.

For that, let's first add a button titled `fetch user details`.

> Action: Add a new button with title `fetch user details`

We can now attach an event handler on this button listening for click events.

```js
const loadButton = document.getElementById("load-button");
loadButton.addEventListener("click", function () {
  const userDetails = localStorage.getIten("user-details");
  if (userDetails) {
    const parsedUserDetails = JSON.parse(userDetails);
    document.getElementById("name").value = parsedUserDetails.name;
    document.getElementById("email").value = parsedUserDetails.email;
    document.getElementById("password").value = parsedUserDetails.password;
    document.getElementById("dob").value = parsedUserDetails.dob;
  }
});
```

> Action: close the browser, load the page again and click on the fetch user data button

Let's close the browser and open the file again. Now if we click on the load button, we can see that the data is getting populated correctly.

So in this lesson, we learned how to user localStorage API to persist data in client side and load it back when needed.

# Text

Web Storage APIs can be used to save the form state in the client side. LocalStorage can persist data even after browser or tab is closed. Since we can only store string values, we will have to use the `JSON.stringify` method to save an object to LocalStorage.

```js
const formState = {
  email: "john@example.com",
  name: "John Doe",
};
// convert JSON Object to string representation
const stringifiedFormState = JSON.stringify(formState);

localStorage.setItem('form-state', stringifiedFormState);

// retrieve the data from localStorage
const retrievedData = localStorage.getItem('form-state');

console.log(JSON.parse(retrievedData));
```
