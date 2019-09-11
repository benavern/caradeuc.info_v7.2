---
title: SpaceInvaders
author: Benjamin Caradeuc
date: 2019-02-28T00:25:48.000Z
tags:
  - jeu
  - js
  - es6
  - classes
  - canvas
  - html5
featured_image: /images/uploads/screenshot.png
thumbnail: /images/uploads/screenshot.png
---
Ces derniers temps, j'ai eu envie de me plonger dans les [classes javascript (es6)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes).

Je ne savais pas trop quoi faire avec et puis je me suis souvenu d'une présentation du langage [Haskell](https://www.haskell.org/) par une de mes collègues. Cette présentation était axée sur la programmation fonctionnelle, via l'implémentation d'un jeu, j'ai nommé Space Invaders.

## OK, mais c'est quoi le rapport alors?

Et bien le sujet était tout trouvé du coup!

Je me suis dit que je reprendrais le principe du jeu mais en le faisant fonctionner dans le navigateur. Pour ça il fallait également que je comprenne comment fonctionne le [canvas HTML5](https://developer.mozilla.org/fr/docs/Web/HTML/Element/canvas), un des moyens de faire du rendu 2D assez facilement sur le web.

## Bien, alors ça a donné quoi ?

![aperçu du jeu](https://github.com/benavern/space-invaders/blob/master/screenrecord.gif?raw=true)

## Un gif ? Je veux une demo!

Ça tombe bien, j'ai fait une page de démo ici: [https://z-space-invaders.netlify.com/](https://z-space-invaders.netlify.com/)

## Mais ça marche comment ?

Je me suis inspiré d'un fonctionnement que j'avais déjà vu sur Unity3d.

En gros, il y a une méthode update, qui s'appelle elle même à une vitesse folle (toutes les frames), grâce à la fonction [requestAnimationFrame](https://developer.mozilla.org/fr/docs/Web/API/Window/requestAnimationFrame)

Cette méthode va dessiner tous les éléments sur le canvas (player, ennemis, missiles, ...) après avoir effacé tout ce qu'elle avait fait à la frame précédente.

Une classe se charge donc de gérer la logique du jeu, le canvas, les objets à dessiner. Avec des eventListeners on peut détecter les touches du clavier et mettre à jour en fonction chaque objet du jeu.

Quelques algorithmes plus tard, on obtient un jeu plus ou moins fonctionnel.

## OK, et alors ça sert à quoi tout ça ?

[A rien, c'est pour faire avancer le chimiliii...](https://www.youtube.com/watch?v=bUdhyn2HofE)
