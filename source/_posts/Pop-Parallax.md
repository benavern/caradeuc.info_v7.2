---
title: Pop Parallax
date: 2015-04-24 12:32:09
tags:
  - javascript
  - jquery
  - css
  - parallax
author: Benjamin Caradeuc
---

Today I come back to show you something I just shared on github [HERE](http://github.com/benavern/pop-parallax).

This is a cool peace of code that allows you to add stylish parallax effects on your website just by adding classes.

Images, texts, divs, [what you want] can jump on the screen when scrolling down.

When you scroll back to the top of the webpage, everything resets and no need to refresh to see the magic again.

---

## How To

* Add the 2 files in your website directory and call them (works with jquery!!)

```html
  <link rel="stylesheet" href="pop-parallax.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <script src="pop-parallax.js"></script>
```

* Use classes on each element you want to appear with the parallax effect:


```html
<img src="path/to/img" class="pop"></img>
```

#### Choose from where it comes

* element with `class="pop"` will come from bottom
* element with `class="pop pop-left"` will come from left
* element with `class="pop pop-right"` will come from right
* element with `class="pop pop-top"` will come from top

---

## [Demo](http://benavern.github.io/pop-parallax/demo)

---

## Contribute
This code is inspired from one of the super cool tutorials of [DevTips](https://www.youtube.com/watch?v=-iOdDz2LnEk)

You can contribute, fork, issue, ... like you want.
