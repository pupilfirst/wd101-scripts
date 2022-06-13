# Text

Web Storage provides mechanisms to store key-value pairs in a much more intuitive way than using cookies. Traditionally cookies are used to save data in the client side. But cookies has a storage limit of 4KB. Cookies also get sent with every request to the server. With HTML5, web storage was introduced. The data stored using web storage APIs are never sent to the server.

There are two different APIs available:

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

The keys and values in web storage is of type string. If we need to save a JSON object to web storage, we first need to `stringify` it using `JSON.stringify` method.

```js
const userData = {
  name: "John Doe",
  themePreference: "Dark",
};

// convert JOSN Object to string representation
const stringifiedUserData = JSON.stringify(userData);

// save the data to localStorage
localStorage.setItem("userData", stringifiedUserData);

const retrievedUserData = localStorage.getItem("userData");

//parse it back as JSON object
const parsedUserData = JSON.parse(retrievedUserData);

console.log(parsedUserData.name); //  John Doe
```
