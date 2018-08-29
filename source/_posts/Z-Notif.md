---
title: Z-Notif
date: 2015-06-26
tags:
  - css
  - html
  - labo
  - javascript
  - vanillajs
  - notifications
  - OOP
  - method chaining
author: Benjamin Caradeuc
featured_image: http://benavern.github.io/z-notif/screenshot.jpg
thumbnail: http://benavern.github.io/z-notif/screenshot.jpg
---

Hi,

I come back today to share a new javascript plugin I made : [Z-NOTIF](http://benavern.github.io/z-notif)

---

This is a little javascript notification system allowing you to quickly attach notifications on user events.

![Screenshot](http://benavern.github.io/z-notif/screenshot.jpg)

---

It is written with OOP (Object-Oriented Programming) style and fully usable once you included the javascript file in your html. You don't need any other library like jQuery ...

---

## The parameters

4 parameters are available, they are all optional :

* *type* (Default: "note") :
  ** "note" : the default one displays a blue notification
  ** "success" : displays a green notification
  ** "warning" : displays a orange notification
  ** "error" : displays a red notification
* *text* (Default: "Hello, World!") : this is where you specify the text you wont to be inside the notification
* *duration* (Default : 3000) : this is the number of milliseconds that the notification will stay displayed on the screen
* *prepend* (Default) : whether you want the type of notification written before the text or not.

---

## Very easy-to-use plugin !!!

The only thing you have to do each time you wonna display a notification, is to create a new instance of the `ZNotif` object and passing it some arguments.

For example:

> I want a warning notification that says "What are you doing here?!"
> I want it to fire when the #my-elemnt is clicked
> It has to last 5 second on my screen.

```javascript
var elem = document.getElementById("#my-element");
elem.addEventListener("click", function(){
   new ZNotif("warning", "What are you doing here?!", 5000);
});
```

---

## More information

Everything is explained [HERE](http://benavern.github.io/z-notif/)

You can find the sources on the [github repo](http://github.com/benavern/z-notif)

---

_Feel free to share, fork, pull request , issue or comment below ;)_
