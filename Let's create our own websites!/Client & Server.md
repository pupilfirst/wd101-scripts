## Client & Server

When you're browsing the Internet, you usually start by typing in an address into the browser's address bar, or by initiating a search.

This means that information needs to flow from a machine (somewhere in the world) connected to the Internet, to your computer, which is also connected to the Internet.

- The machine that requests some info (your PC, for example) is called **the client**.
- The machine that stores the information is called **the server**.

For example, if you want to know the current weather in your city today, you might start by opening up a web browser. Next, you type in the web address that provides weather. `https://weather.com`, for example, and press _Enter_. 

In that moment your computer starts talking to another computer over Internet, called a server, usually thousands of miles away. And in milliseconds your computer asks that server for a web document (in our case, `weather.com`) and the server starts to talk back to your computer using a couple of different languages, the most important of which is HTML - **H**yper **T**ext **M**arkup **L**anguage - which is used to tell a web browser how a page looks.

All of a web document's contents are transferred over the Internet using a set of rules called [HTTP (HyperText Transfer Protocol)](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol). Such rules are often called _protocols_, and there are a few different kinds used in the Internet. HTTP is the most common one.

## Hops

If you've watched the earlier video about how the Internet works, then you probably noticed that machines connected to the Internet don't talk to each other directly. Instead, _packets_ of information sent across the internet might _hop_ across many machines on their journey from the _client_ to the _server_. This makes the Internet resilient to failures. Even if one path from a client to a server fails, another can still be taken by the packets that are sent out.

However, this introduces a big problem. Every machine that a packet _hops through_ gets to keep that _packet_ for a short time, during which it can be _read_.

## Security

You might have noticed that web addresses often start with `https://`. The `HTTPS` is the _Secure_ version of the HyperText Transfer Protocol, and is used by almost all websites and web applications - the protocol guarantees that only the client and the server can understand the information that is sent from one side to the other.

Watch the following video to learn more about how the Internet is used to send information securely from you to the server and back.