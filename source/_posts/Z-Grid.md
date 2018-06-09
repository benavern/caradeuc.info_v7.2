---
title: Z-Grid
date: 2015-05-27
tags:
  - labo
  - css
  - grid-system
  - html
author: Benjamin Caradeuc
featured_image: http://blog.caradeuc.info/z-grid/screenshot.jpg
thumbnail: http://blog.caradeuc.info/z-grid/screenshot.jpg
---

Hi,

Today, I come back here to share a new project I have made these last days : [Z-GRID](http://blog.caradeuc.info/z-grid)

---

This is a extremly lightweight CSS grid system allowing you to quickly start a project by integrating a css responsive grid.

It is composed of a RESET part of CSS so you should place it before your own css stylesheet and the grid system.

You will be able to create a grid by specifying how many columns you want. This grid will be displayed normally on a computer screen  and each box will be on a line on a mobile screen. It is possible to force the grid to display as you write it on mile screens.

![Screenshot](http://blog.caradeuc.info/z-grid/screenshot.jpg)

---

## Example

### Grid with 2 boxes

```html
<div class="z-grid">
   <div class="z-2">

      <div class="z-box">
         <p>box-1</p>
      </div>

      <div class="z-box">
         <p>box-2</p>
      </div>

   </div>
</div>
```

_(if you use emmet, you will be able to type this code very fast!)_

Here, there will be a grid with 2 boxes per lines.

* *On computer screen* (>768px) : both are on one line.
* *On smartphone screen* (< 768px) : each box is on a different line.

## More information

Everything is explained [HERE](http://blog.caradeuc.info/z-grid)

---

This project is intended to evolve, but it is fully functionnal today.

_Share, fork, pull request it if you like my work :)_
