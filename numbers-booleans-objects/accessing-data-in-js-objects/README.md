# Text

Every Javascript objects has properties associated with it. And there are two ways to access those properties: 1) using `dot notation` and 2) using `bracket notation`.

#### Dot notation
```js
  objectName.propertyName
```

```js
  // Let's define a object
  const myCar = {
    make: 'Ford',
    model: 'Aspire',
    year: 2020
  };

  myCar.model // Returns: Aspire
  myCar.year // Returns: 2020
```

When we try to access a property on object which is not defined yet, it returns `undefined`. For example:

```js
myCar.color; // undefined
```

#### Bracket notation
In Javascript, Objects are sometimes called associative arrays, since each property is associated with a string value that can be used to access it. So, for example, you could access the properties of the **myCar** object like:

```js
  myCar['make'] // Returns: Ford
  myCar['year'] // Returns: 2020
```

In Javascript objects, property name can be any string, or anything that can be converted into a string. Means, if a property name has a space or a hyphen, or if it starts with a number, that can only be accessed using the **bracket notation**.

```js
  // Adding such properties which are not a valid JS identifier
  myCar['launch date'] = 'June 2019';
  myCar['popular-color'] = 'Red';
  myCar[''] = 'Compact Sedan'; // yes, even a empty string can be a property name
  myCar[1234] = 'India';

  // All of these properties can only be accessed via dot notation. Try it out.
  console.log(myCar)
```