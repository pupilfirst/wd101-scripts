In this course, you'll be writing a lot of code manually. You'll need to _store_ this code somewhere. In this lesson, we'll list down our recommendation of where to keep this code.

From your command line, if you type the `cd` command, it'll take you to [your home directory](https://en.wikipedia.org/wiki/Home_directory):

```bash
# Simply writing `cd` always takes you to your home directory.
cd
```

At any given moment, you can check the path that you're on using the `pwd` command:

```bash
# Let's check where we are.
pwd
/home/NAME
# The ^^^^ NAME part will be different for everyone. It should be your OS username.
```

The output of `pwd` should now show you the absolute path to the folder you're inside. On Ubuntu and Windows (WSL), it should look like the above example. On macOS, it'll look like `/Users/NAME`.

## So, where should I keep my code?

We recommend that you create a directory called `wd101` inside your home directory, and keep all of your source code in there. For example:

```bash
# Let's make sure we're at the home directory.
cd

# Let's create the `wd101` directory, and go into that.
mkdir wd101
cd wd101
```

So, we now have a directory where we'll keep _all_ of our source code, but we'll definitely want to keep source code for different projects separate from each other.

In the next level, you're going to create a small website, so let's try creating a directory _inside_ the `wd101` directory to hold the source code we'll write for that project:

```bash
# From inside the `wd101` directory, let's make another...
mkdir html-css
cd html-css

# Let's confirm that we're at the right path...
pwd
/home/NAME/wd101/html-css
```

We'll use this folder in the next level. Similarly, we'll want to create new directories inside the `wd101` folder when you work on a different project.

## Can I change where I keep my code?

This organization scheme is just a recommendation. You may wish to keep your code in a different location or name things differently - that's totally fine. 

> **Windows users:** Make sure that you keep your code within WSL (in `/home/code`, for example), and not in your Windows drives (`C:\`, `D:\`, etc.). If you keep your code in Windows and then try to run it from interpreters installed inside WSL, you can run into difficult-to-debug errors.