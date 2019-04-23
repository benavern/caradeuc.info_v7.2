---
title: Ma police préférée pour VsCode
author: Benjamin Caradeuc
date: 2019-02-03 23:10:42
tags:
  - astuce
  - vscode
  - outils
featured_image: /images/uploads/capture.jpeg
thumbnail: /images/uploads/capture.jpeg
---

Bonjour les gens!

Me voici de retour avec un petit article dans lequel je vous explique comment installer **ma police préférée sur VSCode**.

## Montre nous d'abord à quoi ça ressemble...

![capture](/images/uploads/capture.jpeg)

## Ouah mais ça sort d'où ça!

Et bien c'est une adaptation *gratuite* de la police [Operator Mono](https://www.typography.com/fonts/operator/styles/operatormono) qui coute quand même **200$**.

C'est [kencrocken](https://kencrocken.github.io/) qui l'a créée en assemblant 2 polices gratuites:
* [FiraCode](https://github.com/tonsky/FiraCode) pour le code "normal"
* [Script12](https://www.myfontsfree.com/134618/script12pitchbt.htm) pour l'italique

## Pas mal, alors comment on fait?

### Téléchargement

Tout d'abord, il faut télécharger la police [FiraCodeiScript](https://github.com/kencrocken/FiraCodeiScript) et l'installer sur votre système.

### Réglages VSCode

Dans les réglages de VSCode (`ctrl`+`,`), renseignez la police **Editor: Font Family** avec `Fira Code iScript`.

Vous constaterez que la police change mais rien n'est affiché en italique. Il va falloir configurer l'editeur pour qu'il transforme certaines parties comme on le veut.

Pour editer plus facilement, cliquez sur le signe `{}` en haut de votre editeur pour editer les réglages en json. Dans la colonne de droite, trouvez la ligne:

```js
"editor.fontFamily": "Fira Code iScript",
```

et ajoutez en dessous ce block:

```js
"editor.fontLigatures": true,
"editor.tokenColorCustomizations": {
  "textMateRules": [
    {
      "scope": [
        //following will be in italic
        "comment",
        "entity.name.type.class", //class names
        "keyword", //import, export, return…
        "constant", //String, Number, Boolean…, this, super
        "storage.modifier", //static keyword
        "storage.type.class.js", //class keyword
      ],
      "settings": {
      "fontStyle": "italic"
      }
    },
    {
      "scope": [
        //following will be excluded from italics (VSCode has some defaults for italics)
        "invalid",
        "keyword.operator",
        "constant.numeric.css",
        "keyword.other.unit.px.css",
        "constant.numeric.decimal.js",
        "constant.numeric.json"
      ],
      "settings": {
      "fontStyle": ""
      }
    }
  ]
},
```

Une fois le fichier enregistré, vous pouvez retourner voir votre code. Il aura tellement la classe que vous ne voudrez plus revenir à une police plus banale.

N'hésitez pas à jouer un peu avec le block de paramètres que vous venez de coller. C'est le réglage que j'utilise personnellement tous les jours mais il se peut que vous trouviez une combinaison qui vous conviendra encore mieux.

---

Je ne suis pas le créateur de cette police mais je peux sans problème répondre à vos questions.

N'hésitez pas à laisser un commentaire ou à me contacter via le [formulaire de contact](/contact) prévu à cet effet.
