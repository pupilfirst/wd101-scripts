# Text

Every JavaScript objects has properties associated with it. And there are two ways to access those properties: 1) using `dot notation` and 2) using `bracket notation`.

#### Dot notation
```js
  objectName.propertyName
```

```js
  // Let's define a object
  const user = {
    name: 'Sachin Tendulkar',
    email: 'sachin@gmail.com',
    age: 52
  };

  user.name // Returns: Sachin Tendulkar
  user.age // Returns: 52
```

When we try to access a property of an object which is not defined yet, it returns `undefined`. For example:

```js
user.address; // undefined
```

#### Bracket notation
In JavaScript, objects are sometimes called associative arrays, since each property is associated with a string value that can be used to access it. So, for example, you could access the properties of the **user** object like:

```js
  user['name'] // Returns: Sachin Tendulkar
  user['email'] // Returns: sachin@gmail.com
```

In JavaScript objects, property name can be any string, or anything that can be converted into a string. Means, if a property name has a space or a hyphen, or if it starts with a number, that can only be accessed using the **bracket notation**.

```js
  // Adding such properties which are not a valid JS identifier
  user['date of birth'] = '19 July 1970';
  user['favourite-color'] = 'Red';
  user[''] = 'Cricketer'; // yes, even an empty string can be a property name
  user[1234] = 'India';

  // All of these properties can only be accessed via bracket notation. Try it out.
  console.log(user)
```
