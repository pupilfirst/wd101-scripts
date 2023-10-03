The multiplication tables we built earlier uses a 2-dimensional (2D) array. It was generated through nested iteration. The outer iteration happened over the numbers, and the inner iteration happened over the multipliers.

Here we will see how the code becomes simpler when the `forEach` is substituted with the `map` function.

The inner iteration generates a single table containing the multiplication line items. This can be done using `map`. The outer iteration generates all the multiplication tables which are arrays themselves. This too can be done using `map`.

Let us see how that can be done.
