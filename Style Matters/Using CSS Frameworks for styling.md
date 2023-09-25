# Text

Previously, we've learned 
- *What is a CSS framework?* 
- *What are the advantages of using one?*
- And *what are the popular frameworks available in the market today?*.

We've also talked about how a CSS framework can boost our productivity, with it's ready-to-use UI components and utility classes.

So, in this lesson, let's find out how to use a CSS framework.

## How to add a CSS framework to any HTML project?
There are number of different ways to use a CSS framework in a web application. In this lesson, we will focus only on the most convenient ones.

### Method 1: Using a Content Delivery Network or CDN

A CDN is a group of interconnected computers, that are distributed around the globe. Their goal is to provide your data or file or content from the nearest possible location, from where you are sitting right now. Whether we know it or not, every one of us interact with CDNs on a daily basis, when reading articles on news sites, shopping online or watching YouTube videos.

All modern CSS frameworks have uploaded their stable releases to these CDNs. You only need to include their compiled CSS and JS file to your HTML webpage.

#### For Bootstrap
As we saw in the previous lesson, Bootstrap is one of the most popular CSS, HTML, and JavaScript framework that exists today.

Using the Bootstrap CDN is a great way to deliver the content to your users, quickly and efficiently, based on their geographic location. To link Bootstrap in HTML you can use this method:

Just copy this stylesheet `link` tag to the `<head>` of your HTML file.

```html
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
```

##### One advantage of using the Bootstrap CDN is:
Many users already have downloaded Bootstrap from CDN when visiting another site. As a result, it will be loaded from the cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user requests a file from it, it will be served from the server closest to them, which also leads to faster loading time.

#### For Tailwind CSS
Tailwind is a utility-first CSS framework for rapidly building custom user interfaces. 

Tailwind comes with a default configuration, but it allows us to easily customize the - styling, themes, spacing, palettes, etc.

To add Tailwind to your application, just copy this stylesheet `link` tag to the `<head>` of your HTML file.

```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet" crossorigin="anonymous">
```


### Method 2: Downloading the files locally
Another way of importing these CSS frameworks to HTML is to directly download the files locally to your HTML project folder. Then you can simply link them as normal external stylesheet and JS file.

#### For Bootstrap
The files can be downloaded from their official website:
https://getbootstrap.com/docs/5.2/getting-started/download/#compiled-css-and-js

Keep the `bootstrap.min.css` file in your project folder and link it inside the `head` of your HTML.

````
<link href="bootstrap.min.css" rel="stylesheet">
````

Once you integrate Bootstrap or TailwindCSS with HTML, you can simply use their respective classes and style your HTML files in the desired manner. 

You can refer to the official documentation of the CSS framework that you are going to use in your project, for more information on the different components and utility classes available.

That's it for this lesson, see you in the next one.
