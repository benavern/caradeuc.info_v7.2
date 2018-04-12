---
title: Hello, World
author: Benjamin Caradeuc
featured_image: example-image.jpg
thumbnail: example-thumbnail.jpg
---

An h1 header
============

Paragraphs are separated by a blank line.

2nd paragraph.

*Italic*, **bold**, and `monospace`.

Itemized lists look like:

* this one
* that one
* the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.
>
> --- somebody

Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
in chapters 12--14"). Three dots ... will be converted to an ellipsis.
Unicode is supported. ☺



An h2 header
------------

Here's a numbered list:

1. first item
2. second item
3. third item

Note again how the actual text starts at 4 columns in (4 characters
from the left side). Here's a code sample:

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }

As you probably guessed, indented 4 spaces. By the way, instead of
indenting the block, you can use delimited blocks, if you like:

~~~
define foobar() {
    print "Welcome to flavor country!";
}
~~~

(which makes copying & pasting easier). You can optionally mark the
delimited block for Pandoc to syntax highlight it:

~~~js
/**
 * Add class 'scrolled' class when page scrolled
 */
function handleScrolled () {
  // depends on window.scrollY
    if (window.scrollY > 0) {
      document.body.classList.add('scrolled')
    } else {
      document.body.classList.remove('scrolled')
    }
  }
~~~

```scss
#post
  .post-content
    // Code blocks
    code
      background-color: $gray-lighter
      display: inline-block
      padding: 0 .25rem
      border-radius: .25rem
    [class^="selector-"]
      color: lighten($yellow, 25%)

```


```html
<!-- un fichier vue ça marche ? -->
<div class="container" id="post">
  <div class="grid">
    <article class="grid-item m-5-6 post-content">
      <div class="box">
        page.content
      </div>
    </article>

    <aside class="grid-item m-1-6 post-aside"></aside>
  </div>
</div>
<script>
  var truc = 'chose';
</script>
<style lang="sass">
  #post
  .post-content
    // Code blocks
    code
      background-color: $gray-lighter
      display: inline-block
      padding: 0 .25rem
      border-radius: .25rem
    [class^="selector-"]
      color: lighten($yellow, 25%)
</style>

<!--
  oui mais pas le sass
-->

```


### An h3 header ###

Now a nested list:

 1. First, get these ingredients:

      * carrots
      * celery
      * lentils

 2. Boil some water.

 3. Dump everything in the pot and follow
    this algorithm:

        find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)

    Do not bump wooden spoon or it will fall.

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

Here's a link to [a website](http://foo.bar), to a [local
doc](local-doc.txt), and to a [section heading in the current
doc](#An-h2-header).

Tables can look like this:

| size | material    |  color      |
|------|-------------|-------------|
| 9    | leather     | brown       |
| 10   | hemp canvas | natural     |
| 11   | glass       | transparent |

Table: Shoes, their sizes, and what they're made of

A horizontal rule follows.

***

and images can be specified like so:

![example image](example-image.jpg "An exemplary image")

And note that you can backslash-escape any punctuation characters
which you wish to be displayed literally, ex.: \`foo\`, \*bar\*, etc.
