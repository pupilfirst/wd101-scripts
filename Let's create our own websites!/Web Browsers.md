<!---
Suggestion: Can we add this vieo < https://www.youtube.com/watch?v=fyOSkkQK14w > OR this < https://www.youtube.com/watch?v=DuSURHrZG6I > to the lesson
--->

## IP Address

Just as every house is assigned a specific and unique postal address, all computers connected to the Internet are also assigned an _IP Address_. IP stands for **I**nternet **P**rotocol.

There are two kinds of IP addresses: _IPv4_ and _IPv6_.

An example of an IPV4 address looks like a combination of 4 numbers: 

```
142.250.76.46
```

**IPv4** is the older version which allows for a maximum of around *4.3 billion* IP addresses. Each of those four numbers (segment) represents 8 _bits_ of information. That means one segment can count as high as 255.

While 4.3 billion might sound like a lot of addresses, it isn't anywhere near enough to satisfy today's numbers of devices connected to the internet. To satisfy the need for _addressing_ the ever-growing number internet users and devices, a new **IPv6** version was created that can provide _many more_ addresses.

An example of a _full_ IPv6 IP address would be:

```
2001:0db8:0000:0000:0000:ff00:0042:8329
```

Notice how the IPv6 address is much longer than IPv4? It greatly increases the available address space.

How much more? 

```
340,282,366,920,938,463,463,374,607,431,768,211,456 addresses
```

That's approximately 3.4×10^38^. That's a lot - we're not going to need another version of IP addresses for a long while (if ever).

> **Do you want to know what your IP address is?**
>
> The simplest way to discover your current IP address is by typing "What is my IP" in Google search. Google will display your IP address at the top of the search results page.

## Domain Names

Since IP addresses are unique, they are useful for computers to connect with each other, but we humans have a difficult time reading them, or remembering them.

**Domains** associate an IP address like ```142.250.76.46``` with a string of text like `google.com`. Thanks to the [**D**omain **N**ame **S**ystem](https://www.cloudflare.com/learning/dns/what-is-dns/) (DNS), both are interchangeable. You can go to http://142.250.76.46 or http://google.com and end up on the exact same website.

When you type in a domain name into your browser's address bar, your browser contacts the DNS to figure out its IP address, and then uses _that_ to actually contact the server that belongs to the domain.

In short, a domain name is a unique, easy-to-remember address used to access websites.

## What's a URL?

**URL** stands for _Uniform Resource Locator_, it's simply a web address that uniquely identifies a specific resource in the computer network or the Internet.

For example, the current page’s URL is `https://www.pupilfirst.school/targets/12078`, and it can be divided in 3 parts:

- ```https://``` is the protocol.
- ```www.pupilfirst.school``` is the domain.
- ```/targets/12078``` is the path to a _resource_.

Watch the video below to learn more about how networks talk to each other, and how the Internet works.