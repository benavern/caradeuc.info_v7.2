---
title: material input sans js
author: Benjamin Caradeuc
date: 2019-09-10T21:58:51.982Z
tags:
  - css
  - sass
  - tips
featured_image: /images/uploads/capture-d-écran-du-2019-09-10-23.59.33.png
thumbnail: /images/uploads/capture-d-écran-du-2019-09-10-23.59.33.png
---
Salut tout le monde,

Aujourd'hui j'avais envie d'essayer un truc rapide en CSS :

Reproduire le design de google Material sur les inputs et textareas avec l'animation et tout, sans JS.

Voici le résultat: 

<iframe src="https://codesandbox.io/embed/no-js-material-input-0ewcy?fontsize=14&module=%2Fsrc%2Fcss%2F_mat-input.scss" title="no-js-material-input" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

Au final ça n'a pas été si difficile. La seule partie un peu "hard" a été de trouver comment garder le label et la couleur du bas de l'input comme il faut quand le champ est rempli.

C'est finalement grâce au sélecteur `:placeholder-shown` ([support navigateur 89%](https://caniuse.com/#search=%3Aplaceholder-shown)) que j'ai pu le faire, en mettant des placeholders ne contenant qu'un espace.

---

Si ce genre de petites astuces vous plaisent n'hésitez pas à me le dire, j'essaierai d'en partager un peu plus souvent ;)

Merci de m'avoir lu et à bientôt !
