---
title: z-web-components
author: Benjamin Caradeuc
date: 2020-04-26T13:59:18.734Z
tags:
  - web-components
  - js
  - html
  - css
  - labo
featured_image: /images/uploads/logo.png
thumbnail: /images/uploads/logo.png
---
En ce moment, c'est *le confinement*. Et comme tout le monde, je passe beaucoup plus de temps devant mon PC à attendre de pouvoir sortir. Pour mettre ce temps à profit, j'ai décidé d'apprendre des choses sur les technologies du web que je ne connaissais pas beaucoup. Voici en exclusivité un projet que j'ai commencé avec l'une d'elle, les **web components**.

## C'est quoi ça, ça se mange ?

Quoi de mieux que de citer la MDN, documentation ~~presque~~ officielle de javascript.

> Les Composants Web sont constitués de plusieurs technologies distinctes permettant de créer des composants d'interface graphique personnalisés et réutilisables, qui ont été créés en utilisant des technologies web libres. Ils font partie du navigateur, et donc ne nécessitent pas de bibliothèque externe comme jQuery ou Dojo. Un Composant Web existant peut être utilisé sans l'écriture de code, en ajoutant simplement une déclaration d'importation à une page HTML. Les Composants Web utilisent les nouvelles capacités standard de navigateur, ou celles en cours de développement.
> 
<small style="display: block; text-align: right;">[[source]](https://developer.mozilla.org/fr/docs/Web/Web_Components)</small>

## Très bien, mais alors qu'est-ce que t'a fait avec ça ?

Une librairie de composants tout simplement. Eh oui, ces derniers temps je me suis retrouvé plusieurs fois à créer des petits snippets pour améliorer des éléments natifs de HTML mais sans forcément les partager, ou les rendre vraiment génériques. Du coup c'était l'occasion idéale!

Je vous présente : [Z-Web-Components](https://z-web-components.netlify.app)

Pour me faciliter la tâche, j'ai choisi d'utiliser une librairie tout droit sortie du [projet polymer](https://www.polymer-project.org/) de google, elle s'appelle [LitElement](https://lit-element.polymer-project.org/). Elle permet principalement d'aider à l'écriture des templates, et à la gestion des attributs/propriétés des éléments.

## Génial, qu'est-ce qu'on peut faire avec ça ?

Tout ce qu'on veut sur le web. On peut installer **z-web-components** via [npm](https://www.npmjs.com/package/z-web-components) et même via un [cdn](https://unpkg.com/z-web-components).

Pour le moment c'est vrai il y a peu de composants, mais certains autres sont [déjà en route](https://github.com/benavern/z-components/pulls).

Tout le monde peut contribuer et proposer de nouveaux composants. S'ils me plaisent, je les intégrerai à la librairie.

## Tu as des idées pour la suite ?

J'ai quelques idées de composants:
* Un accordéon
* Une modale
* Un date-picker (et même pourquoi pas un time-picker)
* des icones
* ...

Bref il y a encore beaucoup à faire... Le temps et sûrement l'implication de la communauté open-source influeront sur ma motivation à continuer sur ce projet.

Si le projet vous intéresse n'hésites pas à commenter, partager et contribuer au projet!!!
