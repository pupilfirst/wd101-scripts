Another operation that you frequently need to do on an array of values is to select a few from the list, that match one or more conditions. We call this filtering. 

To filter an array we can use the array `filter` method. Whereas `map` returns an array with the same number of values as the input array, this is not necessarily true for `filter`.

The result of filtering an array could return any number of results, up to the original length of the array. This means that, depending on the criteria, the resulting array could be empty (no element satisfies the criteria), the same as the original array (all elements satify the criteria), or some length less than the original array (some elements satify the criteria).

The `filter` function works very similarly to the `forEach` and `map` functions.

The callback function provided to a `filter` function should return either `true` or `false`. The callback function is expected to run a test on the array value. If it meets the filtering criteria, then return `true`. This includes that value in the resulting array. If the callback function returns `false` the corresponding value is excluded from the resulting array.

Let us try it out with a working example.