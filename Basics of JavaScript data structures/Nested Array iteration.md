It's pretty common to find arrays that contain values like strings, numbers, objects and booleans. However the value inside an array can also be another array. 

For example, consider a 2-dimensional array. This is an array whose values are themselves arrays. In JavaScript it'll look something like like this:

```js
let values = [
  [100, 99, 100],  // index 0
  [99, 99, 99],    // index 1
  [100, 100, 100]  // index 2
];
```

The `values` array contains 3 array items. Each array item contains 3 number type values. 

How do you iterate over such a 2D array? Or, how do you generate a 2D array using iteration?

Let us learn about such arrays using an example where we render multiplication tables to HTML.