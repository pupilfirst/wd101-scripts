If you're having trouble completing the assignment that we've given you in this level, where we ask you to extract initials from a variety names, then this lesson should help you, a _bit_.

If you haven't attempted to complete that yet, please don't watch this video now. Come back to this video only if you're having trouble with it.

Let's take a look at the problem. Let me start by writing out three names:

```js
let name1 = "John";
let name2 = "John Doe";
let name3 = "John Doe Smith";
```

These are three names that we can work with. Let's apply the rules of the assignment, and see what their initials should be.

Let's start with that first name. John.

```js
let name1 = "John"; // JO
let name2 = "John Doe"; // JD
let name3 = "John Doe Smith"; // JS
```

The rules say that if it's a one-word name, we need to use the first two characters of the name.

If a name has got two or more words, then we need to use the first characters of the first word in the name, and the last word of the name.

Now that we can see both the input, and the output, we need to think about how we can get from one to the other.

Let's look at the first name - `name1`, which is `"John"`, and think about what we need to do to convert that to `JO`.

I'm simply going to write down what I think needs to be done.

So first of all...

```js
// I need to get the first two characters of the string
```

But I don't know how to do this. This isn't a topic that we have covered in this course. So how _do_ you actually get the first two characters of a string?

Well, the easiest way to find out is to simply _Google_ it.

I'm going to simply copy this text that I've written here, and paste it into Google.

> ACTION: Paste the string into Google and search.

The results aren't exactly what I'm looking for. The first result is for the _Java_ programming language. I want to know how to do this in Javascript, so I'll actually simply write javascript at the front of my query.

The first result that shows up for me is the _sub-string_ function. This looks promising. Let's open that up and take a look.

> ACTION: Click on https://www.w3schools.com/jsref/jsref_substring.asp and go through the contents of the page.

So, let's try writing that in our file.

```js
// I need to get the first two characters of the string
let firstTwoLetters = name1.substring(0, 2); // Jo
```

I'll call the substring function, and I know that it needs the start index, and the end index (which will be excluded). So to get `Jo`, I need to give it `0`, so that it starts at J, and then `2` as end, so that it ends at `o`.

So that solves one problem. But notice how what I actually want from this name is a string with the letters `J` and `O`, _both_ in capital letters. But in this string that we've extracted, `o` is a small letter. So I have another problem to solve. Let me write that down.

```js
// I need to convert a string to all caps
```

That's the problem. However, I also know that I need an answer specifically for Javascript, so I'll change that sentence a bit.

```js
// I need to convert a string to all caps in Javascript
```

What do you think we need to do with this? That's right _Google_ it.

> ACTION: Google `I need to convert a string to all caps in Javascript`

This process that you're looking at is something that developers all over the world do every day.

We always encounter problems where we don't know the answer. So what we do is to search for a solution using a search engine like _Google_.

Knowing exactly what to search for, how to write a search query, these are things that you'll get better at over time - but you do need to get _started_.

So, when you're trying to complete the assignment in this level, if you're having problems, write down the thing that you're trying to do in plain english, add the term `javascript` to it, and search for a result on your favorite search engine. Chances are that you'll find what you're looking for in the first few results.

That's it for this lesson. Please give that assignment another try. Good luck, and make sure you have fun!
