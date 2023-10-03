One of the best things about VSCode is its plugin ecosystem - VSCode can be extended very easily by installing plugins, and we’re going to start by installing a single plugin that will make writing Javascript a much more pleasant experience.

Inside VSCode, head over to the _Plugins_ tabs on the left. It’s got an icon that looks like we’re plugging in one block into a few others. On the search bar that appears, type in _Prettier_, and press _Enter_, or just wait for a few seconds. A list of available plugins that match the search term will be shown. Click the one at the top. It should have the identifier `esbenp.prettier-vscode`. Click the _Install_ button to install _Prettier_.

Prettier is a plugin that automatically formats the code that we write. It's an extremely popular plugin that makes of job keeping our code _pretty_. Hence the name _prettier_. Here's an example Javascript program that we can use to demonstrate how this plugin works.

```
const number = parseInt(prompt("Enter a number: "));

if (number > 0) {
        console.log("The number is positive");
}



else if (number == 0){console.log("The number is zero");}

else {    console.log("The number is negative");
}
```

It's a simple proram that accepts a number and prints to the console whether it's positive, zero, or a negative number. This code doesn't look very good right now. In some places, there's too many spaces, and in others, there's too little, and the indentation of code at the same level doesn't match.

We can format this document using Prettier by opening the command palette and choosing the Format Document Option. We can open VSCode's command palette by clicking on _View_, and then choosing the _Command Palette_ option. It says here that the shortcut for the command palette is `Ctrl+Shift+P`, so let's use that instead. With the palette open, I can type in _Format_, and it'll show me the _Format Document_ option, along with the keyboard shortcut that would have triggered the format command. If I click on it, we can see that the document has been formatted, and it looks much better than before.

There's one more thing I want to show you before we end this lesson, and that's the _Format on Save_ option. Let's configure VSCode to format the document every time we _save_ it. That'll mean that we don't need to think about keeping your code "pretty" - VSCode will automatically do it for us.

VSCode's settings can be access via _File > Preferences > Settings_. On Windows, the shortcut for that is `Ctrl+,`, so I'm going to use that instead to open the Settings tab. Type in _Format_, and find the _Format on Save_ option. Make sure that it's ticked, and go ahead and close the Settings tab.

Now, even if I make some changes here, as soon as I save the file, it'll clean up the file's formatting.

So in this lesson, we've learnt how to install a plugin, how to open the command palette and then run a command, and then open up VSCode's settings and make a small change there. That's it for now. See you in the next lesson.
