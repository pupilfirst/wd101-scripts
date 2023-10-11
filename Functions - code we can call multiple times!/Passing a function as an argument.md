In JavaScript a function is also just a value like the string, number, boolean, object or array. The implication is that you can pass a function itself as an argument to another function. When functions are passed as arguments to other functions, we refer to them as **callback functions** or simply **callbacks**.

> **Why the name "callback"?**\
> Because we're passing some code that we expect a function to *call back* (execute).

To learn more about callback functions, we'll experiment with two functions available in the web browser:

1. `setTimeout`
2. `setInterval`

Both these functions accept a __callback__ function as its first argument. After a time delay the __callback__ function is executed (_"called back"_).