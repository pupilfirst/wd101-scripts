A function like `console.log` performs a side-effect. It does not return any value, but it prints the string we passed as an argument to the web browser console.

In our programs, we often need functions that can accept one or more arguments, perform some work, and then return the result of that computation.

In this lesson, you will learn how to do this.


**Video**

## Special Case: Arrow-functions without curly braces

There is one special case that you need to be aware of - single-expression functions. Here's an example.

```js
let sumOfSquaresSingleLine = (x, y) => Math.pow(x, 2) + Math.pow(y, 2);

let sumOfSquaresMultiLine = (x, y) => {
  return Math.pow(x, 2) + Math.pow(y, 2);
};
```

Both functions will return _sum of squares_ of two arguments. However, note how the _single-expression_ function omits the `return` keyword.

When the _body_ of a function is a single _expression_, the `return` keyword isn't required, and neither are the curly braces (`{ ... }`). The _result_ of that expression is automatically returned from the function.

Most commonly, this syntax is used to write compact, single-line functions to improve readability. However, it is possible to write a multi-line expression in the same way. You'll find an example of this in a later lesson.

However, when your function needs multiple statements to execute, the curly braces are **required** and are used to delimit the operations performed by the function. In this case, the `return` keyword is also **required** for the function to _return_ anything. When curly braces are used, if you fail to write a `return` statement, your function will always return the value `undefined`.

```js
let foo = () => 1;

let bar = () => {
  // Without an explicit 'return', this function will always return `undefined`.
  1
};

foo(); // 1
bar(); // undefined
```