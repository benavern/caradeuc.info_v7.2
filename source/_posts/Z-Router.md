---
title: Z-Router
author: Benjamin Caradeuc
date: 2016-01-29
tags:
  - html
  - jade
  - gulp
  - router
  - javascript
  - vanillajs
featured_image: https://raw.githubusercontent.com/benavern/z-router/master/cover.jpg
thumbnail: https://raw.githubusercontent.com/benavern/z-router/master/cover.jpg
---

Hi,

Today Is the day I present you a thing I did want to build since a long time :

_A simple JS router (hash styled & for front-end use) with ajax ability_

It is called *Z-router* and here are some information about it :

---

* [Github](http://github.com/benavern/z-router)
* [Demo](http://benavern.github.io/z-router)

---

## How does it work

*Z-Router* watches the hash part `#` of the current url and displays the corresponding template based on the routes declaration.

You can pass parameters inside the url and use it in the template. It is also possible to add options on the routes, they will be available in the template too.

You can provide a template to *Z-router* by two ways :

. an inline string with html inside
. a url to an external template (html file)

There is also a "template engine" that will transform the html before rendering it if needed. [(Template engine inspiration)](http://krasimirtsonev.com/blog/article/Javascript-template-engine-in-just-20-line)

---

## Documentation

There are a lot of things to know about it!

[Click here to see the full documentation](http://labo.caradeuc.info/z-router)


### Example

<p data-height="360" data-theme-id="0" data-slug-hash="adKoZX" data-default-tab="result" data-user="benavern" class='codepen'>See the Pen <a href='http://codepen.io/benavern/pen/adKoZX/'>adKoZX</a> by Benjamin CARADEUC (<a href='http://codepen.io/benavern'>@benavern</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

---

This project is meant to evolve but is fully usable as-is today.

You can contribute, fork, issue on github and please comment below!

__See you next hack ;-)__
