> **Target title**: Taking Control

# Script

In the last lesson, we stopped at having loaded the three different animations that we want to play, and in this lesson we want to let the user play the _kick_ or the _punch_ animations by clicking these buttons.

In fact, we only want to let the user either _kick_ or _punch_. While neither of those actions are taking place, it would be good if the idle animation is played on a loop. So let's do that first.

When we look at how the animation is initially played, it's pretty clear that we want to start playing the idle animation _after_ the last animation has completed.

What we need to do is to set up an infinite loop of animation. An easy way to do that here is to use recursion.

```js
loadImages().then((images) => {
  let selectedAnimation = "idle";

  let aux = () => {
    animate(ctx, images, selectedAnimation).then(aux);
  };

  aux();
});
```

That seems to be working OK. Right now, the `selectedAnimation` is stuck at `idle`. What we want to do is to change it when the user presses one of these buttons.

Let's find out how we can detect when a user clicks a button.

> Google `js detect button click`.

As usual, the first result on StackOverflow looks promising.

> Click on _How to check whether a Button is clicked by using JavaScript..._

We have a question from someone who's trying to detch a button click and then do something. Let's check out the top answer.

The answer is very simple - it says, get the button element, set the onclick property. It seems to be taking a function that will get called when the button is clicked. Let's try using that.

```js
aux();

document.getElementById("kick").onclick = () => {
  selectedAnimation = "kick";
};

document.getElementById("punch").onclick = () => {
  selectedAnimation = "punch";
};
```

That seems to work!

_However_, it appears that the animation keeps on looping with the last selected move.

This would work much better if the animation returned to `idle` once the user-selected animation is complete. In fact, this experience would work much better if we could click these button multiple times, and then expect the animation to be played the number of times we clicked, after which it would return to the `idle` animation.

Let's try implementing that using a _queue_. I'll replace the `selectedAnimation` with a queue of animations

```js
  let aux = () => {
    let queuedAnimations = [];
```

Then I can pick the `selectedAnimation` inside the `aux` function. When the queue is empty, we'll say that the selected animation is `idle`, and when it's not, we'll `shift` from the queue to get the element that was inserted first.

```js
let aux = () => {
  let selectedAnimation;

  if (queuedAnimations.length === 0) {
    selectedAnimation = "idle";
  } else {
    selectedAnimation = queuedAnimations.shift();
  }

  animate(ctx, images, selectedAnimation).then(aux);
};
```

Similarly, in the `onclick` handlers, instead of replacing the `selectedMove`, I'll simply `push` the name of selected animation into the queue.

```js
document.getElementById("kick").onclick = () => {
  queuedAnimations.push("kick");
};

document.getElementById("punch").onclick = () => {
  queuedAnimations.push("punch");
};
```

> Switch to browser and refresh.

That works perfectly. Before we wrap this up, there's just one more thing that I want to do.

This is feeling more and more like a videogame. And in a videogame, it actually feels much better to be able to press a key on the keyboard and then see a reaction on screen. Let's see if we can figure out how to get these same actions - _kick_ and _punch_ - to play out if we press, say, the left and the right arrow keys on our keyboard.

Let's start by updating the user interface.

```html
<button id="kick">Kick (Left Arrow Key)</button>
<button id="punch">Punch (Right Arrow Key)</button>
```

> Switch to browser and refresh.

That looks right. Now we need to figure out how to respond to key-presses. Let's do a bit of searching.

> Google `js detect arrow keys`

Once again, we have a question on StackOverflow that looks relevant.

> Click _Detecting arrow key presses in JavaScript - Stack Overflow_.

The question looks right. But this is an example of a StackOverflow post where answer that is accepted and is at the top isn't the _best_ answer.

This usually happens when the question was asked and answered a long time ago. In this case, this question was both asked and answer back in 2011. That's 9 years ago, and a lot of things have changed since then.

One thing you usually want to do with StackOverflow questions that have many answers is to actually skim through all the answers to see if there's something _better_ and newer, especially for older questions like these.

And in this case, we do have a _much_ better and much more up-to-date answer quite a bit below older answers. This answer is from 2017 - so that's six years after the question got asked, and in it, the author tells us that there's a more recent, and much cleaner `event.key` option that lets us avoid having to use arbitrary number keycodes, and instead use friendly names for each key.

I'm simply going to copy and paste this into my code, and we'll make a few changes.

> Paste the following block of code:

```js
node.addEventListener("keydown", function (event) {
  const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
});
```

Here, the _node_ that we want to add an event listener to is going to be the entire HTML docuemnt. So let's just replace `node` with `document`.

Instead of `keydown`, I'm going to guess that there's a `keyup` event. I think it would be much better for the animation to be queued when the user releases the key, not when she presses down on it.

```js
document.addEventListener("keyup", (event) => {
  const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"

  if (key === "ArrowLeft") {
    queuedAnimations.push("kick");
  } else if (key === "ArrowRight") {
    queuedAnimations.push("punch");
  }
});
```

That works really well, and it feels polished.

Assuming that you've followed along till this point, you're at a great starting point for experimentation.

You might have noticed that we've supplied additional assets with this lesson, that includes more animations and a background image. We strongly encourage you to play and expriment. Have fun and try out new things. More importantly, search for answers if you hit road-blocks. _Learning how to search_ is a real thing - you've seen some of how we do that in the past few lessons, but that's something you'll need to practise and get comfortable with over time.
