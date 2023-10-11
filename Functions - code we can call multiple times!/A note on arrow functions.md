There are two ways in which functions can be defined:

1. Traditional definition using the `function` keyword.
2. Arrow function.

Traditionally, functions were defined using the `function` keyword. For example,

```js
function someFn() {
  // ...
}
```

Modern JavaScript provides a new (and arguably better) way of defining a function, called **arrow function**. This approach treats a function just like variables and is defined using `let` or `const` keywords. Here's an example of an _arrow function_ that's equivalent to the above _traditional_ function:

```js
const someFun = () => {
  // ...
}
```

Let's now see how we would approach calculating the _sum of two numbers_ using both of these approaches. 

## Using a traditional function

```js
function add(a, b) {
  return a + b;
}

let sum = add(2, 3);
console.log("Sum is: ", sum); // Sum is 5
```

Here, the `add` function accepts two arguments, computes their sum in the body of the function and returns the calculated value.

## Using an arrow function

```js
const add = (a, b) => {
  return a + b;
}

let sum = add(2, 3);
console.log("Sum is: ", sum); // Sum is: 5 
```

Arrow functions can also be used to write single-line *arrow function expressions*. If we leave out the curly braces (`{ ... }`), we can also leave out the `return` keyword, and the function will still return the value of the function's expression. Here's an example:

```js
let add = (a, b) => a + b;
let sum = add(2, 3);
console.log("Sum is: ", sum); // Sum is: 5 
```

Note that such arrow function expressions can exclusively be used for single-line operations. If you need to write multiple lines of code in a function, you'll need to use curly braces and the `return` keyword.