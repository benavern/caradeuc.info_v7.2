---
title: Z-Browser
date: 2015-07-02
tags:
  - css
  - scss
  - html
  - jade
  - javascript
  - vanillajs
  - oop
  - method-chaining
author: Benjamin Caradeuc
---

Hi,

I come back today to share a new pen I made. Again I used jade for the HTML and SCSS for the CSS. (still learning...)

---

This is an html-css-js tool I made to emulate a browser inside your browser. It can be used for website demonstration or to give a stylish way to show a website on yours... Do you still follow me ? no ? OK, I'll show you:

<p data-height="490" data-theme-id="0" data-slug-hash="zGRBJe" data-default-tab="result" data-user="benavern" class='codepen'>See the Pen <a href='http://codepen.io/benavern/pen/zGRBJe/'>browser inception</a> by Benjamin CARADEUC (<a href='http://codepen.io/benavern'>@benavern</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

It is written with OOP (Object-Oriented Programming) style and is fully usable once you included the CSS and javascript files in your html. You don't need any other library like jQuery or others.

---

### HOW TO

To add browsers on your webpage, you just have to add divs with the `z-browser` class and that's all. If you put something inside, it will be overwritten.

You can specify the starting website url by adding it the attribute `data-url` setted to the url you want (don't forget the `http://` or it won't work.)

```html
<div class="z-browser" data-url="http://example.com/"></div>
```

---

_Isn't it awesome ??? Let me know what you think in the comments bellow!_
