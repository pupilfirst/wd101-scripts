# Text

In this lesson, we will learn about what happens when a user submits a form. We will also learn about where the data goes, and how we can check, what data is sent to the web server.

First, we'll discuss what happens to the data when we submit a form. To understand that, we need to have an understanding of Client/Server architecture.

## Client/Server architecture

The Web uses a Client/Server architecture that can be summarized as follows:

1. Client (a web browser) sends a request,
2. To a Server (a web server like Apache, Tomcat, etc.),
3. Using the [HTTP protocol](https://developer.mozilla.org/en-US/docs/Web/HTTP).

The server answers the request using the same protocol.

The HTML form we create is a user-friendly way to configure an HTTP request to send data to a server. This enables the user to provide information to be delivered in the HTTP request.

## Sending data

The `form` element defines how the data will be sent to the web server. All of its attributes are designed to let you configure the request to be sent when a user clicks a submit button.

The two most important attributes of a form element are `action` and `method`.

### `action` attribute

The `action` attribute defines where the data gets sent. Its value must be a valid URL. If this attribute isn't provided, the data will be sent to the URL of the page containing the form — the current page.

```js

   <form action="https://google.com"> #External URL
   <form action="/localserver"> #Local URL

```

The names and values of the form controls are sent to the server as `name=value` pairs joined with the `&` symbol.

### `method` attribute

The `method` attribute defines how data is sent. The HTTP protocol provides several ways to perform a request.

HTML form data can be transmitted via a number of different methods, the most common being the `GET` method and the `POST` method.

HTTP requests, such as the ones we send through HTML forms, consist of two parts:

1. A header that contains a set of data about the browser and our HTML.
2. A body that can contain information necessary for the server.

#### `GET` method

The `GET` method is used by the browser to ask the server to send back a given resource. In this case, the browser sends an empty body. Because the body is empty if a form is sent using this method, the data sent to the server is added to the URL.

```js

<form action="http://www.google.com" method="GET">
  <label for="name">Name</label>
  <input type="text" id="name" name="name" value="John Doe">
  <label for="email">Email</label>
  <input type="email" id="email" name="email" value="john.doe@email.com">
  <button type="submit">Submit</button>
</form>

```

Since the `GET` method has been used, you'll see the URL `https://www.google.com/?name=John+Doe&email=john.doe%40email.com` appear in the browser address bar when you submit the form.

The data is appended to the URL as a series of name/value pairs.

#### `POST` method

The `POST` method is a little different. It's the method the browser uses to talk to the server when asking for a response based on the body of the HTTP request.

If a form is sent using this method, the data is appended to the body of the HTTP request.

```js

<form action="http://www.google.com" method="POST">
  <label for="name">Name</label>
  <input type="text" id="name" name="name" value="John Doe">
  <label for="email">Email</label>
  <input type="email" id="email" name="email" value="john.doe@email.com">
  <button type="submit">Submit</button>
</form>

```

When the form is submitted using the POST method, you get no data appended to the URL, and it is instead included in the request body.

The HTTP requests are not visible on the browser and to view them you need to use the `Developer Tools` available inbuilt on the browser.

After submitting the form:

1. Open the developer tools.
2. Select “Network”
3. Select “All”
4. Select “google.com” in the “Name” tab
5. Select “Headers”
6. Look under the “Form Data” section to see the data sent as a part of the request.

We will learn more about building forms and other ways to store and retrieve data from forms in the upcoming lessons.
