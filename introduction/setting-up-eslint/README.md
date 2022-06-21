# Text

In this lesson, we will learn to set up the ESLint extension for Visual Studio Code.

Visual Studio Code provides a lot of inbuilt features to improve the speed at which we write code. Additionally, we can install extensions for Visual Studio Code that can help with code quality and readability.

The ESLint Visual Studio Code extension, which we will use in this lesson, will also help with other JavaScript-related projects.

## Code Quality using ESLint

Code quality is an important aspect when we write code. Writing quality code helps you limit issues and errors in your application.

We can identify and fix issues that we might have missed while coding, with the help of tools like `ESLint`.

ESLint analyses your code to quickly find problems. It is the standard tool for identifying and reporting on coding patterns found in JavaScript code. The goal of ESLint is to make code more consistent while avoiding bugs. `ESLint` is intelligent enough to suggest fixes to most issues it finds out.

You can install the same from [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

> Action: Open Visual Studio Code Marketplace and explain the installation process.

ESLint can showcase line errors and possible solutions on each line of your application.

> Action: Open Visual Studio Code and show examples of ESLint error highlights.

> Sample code - Throws, value hello declared but never used error.

```js
let hello = "Hello";

function returnHello() {
  return "Hello";
}

returnHello();
```

It can provide a project-wide issue list on the issues tab of your Visual Studio Code, which you can fix one at a time.

> Action: Open Visual Studio Code and show examples of ESLint error highlights.

> Sample code - Save the previous code as `test1.js` and the below as `test2.js` inside the same folder before opening the issues tab. This should showcase all errors from both files.

```js
function helloWorld() {
  return hello;
}
```

While there are many configurations available for ESLint, we will stick with the default configuration that ESLint provides.
