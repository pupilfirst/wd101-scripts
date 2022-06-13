If you followed along with the last couple of lessons, then you have with you the _framework_ to create an interesting little project of your own.

## Complete this course by building a personal website

It's very common for developers to have their own personal website. One that is built from scratch, without using templates, and one that showcases a developer's style.

If you haven't built one yet, consider this your time to make one.

**To complete this course**: Create and host a website of your own, host it using *Github Pages*, and include the survey form that you've built in this level as one of your _project_.

Once you've hosted it online, share its link with us.

## What you need to do

1. Using what you've learned, create a personal website of your own. You can put anything you want inside of it, as long as you...

2. ...include a separate _Project_ page that includes the survey form that you've built in this level. This means a fully functional survey form including loading of saved data from web storage that we built in this level.

3. Host your website on Github pages, and share the link to a hosted version of your website.

## Please ensure that...

1. ...your website is live, and accessible.
2. ...your website includes a link to a separate _Project_ (or similar) page that includes the survey form. Do **not** put your survey form on the _index_ page; put it on a separate page, and then link to it.
3. ...the survey form on your website should be functional.

We'll take a look at your site, and tell you what we think of it - no bot (automated) reviews here - just other developers looking at your work and sharing some comments.

## Use Github Pages to host your website

For this final assignment, we require that you use [Github Pages](https://pages.github.com/).

Go through the link above, and follow their instructions to learn how you can host a website (for free) using Github.

## Don't have a Github account?

If you haven't used Github before, sign up now. Github is the world's leading code hosting platform, and is used almost universally by developers for sharing their code and to collaborate on larger projects.

1. Start by [signing up for a Github account](https://github.com/join) (it's free!).
2. Go through [Github's Hello World Guide](https://guides.github.com/activities/hello-world) - it'll teach you all the basics on how to get started with sharing your code online.
3. Read ["Getting Started with GitHub Pages"](https://guides.github.com/features/pages/) - it tells you how to get started with hosting a page using Github Pages.

## After you submit your work here

This part is optional, but we recommend that you show off your customized project by sharing its link on the Discord community. Tell everyone what you learned, what worked, and what didn't.

## Solutions for common issues

### Links to my images or JS are broken.

A common issue that occurs when you host using Github Pages is that you might find that your website isn't loading the images, CSS, or JS that you've placed in your repository.

This is probably happening because of _root_ path of your website is different from when you were trying out your website locally.

Start by watching the video explaining _absolute & relative file paths_ in the following target: https://www.pupilfirst.school/targets/11352

Once you've gone through that, pay close attention to the _root_ path of your website. If you have a Github repository named `my-website`, then Github Pages will host it at a URL that looks like `username.github.io/my-website`. Now, if your website's code refers to an image at the path `/images/idle.png`, then it's going to try to load `username.github.io/images/idle.png`, which is the wrong URL.

Instead, now that your website is hosted on a sub-folder (and not the _root_ of the domain), you'll want to update your code to using a path relative to the _current_ folder. To do so, simply remove leading slashes from the asset paths. i.e., `images/idle.png` may work where `/images/idle.png` does not.
