# Text

Web Storage provides mechanisms to store key value pairs in a much more intuitive way than using cookies.

There are two different APIs available:

- sessionStorage

  - The values are stored only for the duration of page session. The values get cleared when the tab is closed.

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
