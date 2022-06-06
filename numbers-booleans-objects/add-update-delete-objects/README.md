# Script

We've already learned that, the **properties** are the most important part of any JavaScript object. Properties are the values associated with an object.

And in this lesson, we will learn to add, update and delete properties of an Javascript Object.

### Adding New Properties
There’re a few ways to add properties to an object in JavaScript. You can add new properties to an existing object by simply giving it a value.

Assume that you've a a *employee* object that already exists. One way is to add a property to this  *employee* object is, by using the **dot notation**:

```js
  employee.department = "Software";
```

We added the *department* property to the *employee* object above with value **Software**.

We can also add a property by using the bracket notation:

```js
employee['department'] = "Software";
```

It does the same thing as the previous example, but we can have invalid property identifiers in the string.


```js
employee['department-name'] = "Software";
```

### Updating Property value
To update a peopertie's value, simply assign it a new value. For example:
```js
const employee = {
  firstName: "John",
  lastName: "Doe",
  salary: 50000,
  department: "Software"
};

employee.salary = 120000

console.log(employee.salary)
```


### Deleting Property
The `delete` keyword deletes a property from an object, like:

```js
const employee = {
  firstName: "John",
  lastName: "Doe",
  salary: 50000,
  department: "Software"
};

delete employee.department;
```
This `delete` keyword deletes both the value of the property and the property itself. And, after deletion, the property cannot be used.

