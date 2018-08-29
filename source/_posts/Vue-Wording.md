---
title: Vue-Wording
author: Benjamin Caradeuc
date: 2017-09-06
tags:
  - vuejs
  - javascript
  - labo
featured_image: https://user-images.githubusercontent.com/5999900/30086250-835e1372-929a-11e7-9f9d-a85cd88e6a0a.png
thumbnail: https://user-images.githubusercontent.com/5999900/30086250-835e1372-929a-11e7-9f9d-a85cd88e6a0a.png
---

# Hi!

_It's been a while uh ?_

I've almost forgotten that I had a blog, because I've been a bit busy lately.

Now that I'll have more time and new computer parts that make my life better, I'd like to come back here and share some new stuff I made or will be making.

---

## Vue-Wording

First, let me introduce you a little VueJs plugin I made for some projects of mine, it's called "Vue-Wording".

This little plugin is meant to give its users the the ability to have all the wording of an app centralised in a JSON object.

_[Here is the Github page of the project](https://github.com/benavern/vue-wording) and the [Demo Page](https://benavern.github.io/vue-wording)_

---

## How does this work ?

To be able to use it, you should just `npm i -S https://github.com/benavern/vue-wording`, (will be available on github soon) and then use it as described below:

#### app.js

``` javascript
import Vue from 'vue'
import VueWordingPlugin from 'vue-wording'

const wording = {
	"en": {
    	"key1": "Wording 1 is simple",
        "key2": "Wording #{nb} is #{how}!",
        "key3": {
        	"key31": "Wording 3",
            "key32": "is an #{type}"
        }
    }
}

Vue.use(WordingPlugin, { lang: 'en', wording }

new Vue() // ...
```

#### Component.vue

``` html
<template>
	<div>
    	<div>{{ $t('key1') }}</div>
        <div>{{ $t('key2', {nb: 2, how: 'complicated'}) }}</div>
        <pre>{{ $t('key3', {type: 'Object'}) }}</pre>
    </div>
</template>
```

---

## Simple isn't it ?

I know there are a bunch of other plugins that can do the same but I wanted to know how Vuejs plugins work, and what a better way to learn if not by practicing ?

---

## Some help would be great

I still have a problem: How to distribute it ? I know there is npm and stuff, and I'll put it on that when I'll be satisfied with how it is "packed".

For now, I have a npm script that transpiles & minifies it, I've put it in the `main` key in the package.json file but I still think there are some better ways to do it. isn't it a webpack way to do it ? Can someone help ?

---

However, this is something I did in a late night while thinking about a simple solution for what I needed.

What do you think ? How could I make it better ?

_Let me know ... ;)_
