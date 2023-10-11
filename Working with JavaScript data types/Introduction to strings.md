
# Mastering Strings in JavaScript


Strings are one of the fundamental type of values for representing text in the JavaScript programming language. This lesson will teach you how to create strings, store them in variables for later use and print them to the web browser console for display.

**Video**

## Additional reading: `let`, `const` and `var`.

In this lesson, you've seen us define variables using the `let` keyword. For most of this course, we'll be using the `let` keyword to create variables.

There are two other ways to create variables: `const` and `var`:

### `const`

The `const` keyword creates immutable values. For example:

```js
const myString = "Hello world";

// The following line will cause an error.
myString = "Another string";
```

Constants, once created, cannot be reassigned to a new value. Trying to do so will cause an error.

### `var` 

In older scripts, you may also find another keyword: `var` instead of `let`.

The `var` keyword is _almost_ the same as `let`. However, it is an _old_ way of defining variables, and can have some surprising behavior. It is almost never used in modern JavaScript code, and we will avoid using `var` as much as possible in this course.

If you'd still like to learn more, here's an excellent resource on [the old "var"](https://javascript.info/var).