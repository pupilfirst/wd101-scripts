# Script

## Part - 1

In this video, we will learn how to save data using `LocalStorage` API.

We currently have a form that collects few data like name, email etc. But we are not doing anything with it. We will save the data when the user clicks on the submit button.

Let's first add an `id` to the form so that we can refer it from JavaScript.

```html
<form id="user-form">
  <!-- .... -->
</form>
```

Now, let's actually add the functionality to save the data. Let's create an `index.js` file and link it with our HTML file. Next, we will get a reference to the form element.

```js
let form = document.getElementById("user-form");
```

Next, we need to listen to the form submission event. We can do that by attaching a listener to the form, which will listen to the `submit` event.

```js
form.addEventListener("submit", saveUserForm);
```

We currently don't have the listener defined, let's just do that. The listener takes a single argument, an event. In our case, it will be the click event on the button.

```js
const saveUserForm = (event) => {};
```

The browser will submit the form when a submit button is clicked. We can prevent is by calling `preventDefault` on the generated event.

```js
const saveUserForm = (event) => {
  event.preventDefault();
};
```

Next, we will pull data from each form input elements. We will use the `document.getElementById` selector to select each element. Once we select an element, we can just use the `value` attirbute to get the entered data.

```js
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const dob = document.getElementById("dob").value;
```

For checkbox, it would be `checked` attribute instead of `value`.

```js
const acceptTermsAndConditions = document.getElementById("acceptTerms").checked;
```

We will now create an entry object with these data.

```js
const entry = {
  name: name,
  email: email,
  password: password,
  dob: dob,
  acceptTermsAndConditions: acceptTermsAndConditions,
};
```

We can actually, simplify the object using ES6 shorthand notation.

```js
const entry = {
  name,
  email,
  password,
  dob,
  acceptTermsAndConditions,
};
```

Next, let's create an empty array to hold the entries.

```js
let userEntries = [];
```

Now, we can push the entry to our array.

```js
userEntries.push(userDetails);
```

Localstorage only accepts `string` key and value. So, to save the data, we need to convert the user entries array to string. We can use `JSON.stringify` to do that.

We will use the `setItem` method to save the data to localStorage.

```js
localStorage.setItem("user-entries", JSON.stringify(userEntries));
```

Save the file and reload the web page.

Let me open the developer console and navigate to `applications` tab. And select the `localStorage tab.` It is empty right now. Let's add some data and click the save button.

Let me refresh the content, and as you can see, the data is saved into localstorage.

## Part - 2

In this video, we will display the entries that are saved in the localStorage, on our web page.

For that, let's first add placeholder to display the data.

> Action: Add a h2 and div tag`

```html
<div
  class="relative bg-white px-6 mt-5 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg sm:px-10"
>
  <div class="mx-auto">
    <h2 class="text-3xl text-center font-bold leading-tight">Entries</h2>
    <div class="divide-y divide-gray-300/50" id="user-entries"></div>
  </div>
</div>
```

We will display the data as a table in the `div` with the `id` `user-entries`.

Let's work on loading the data from `localStorage`. Open the `index.js` file. We can write a function, `retrieveEntries` to load the saved data from localStorage.

> Add the following code.

```js
const retrieveEntries = () => {
  let entries = localStorage.getItem("user-entries");
  if (entries) {
    entries = JSON.parse(entries);
  } else {
    entries = [];
  }
  return entries;
};
```

We retrieve data using the `getItem` method. It will return a valid string if an entry with key is present, else, it would return `null`. Let's handle that. Since we are storing `JSON` data, while retrieving, lets convert it back to `JSON` format using the `JSON.parse` method. If there is no entry for the key, lets initialize with an empty array.

Next, we need to create a function that will display this data as a table. Let's create a function named `displayEntries`. We will fetch the entries from localStorage first.

```js
const savedUserEntries = retrieveEntries();
```

Next, we have to display this in a table.

So, we will have to format the data like

```js
/*
  <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    ...
  </tr>
  <tr>
    <td>John Doe</td>
    <td>john@doe.com</td>
    ...
  </tr>
</table>
  */
```

```js
const displayEntries = () => {
  const savedUserEntries = retrieveEntries();
  const tableEntries = savedUserEntries
    .map((entry) => {
      const nameCell = `<td class='border px-4 py-2'>${entry.name}</td>`;
      const emailCell = `<td class='border px-4 py-2'>${entry.email}</td>`;
      const passwordCell = `<td class='border px-4 py-2'>${entry.password}</td>`;
      const dobCell = `<td class='border px-4 py-2'>${entry.dob}</td>`;
      const acceptTermsCell = `<td class='border px-4 py-2'>${entry.acceptTermsAndConditions}</td>`;
      const row = `<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell}</tr>`;
      return row;
    })
    .join("\n");

  const table = `<table class="table-auto w-full"><tr>

  <th class="px-4 py-2">Name</th>
  <th class="px-4 py-2">Email</th>
  <th class="px-4 py-2">Password</th>
  <th class="px-4 py-2">dob</th>
  <th class="px-4 py-2">accepted terms?</th>
</tr>${tableEntries} </table>`;
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

let form = document.getElementById("user-form");
form.addEventListener("submit", saveUserForm);
displayEntries();
```

> Action: close the browser, load the page again

Let's close the browser and open the file again.Now can see that the data is getting populated correctly.

So in this lesson, we've learned, how to load data from localStorage and display it in our web page.

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
