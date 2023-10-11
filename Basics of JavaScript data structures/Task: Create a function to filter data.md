## Create a log date filter function

Let's get hands-on and test what you have learned by trying to implement a small function.

The function should accept an array of log entries (objects). Here's an example log entry object to understand its shape.

``` javascript
{ name: "Harry" , date: "2021-01-21T02:53:42+05:30" }
```

The function should accept an array of these objects and return the names of those entries whose date matches the current date, as a string. The names should be separated by a comma.

For example, if today is the 21^st^ of January 2021 (2021-01-21), and the function is given an array of these three entries:

``` javascript
[
  { name: "Harry", date: "2021-01-21T02:53:42+05:30" },
  { name: "Hermione", date: "2021-01-22T02:53:42+05:30" },
  { name: "Ron", date: "2021-01-21T03:53:42+05:30" }
]
```

...the function should return the value `Harry,Ron`.

Note how the names are separated by a comma without any spaces in between.

We have prepared a skeleton JS file which you can download and work on. You need to implement the `todaysEntries` function without changing the function name or any other part of the file.

## Important instructions

1. Changing the name of the function will lead to the rejection of your submitted code.
2. Make sure you `return` a string from the function - do not print it to the console.
3. Do not remove the `module.exports = ...` line when submitting your JS file. That line is required for automated tests to work properly.
4. You may need to comment out the `module.exports = ...` line to run the JS file in the browser, but don't forget to restore it before uploading the file here.