---
title: Custom Checkbox
author: Benjamin Caradeuc
date: 2019-09-16T21:32:54.578Z
tags:
  - css
  - sass
  - checkbox
  - tips
  - no-js
featured_image: /images/uploads/capture-d-écran-du-2019-09-16-23.35.04.png
thumbnail: /images/uploads/capture-d-écran-du-2019-09-16-23.35.04.png
---
Hey,

Aujourd'hui je reviens avec un petit tip css dans le même goût que le précédent.

Cette fois-ci j'ai choisi de faire une checkbox customisée.

Sans plus attendre, voici le résultat:

<iframe src="https://codesandbox.io/embed/suspicious-http-ubv37?fontsize=14&module=%2Fsrc%2Fstyles%2F_checkbox.scss" title="custom checkbox" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

La seule difficulté ici était d'utiliser un sélecteur css peu connu mais pourtant très utile: le [sélecteur adjacent](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator) "`+`". Il se place entre 2 sélecteurs CSS et sélectionne le 2ème s'il est placé à la même profondeur que le premier et le suit directement.

Par exemple:

```html
<label class="checkbox">
  <input type="checkbox">
  <span class="checkbox-item"></span>
  <span class="checkbox-label">Checkbox label</span>
</label>
```

Le `span.checkbox-item` est adjacent à l'`input[type=checkbox]`, il est donc sélectionné et peut être stylisé en fonction du premier (checked, disabled ...).

---

En vous inspirant de cela, seriez-vous capable de faire la même chose avec l'`input[type=radio]` ?

Proposez-moi vos solutions en commentaires ou via le [formulaire de contact](/contact), je donnerai ma solution bientôt.
