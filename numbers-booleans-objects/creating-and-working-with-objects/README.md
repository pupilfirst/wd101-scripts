# Script

In this lesson, we will learn about Javascript Objects. 
In Javascript, an object is something which is very powerful, and you are going to work with them all the time. So, let's get started.

### Overview 
A Javascript object is a collection of named values. Like many other programming languages, it can be compared to objects in real life. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of. In the same way, JavaScript objects can have properties, which define their characteristics.

### Objects & Properties
The properties of an object define the characteristics of the object. Object properties are basically the same as ordinary JavaScript variables, except their attachment to the objects. You access the properties of an object with a simple dot-notation:

```js
objectName.propertyName
```

Like all JavaScript variables, both the object name and property name are case-sensitive. You can define a property by assigning it a value. 

For example, let's create an object named `myComputer` and give it properties like `name`, `processor`, `ram` and `price` as follows:

> Action: Open browser console or VS Code to create this code and also explain on the go

```js
const myComputer = {
  name: 'Macbook Air',
  processor: 'Intel i5',
  ram: '8GB',
  price: 65000
}
```


The above example could also be written as:

```js
const myComputer = new Object();
myComputer.name = 'Macbook Air';
myComputer.processor = 'Intel i5';
myComputer.ram = '8GB';
myComputer.price = 65000;
```

Now, you can read the property values from this object, like:

```js
myComputer.name

// or
myComputer.processor

// Unassigned properties
myComputer.storage // will return **undefined**
```

One important point to remember,
An object property name can be any valid JavaScript string, or anything that can be converted to a string, including the empty string.

However, if any property name that has a space or a hyphen or that starts with a number, can only be accessed using the square bracket notation. Let's see how

```js
const myComputer = {
  name: 'Macbook Air',
  processor: 'Intel i5',
  ram: '8GB',
  price: 65000,
  "storage space": "256 GB"
}

// "storage space" property can be accessed like:
myComputer["storage space"]

```

### To conclude
That's it for this lesson, in the next one we will learn to update and delete properties of an object. See you there.



