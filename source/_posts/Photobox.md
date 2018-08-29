---
title: Photobox
date: 2015-06-16 01:00
tags:
  - css
  - jquery
  - html
  - labo
  - lightbox
  - vanillajs
author: Benjamin Caradeuc
featured_image: http://benavern.github.io/z-photobox/screenshot.jpg
thumbnail: http://benavern.github.io/z-photobox/screenshot.jpg
---

Hi,

Today, I am excited to share a new project I made : [Z-Photobox](http://benavern.github.io/z-photobox)

This is a little jquery script allowing you to quickly start a project by integrating a lightbox-like feature.

I know that a lot of those features are already available on the web but I just made it for my own needs and share it not to keep it for myself.

This tool has only been designed to display pictures, it should work on desktop and smartphones, it needs [jQuery](http://jquery.com/) or [ZeptoJs](http://zeptojs.com/) to work.

---

## How To

Once the CSS and javascript integrated in the HTML file, create an anchor element with the href pointing on the picture path for each picture you want to display in the z-photobox gallery. Add the class you chose for the gallery to it and put the javascript code in your js file or at the bottom of your body.

you didn't understand? here is an example :

```html
<!DOCTYPE html>
<html>
<head>
  <title>z-photobox-example</title>
  <link rel="stylesheet" href="z-photobox/z-photobox.css">
</head>
<body>

  <a href="http://lorempixel.com/800/600/nature/1">Photo #1</a>
  <a href="http://lorempixel.com/800/600/nature/2">Photo #2</a>

  <!--
  // it works with ZeptoJs!!!
  <script src="js/zepto.min.js"></script>

  // or jquery
  -->
  <script src="js/jquery.min.js"></script>
  <script src="z-photobox/z-photobox.js"></script>
  <script>
    $(document).ready(function(){
      zPhotobox.load([".z-photobox", ".z-photobox-2"]);
    });
  </script>

<body>
</html>
```

Here, you could have put pictures or text inside the anchor tags as shown on the [DEMO site](http://benavern.github.io/z-photobox/)

![Screenshot](http://benavern.github.io/z-photobox/screenshot.jpg)

---

This project is intended to evolve, but it is fully functionnal today.
