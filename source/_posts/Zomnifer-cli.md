---
title: Zomnifer cli
author: Benjamin Caradeuc
date: 2018-10-23 19:43:14
tags:
  - cli
  - labo
  - nodejs
featured_image: https://raw.githubusercontent.com/benavern/zomnifer-cli/master/screenshots/screenshot.jpeg
thumbnail: https://raw.githubusercontent.com/benavern/zomnifer-cli/master/screenshots/screenshot.jpeg
---

Salut les amis!

Souvenez vous, j'ai dit il y a peu que j'explorais un peu le [développement d'applications CLI (command-line-interface)](/2018/10/01/Coffee-Break-cli/) via nodejs. Et bien aujourd'hui je vous présente un petit projet que j'ai développé grâce à ce que j'ai appris.

J'ai nommé **ZOMNIFER CLI** ([npm](https://www.npmjs.com/package/zomnifer-cli), [github](https://github.com/benavern/zomnifer-cli))

## C'est quoi ton truc ???

C'est un petit programme que [j'avais déjà développé](https://github.com/benavern/zomnifer) à l'époque où je testais [Electron](https://electronjs.org/).

Pour faire bref, c'est un utilitaire qui permet d'éteindre, redémarrer, mettre en veille son ordinateur, ou encore d'afficher une notification personnalisée. Tout ceci de manière différée!

A l'époque je l'avais fait avec une interface graphique, cette fois c'est une interface en ligne de commande :-)

## Ah pas mal, et ça ressemble à quoi ?

![Screenshot](https://raw.githubusercontent.com/benavern/zomnifer-cli/master/screenshots/screenshot.jpeg)


## Mais moi je suis pas sur linux!

Aucun problème! J'ai développé cet outil dans l'idée de l'utiliser sur plusieurs plateformes! Je l'utilise moi-même sur Linux (à la maison) et sur windows (au travail). J'ai même fait en sorte que ça marche sur mac!

**ZOMNIFER CLI** devrait donc être fonctionnel sur les 3 principales plateformes :

* Linux
* Windows
* Mac


## Cool. Maintenant comment je fais ?

rien de plus simple :

```bash
# sans installation
npx zomnifer-cli

# avec installation
npm i -g zomnifer-cli
zomnifer
```

---

Tous avis est le bienvenu! Si vous avez des idées d'amélioration à proposer, des bugs à soumettre, de nouveaux projets à réaliser, de l'aide à demander, n'hésitez pas à utiliser les commentaires ci-dessous. Vous pouvez également me contacter via mon [formulaire de contact](/contact)...
