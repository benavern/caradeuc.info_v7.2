---
title: Z-Cookies
author: Benjamin Caradeuc
date: 2016-05-13
tags:
  - labo
  - javascript
  - vanillajs
  - cookies
  - module
featured_image: https://raw.githubusercontent.com/benavern/z-cookies/master/banner.png
thumbnail: https://raw.githubusercontent.com/benavern/z-cookies/master/banner.png
---

Hey! Since a long time I have been developping some little snippets, plugins, tools ... for the web. I've always been doing that alone and wanted to do some things with friends.

Today I'm proud to show you something I've made with [Jean-Seb](https://github.com/pacejz/), a very good friend of mine.

In fact I have a lot of things in my head that I'd like to do. But I very often end up forgetting it. This time, my friend wanted to do something, and I just remembered something I began but never ended.

This is how Z-Cookies is born:

## What is Z-Cookies?

Nowadays, a lot of websites are using cookies. They set, get or delete their cookies sometimes with an heavy jQuery plugin, or sometimes with some noobie home made scripts...

Here is our solution: A really lightweight vanilla JS Module to handle your cookies.

It is available via :

* [My personal website](https://benavern.github.io/z-cookies)
* [GitHub](http://github.com/benavern/z-cookies)
* [NPM](https://www.npmjs.com/package/z-cookies)

It is called Z-cookies, and here is how it works :

## How does it work

_This is a module design pattern. When added to your application, nothing more than calling its methodes is required_

### Get

With this method, you will be able to get the browser cookies data:

#### Get a specific cookie

```javascript
var myCookie = ZCookies.get("numberOne"); // myCookie = "foo"
```

#### Get multiple cookies

```javascript
var myCookies = ZCookies.get("numberOne", "numberTwo"); //  myCookies = {"numberOne": "foo", "numberTwo" : "bar"}
```

#### Get all the cookies as an object

```javascript
var myCookies = ZCookies.get(); // myCookies = {"numberOne": "foo", "numberTwo" : "bar"}
```

### Set / Update

Here if the cookie already exists, it will be updated, otherwise it is created.

```javascript
ZCookies.set("numberThree", "Hello, World!");
```

#### Expiration date

Instead of providing some ununderstandable timestamps, we chose an easyer solution : providing a simple object with the days, mins and/or hours set. You can also provide a number if you just need to set the expiration date in term of days.

It will be automatically converted so that the browser understands well what you meant.

```javascript
ZCookies.set("numberFour", "Where is bryan?", {days: 1, hours: 12, mins: 30});
//Or you can just set the usefull values
ZCookies.set("numberFive", "Where is bryan?", {days: 1, mins: 30});
ZCookies.set("numberSix", "Where is bryan?", 2);
```

### Delete

```javascript
ZCookies.delete("numberThree"); // now numberThree cookie does not exist anymore.
```

### BONUS

You can chain ZCookies `set` and `delete` methodes.

The `get` method can be added at the end of the chain, it is meant to return a `value`.

```javascript
ZCookies.set("Chaining", "Is").set("A", "realy").set("Awesome", "Feature").delete("A").get(); // {"Chaining": "Is", "Awesome": "Feature"}
```

## Development

### dev server (facultative)

There is a simple configuration file that is meant to be used with [lite-server](https://github.com/johnpapa/lite-server)

```bash
npm i
```

With this server, you'll be able to watch changes on the files and refresh your browser automatically. If you open the given url on multiple devices, it will be synchronised too.

To start the server, simply type

```bash
npm run dev
```

**Warning!**  The minified version of the js is not generated automatically, you'll have to use some other tools to do that...

## License

[MIT](https://benavern.github.io/MIT/#name=Benjamin%20%26%20Jean-Sebastien)

---

This is an Open-Source project created by ZeZen & Pacejz. It is meant to evolve but is fully usable as-is today.

You can contribute, fork, issue on github and please comment below!

__See you next hack ;-)__
