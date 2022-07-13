# Script

In this video, we will learn to save the data collected from the user form, in the browser itself, using the Web Storage APIs available in HTML5. Since we would like to persist the data even after the browser is closed, we should use `LocalStorage`.

We are collecting `name`, `email`, `password`, and `date of birth` in our `user form`.
We will now add a `save` button to save and persist these data to the LocalStorage.

> Action: Add a button with type submit to the user form.

```html
<input type="submit" value="Add" />
```

Now let's actually add the functionality to save the data. We will also display the details in a table once user submits the form.

> Action: Switch to VS Code and write the following function. Explain we are using `getElementById` and `getElementsByName` selectors.

```js
let userEntries = [];
const saveUserForm = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptTermsAndConditions =
    document.getElementById("acceptTerms").checked;
  const userDetails = {
    name,
    email,
    password,
    dob,
    acceptTermsAndConditions,
  };
  userEntries.push(userDetails);
  localStorage.setItem("user-entries", JSON.stringify(userEntries));
};

let form = document.getElementById("user_form");
form.addEventListener("submit", saveUserForm, true);
```

Now we need to invoke this function on the form submission. We will attach a handler to the form submission event and prevent the default behaviour from happening.

> Action: Click on save button. Open developer console and examine the localStorage data

Now, let's open the developer tools and head over to storage tab. We can see that, a new entry with key `user-entries` has been created.

We can now try to display the data saved in localStorage.

For that, let's first add a level 2 header and a `div` with id `user-entries`.

> Action: Add a h2 and div tag`

```html
<h2>Entries</h2>
<div id="user-entries"></div>
```

We can now add code to load the data from `localStorage`. First we will try to retrieve data from localStorage, if no entry is available, we will start with an empty array.

> Add the following code.

```js
let userEntries = localStorage.getItem("user-entries");
if (userEntries) {
  userEntries = JSON.parse(userEntries);
} else {
  userEntries = [];
}
```

Next, we need to create a function that will display a table with entries.

```js
const displayEntries = () => {
  const savedUserEntries = localStorage.getItem("user-entries");
  let entries = "";
  if (savedUserEntries) {
    const parsedUserEntries = JSON.parse(savedUserEntries);
    entries = parsedUserEntries
      .map((entry) => {
        const name = `<td>${entry.name}</td>`;
        const email = `<td>${entry.email}</td>`;
        const password = `<td>${entry.password}</td>`;
        const dob = `<td>${entry.dob}</td>`;
        const acceptTerms = `<td>${entry.acceptTermsAndConditions}</td>`;
        const row = `<tr>${name} ${email} ${password} ${dob} ${acceptTerms}</tr>`;
        return row;
      })
      .join("\n");
  }
  var table = `<table border='1' width='100%'><tr>
      <th>Name</th>
      <th>Email</th>
      <th>Password</th>
      <th>dob</th>
      <th>accepted terms?</th>
    </tr>${entries} </table>`;
  let details = document.getElementById("user-entries");
  details.innerHTML = table;
};
```

We will invoke the `displayEntries` method when the form is submitted and when the page is loaded for the first time.

> Add / update following code.

```js
const saveUserForm = (event) => {
  //  ....
  // ...

  userEntries.push(userDetails);
  localStorage.setItem("user-entries", JSON.stringify(userEntries));

  displayEntries(); // Add this line
};

let form = document.getElementById("user_form");
form.addEventListener("submit", saveUserForm, true);
displayEntries();
```

> Action: close the browser, load the page again

Let's close the browser and open the file again.Now can see that the data is getting populated correctly.

So in this lesson, we've learned, how to store and persist user data in client side (browser) using the localStorage API. We've also learned, to load the data stored from the localStorage, when needed.

# Text

Web Storage APIs can be used to save the form state in the client side. LocalStorage can persist data even after browser or tab is closed. Since we can only store string values, we will have to use the `JSON.stringify` method to save an object to LocalStorage.

```js
const formState = {
  email: "john@example.com",
  name: "John Doe",
};
// convert JSON Object to string representation
const stringifiedFormState = JSON.stringify(formState);

localStorage.setItem("form-state", stringifiedFormState);

// retrieve the data from localStorage
const retrievedData = localStorage.getItem("form-state");

console.log(JSON.parse(retrievedData));
```
