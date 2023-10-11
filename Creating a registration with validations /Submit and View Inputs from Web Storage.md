## Saving data locally

## Storing as a JSON string

The keys and values in web storage can only be of `string` type. If we need to save a JavaScript object to web storage, we first need to convert it to string. To help us with that, JavaScript provides a built-in `JSON.stringify` method.

JSON stands for JavaScript Object Notation. It's a syntax for storing a complex object in string form for easy transmission. It's also easy for us to write manually.

You'll notice that JSON strings look the same as normal objects or arrays that we write in JavaScript. That's because this notation is taken directly from the JavaScript language. However, JSON is used universally across programming languages as a way to convert complex types into a string.

In JavaScript, you can convert a valid `JSON` string back into an object using the `JSON.parse` method.

```js
const userData = {
  name: "John Doe",
  themePreference: "Dark",
};

// Convert JSON Object to string representation.
const stringifiedUserData = JSON.stringify(userData);

// Let's check the type of the constant we just created.
console.log(typeof(stringifiedUserData)); // string

// Save the data to localStorage.
localStorage.setItem("userData", stringifiedUserData);

// Retrieve the string from localStorage.
const retrievedUserData = localStorage.getItem("userData");

// Convert the string back as JavaScript object.
const parsedUserData = JSON.parse(retrievedUserData);

// Let's check the type of the constant we just created by parsing the JSON string.
console.log(typeof(parsedUserData)); // object

// We should be able to access the `name` property now.
console.log(parsedUserData.name); // John Doe
```

## Retrieving data stored locally
