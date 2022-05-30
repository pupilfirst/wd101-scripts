# Script

In this lesson, we will learn how to access data from a JavaScript object.

> Action: Open the JavaScript file from the previous lesson.

_TODO:_ Need to update the example based on Avishek's example once his script for previous lessons is complete.

> Action: Add the following example.

```javascript
const iPhone13 = {
  make: "Apple",
  model: "iPhone 13",
  year: 2021,
};
```

We can access data from an object in several ways. Let's start with the `dot` syntax.

> Action: write `console.log(iPhone13.make);`

```javascript
console.log(iPhone13.make); // Apple
```

It will print `Apple` onto the developer console.

The next way to access the data is by using the string value. We enclose the key in between square brackets `[` and `]`.

> Action: Write `console.log(iPhone13["model"]);`

```javascript
console.log(iPhone13["model"]); // iPhone 13
```

You can also store this value in a variable and use it for accessing the data.

> Action: Update the example by extracting `model` into a variable.

```javascript
const modelKey = "model";
console.log(iPhone13[modelKey]); // iPhone 13
```

If we save the file and reload the page, we can see the exact text.

## Conclusion

In this lesson, we learnt how to access data from a JavaScript object. We can use the `dot` syntax or the `key` wrapped between `[` and `]` to access the value.

# Text

We can access data from an object in the following ways:

- Dot syntax

  ```javascript
  const iPhone13 = {
    make: "Apple",
    model: "iPhone 13",
    year: 2021,
  };
  console.log(iPhone13.make); // prints Apple.
  ```

- String value

```javascript
const iPhone13 = {
  make: "Apple",
  model: "iPhone 13",
  year: 2021,
};
console.log(iPhone13["make"]); // prints Apple.
```

We can also use a variable instead of a string value.

```javascript
const makeKey = "make";
console.log(iPhone13[makeKey]); // prints Apple.
```
