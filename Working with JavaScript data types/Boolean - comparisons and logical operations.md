A boolean `true` or `false` value represents the result of comparing two values whether they are of the String, Number or any other type. The JavaScript language also has boolean operators. 

You can build simple predicates (expressions which return a boolean type value) and compose them with other predicates to build complex conditions. These complex conditions often represent some rules or policies in the real world which we can represent in the program.

In this lesson you'll learn how all of this works in practice.

**Video**

## Special syntax: Single-line if-s

In the above video, you've seen us write `if` followed by some code in curly braces (`{ ... }`).

With simple statements, it's actually possible to leave out the curly braces. For example:

```js
// Using curly braces.
if (isValidPassword) {
  console.log("This password is valid!");
}

// Leaving out the curly braces.
if (isValidPassword) console.log("This password is valid!");
```

Both the examples above do the same thing. The latter is simply shorter.

In most cases, you'll want to use curly braces to _contain_ your code; however, it is possible to leave it out if the result or action because of an expression is simple.
