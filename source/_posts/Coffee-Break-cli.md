---
title: Coffee Break cli
author: Benjamin Caradeuc
date: 2018-10-01 22:02:52
tags:
  - vuejs
  - test
  - vuido
  - lazy
  - labo
  - cli
featured_image: https://github.com/benavern/coffee-break-cli/raw/master/screenshots/CoffeeTime.jpeg
thumbnail: https://github.com/benavern/coffee-break-cli/raw/master/screenshots/CoffeeTime.jpeg
---

Salut tout le monde!

Nous les développeurs, nous utilisons presque tous les jours des applications en ligne de commande comme git, npm, docker, etc... Mais avez-vous déjà été assez curieux pour en venir à vous demander:

> Mais comment c'est fait ce truc ?

Ou encore:

> Je suis capable de coder un site web entier, mais est-ce que je peux faire un truc qui tournerait dans mon terminal ?

Et bien c'est exactement ce qui m'est arrivé récemment!

## Ok, c'est bien et donc ?

Ooooh pas si vite copain... Laisse moi m'expliquer!

En fait, je me disais : j'ai en tête quelques outils qui pourraient être pratiques à avoir **dans mon terminal**, mais je ne sais pas comment les mettre en place. En plus le bash ça va 2 min mais je trouve que c'est quand même pas le language le plus sexy du monde quoi...

Du coup j'ai réfléchit et me suis dit qu'il fallait que ça fonctionne sur mes 2 OS principaux:

* Linux sur mon PC fix à l'appart et mon PC portable perso
* Windows (eh oui ...) au boulot

**NodeJs ça serait parfait non ?** Je connais déjà le javascript, il peut tourner sur ces 2 OS et avec npm je dois pouvoir trouver mon bonheur ...

## Waow! Alors du coup ???

Bah avant de commencer à coder tête baissée l'une des idées que j'avais, je me suis creusé la tête pour essayer de faire un truc **simple, basique, [~~Oké~~](https://youtu.be/2bjk26RwjyU),** et j'ai rien trouvé de mieux que de refaire une petite app sur le même principe que [coffee-break](https://benjamin.caradeuc.info/2018/09/21/coffee-break/) mais qui puisse marcher dans ma console.

Et c'est comme ça que **[coffee-break-cli](https://github.com/benavern/coffee-break-cli)** est né.

Si je résume, en moins de 2 heures, j'ai réussi à créer une application complète avec :

* Une configuration scénarisée puis un cycle de vie.
* La possibilité d'enregistrer ses configurations pour les réutiliser.
* *Une utilité qui n'est plus à prouver!*

Un petit aperçu :

![Settings](https://github.com/benavern/coffee-break-cli/raw/master/screenshots/Settings.jpeg)

![CoffeeTime](https://github.com/benavern/coffee-break-cli/raw/master/screenshots/CoffeeTime.jpeg)

## Hey c'est pas mal! Comment je fais pour l'avoir ?

C'est très simple, [je l'ai même publié sur npm](https://www.npmjs.com/package/coffee-break-cli)!

```bash
# sans installation (npm 6+)
npx coffee-break-cli

# avec installation
npm i -g coffee-break-cli
coffee-break-cli
```

## Et sinon tes autres idées alors ?

![Suspens](https://media.giphy.com/media/Bp5dwyOW9BwbK/giphy.gif)

Mmmmh disons que je considère mon POC validé, la suite sera donc au prochain épisode ;-)

---

*En espérant que cet article vous aura plu, n'ésitez pas à le partager et/ou laisser un commentaire*
