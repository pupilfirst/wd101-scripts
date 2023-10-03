# Text

Web Storage provides mechanisms to store key-value pairs in a much more intuitive way than using cookies. Traditionally cookies are used to save data in the client side. But cookies has a storage limit of 4KB. Cookies also get sent with every request to the server. With HTML5, web storage was introduced. The data stored using Web Storage APIs are never sent to the server. APIs or Application Programming Interface is a software intermediary that allows two applications to talk to each other.

There are two different Web Storage APIs available:

- sessionStorage

  - The values are stored only for the duration of page session. Page session is the duration through which the tab or window remains open.

  - Maximum of 5 MB can be stored.

  #### Basic Usage

  ```js
  // Save data to sessionStorage
  sessionStorage.setItem("name", "John Doe");

  // Get saved data from sessionStorage
  let name = sessionStorage.getItem("name");

  // Remove saved data from sessionStorage
  sessionStorage.removeItem("name");

  // Remove all saved data from sessionStorage
  sessionStorage.clear();
  ```

- localStorage

  - localStorage is similar to sessionStorage, but it doesn't have an expiry.
  - Data stored in localStorage is never sent to the server.
  - Data is shared between all tabs and windows from the same origin.

  #### Basic Usage

  ```js
  // Save data to localStorage
  localStorage.setItem("themePreference", "Dark");

  // Get saved data from localStorage
  const themePreference = localStorage.getItem("themePreference");

  // Remove saved data from localStorage
  localStorage.removeItem("themePreference");

  // Remove all saved data from localStorage
  localStorage.clear();
  ```

### Storing JSON objects

The keys and values in web storage can only be of `string` type. If we need to save a JSON object to web storage, we first need to convert it to string. To help us with that, JavaScript provides a built in `JSON.stringify` method.

And to do the reverse, ie. convert a valid `JSON` string to JSON, we can use the `JSON.parse` method.

```js
const userData = {
  name: "John Doe",
  themePreference: "Dark",
};

// convert JSON Object to string representation
const stringifiedUserData = JSON.stringify(userData);

// save the data to localStorage
localStorage.setItem("userData", stringifiedUserData);

const retrievedUserData = localStorage.getItem("userData");

//parse it back as JSON object
const parsedUserData = JSON.parse(retrievedUserData);

console.log(parsedUserData.name); //  John Doe
```
