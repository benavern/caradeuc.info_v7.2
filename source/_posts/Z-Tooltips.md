---
title: Z-Tooltips
author: Benjamin Caradeuc
date: 2015-12-10
tags:
  - html
  - jade
  - css
  - sass
  - gulp
  - tooltips
featured_image: https://raw.githubusercontent.com/benavern/z-tooltips/master/banner.jpg
thumbnail: https://raw.githubusercontent.com/benavern/z-tooltips/master/banner.jpg
---

Hi,

Today I want to show you something I did for some personnal projects and made it public. This is a very little piece of sass code allowing you to create stylish tooltips without any javascript.

This is **Z-Tooltips**

[Github](http://github.com/benavern/z-tooltips)
[Demo](http://blog.caradeuc.info/z-tooltips)

---

## How To

First, integrate the css in your project by importing the sass file or including the css file in your head and you'r almost done.

On any element in your markup where you want the tooltip to appear, add an `data-ztooltips` attribute with the text you want to be shown.

If you want the tooltip to show on top / bottom / left / right side of the element, add a `z-tooltips-[side]` class where `[side]` is replaced with the corresponding side.

By default, the tooltip will appear at the top-hand side.

### For example

```html
<div class="z-tooltips-bottom" data-ztooltips="Hi there!">
	...
</div>
```

Will display a tooltip on the bottom-hand side of the div, containing the text : "Hi there!".

---

## Screenshot

![screenshot](https://raw.githubusercontent.com/benavern/z-tooltips/master/screenshot.jpg)

---

This project is meant to evolve, but is fully usable as-is today.

You can contribute, fork, issue on github and please comment below!

__See you next hack ;-)__
