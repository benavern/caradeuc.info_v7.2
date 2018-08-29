---
title: Z-Tags
date: 2015-08-18
tags:
  - css
  - html
  - labo
  - javascript
  - vanillajs
  - tags
  - oop
author: Benjamin Caradeuc
featured_image: http://benavern.github.io/z-tags/screenshot.jpg
thumbnail: http://benavern.github.io/z-tags/screenshot.jpg
---

Hi,

I come back today to share a new javascript plugin I made : [Z-TAGS](http://benavern.github.io/z-tags)

---

This is a little javascript system allowing you to quickly create tags sections with options.

![Screenshot](http://benavern.github.io/z-tags/screenshot.jpg)

---

It is written with OOP (Object-Oriented Programming) style and fully usable once you included the javascript file in your html. You don't need any other library like jQuery ...

---

## The parameters

* **element** : the DOM element that will be transformed in a tag section
* **options** : (all optional)
  * **predefined** : the default tags to be inserted on the tags section creation
  * **readonly** : if true, you won't be able to add or delete the tags
  * **pattern** : the array of available tags
  * **color** : the (CSS written) color for the background of each tag

---

## Very easy-to-use plugin !!!

The only thing you have to do for each element of the DOM meant to become a tag area, is to create a new instance of the `ZTAGS` class and passing it options if necessary.

For example:

> I want an empty tag area where I can add & delete tags
> I want it to accept only ["hello", "world"] as tags labels
> The tags must be blue

```javascript
var elem = document.getElementById("#my-element");
var newTagArea = new ZTAGS({
   element: elem,
   options: {
      readonly: false,
      pattern: ["hello", "world"],
      color: "#3366EE"
   }
})
```

---

## More information

Everything is explained [HERE](http://benavern.github.io/z-tags/)

You can find the sources on the [github repo](http://github.com/benavern/z-tags)

---

_Feel free to share, fork, pull request , issue or comment below ;)_
