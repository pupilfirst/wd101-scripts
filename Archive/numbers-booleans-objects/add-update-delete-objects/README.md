# Script
We already know that **properties** are the most important part of any JavaScript object. They are the values associated with an object.

Here, we will learn to add, update and delete properties of an Javascript Object.

### Adding New Properties
There’re a few ways to add properties to an object in JavaScript. You can add new properties to an existing object by simply giving it a value.

Assume that you've an *user* object  with the following definition:
```js
const user = {
  name: "Virat",
  age: 32
};
```

One way to add a property to this  *user* object is, by using the **dot notation**:

```js
  user.email = "virat@gmail.com";
```

We've added the *email* property to the *user* object above with value **virat@gmail.com**.

We can also add a property, by using the bracket notation:

```js
user['email'] = "virat@gmail.com";
```

It does the same thing as the previous example, but we can have invalid property identifiers with hyphen or space with this notation.

```js
user['date-of-birth'] = "10-04-1990";

console.log(user.age)
```

### Updating Property value
To update a property's value, simply assign it a new value. For example:
```js
const virat = {
  name: "Virat",
  age: 32,
  email: "virat@gmail.com"
};

virat.age = 33

console.log(virat.age)
```


### Deleting Property
The `delete` keyword deletes a property from an object, like:

```js
const kohli = {
  name: "Virat Kohli",
  age: 32,
  email: "virat@gmail.com"
};

delete kohli.age;
```
This `delete` keyword deletes both the value of the property and the property itself. And, after deletion, if you would try to access the property, it would return `undefined`.

