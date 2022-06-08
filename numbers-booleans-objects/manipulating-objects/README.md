# Text
We've already learned that an object can be created with curly brackets `{…}` with an optional list of *properties*. A property is a `key: value` pair, where **key** is a string (also called a **property name**), and **value** can be anything.

In this lesson, we will learn about the basic manipulations that we can perform on any JavaScript object.

### Object Declaration:
An empty object (empty cabinet) can be created using one of two syntaxes:

```js
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax
```

### Accessing Object Properties:
We can access object properties in two different ways. One of them is bracket notation.
```js
object[key]
```
and the other one is the dot notation.
```js
object.key
```

```js
  const user = {
    name: "Avishek",
    age: 30,
    experience: {
      year: 9,
      skills: 'Ruby, React.Js'
    }
  };
  console.log(user["experience"]["year"]) //9
  console.log(user.experience.skills) //Ruby, React.Js
```

### Get Values from an Object: Object.values()
We can get an array of the values of an object.
```js
  const user = {
    name: "Avishek",
    age: 30,
    experience: 9
  };
  const userValues = Object.values(user);
  console.log(userValues) //["Avishek", 30, 9]
```

### Get Keys from an Object: Object.keys()
We can get an array of the keys of an object.
```js
  const user = {
    name: "Avishek",
    age: 30,
    experience: 9
  };
  const userKeys = Object.keys(user);
  console.log(userKeys) //["name", "age", "experience"]
```

### Merging Objects
We can merge two objects and return a new object.
```js
  const user = {
    name: "Avishek",
    age: 30,
    experience: 9
  };
  const newObj = {
    ...user,
    location: 'Kolkata'
  }

  console.log(newObj);
```

### Freezing An Object: Object.freeze()
The method `Object.freeze` freezes an object.

A frozen object can’t be changed. It prevents properties from being added and removed. It also prevents the values of properties from being changed - unless it’s an object.

You can check if an object is frozen by using: `Object.isFrozen()`.
```js
const user1 = {
  age: 30,
  mobile: 8899219992,
  name: "Avishek"
}
Object.freeze(user1);
user1.name = 'Jana';
console.log(user1.name) //"Avishek"

console.log(Object.isFrozen(user1)) // true
```

### Sealing an object: Object.seal()
**`Object.seal`** is a similar method to `Object.freeze()`. It prevents you from adding or deleting properties of an object, but you can change the value of an existing property.

Similarly, you can check if an object has been sealed by using `Object.isSealed()`
```js
const user1 = {
  mobile: 8899219992,
  name: "Avishek"
}
Object.seal(user1);

user1.name = 'Jana';
console.log(user1.name) //"Jana"

user1.age = 26;
console.log(user1.age) //undefined

console.log(Object.isSealed(user1)); // true
```