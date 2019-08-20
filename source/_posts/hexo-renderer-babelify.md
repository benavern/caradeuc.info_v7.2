---
title: hexo-renderer-babelify
author: Benjamin Caradeuc
date: 2019-08-20T20:27:52.233Z
tags:
  - open source
  - hexo
  - cms
  - plugin
featured_image: /images/uploads/babelify.jpg
thumbnail: /images/uploads/babelify.jpg
---
C'est bien connu, le développement est fait pour répondre à des besoins. Et quand on se retrouve confronté à l'un d'eux, en bon ~~fainéant~~ développeur, on cherche d'abord à savoir si un copain n'a pas  déjà eu le même problème à résoudre. Avec un peu de chance, il y aura déjà remédié par le développement d'un outil approprié.

## Oui d'accord mais où tu veux en venir exactement ?

Pour une fois, je me suis trouvé dans la situation où j'avais un besoin, personne ne semblait avoir essayé ou réussi à trouver quelque-chose pour le satisfaire, et surtout je savais que j'étais capable de le faire tout seul. Mieux : je pouvais même le partager avec le monde entier car la solution était faite pour un projet open-source.

## Bien, du coup c'est quoi ce fameux besoin ?

Pas si vite, laisse moi t'expliquer!

En gros je bossais sur un projet perso qui consiste à développer un autre blog sur la même techno utilisée ici: [hexo](https://hexo.io)

J'avais déjà bien avancé sur la partie génération des pages en HTML, le design en CSS et je commençais à faire la partie JS. Tellement habitué au code plutôt moderne du travail, je me suis senti un peu limité. Habituellement j'écris de l'es6 avec des fonctionnalités réservées aux bundlers tels que webpack et compagnie, mais ce jour je n'avais le choix qu'entre ces 2 solutions :

* Importer dans l'HTML chaque fichier créé en faisant bien gaffe à les mettre dans l'ordre.
* Tout écrire dans le même fichier JS.

Et tout ça en étant également obligé de n'utiliser que du JS que le navigateur peut comprendre.

Frustrant non ?

C'est là que j'ai décidé de développer un [plugin](https://hexo.io/plugins/) hexo, pour combler ce manque et être capable d'écrire du vrai JS comme on en fait de nos jours.

## Cool! Ça ressemble à quoi alors ?

À ça: **[hexo-renderer-babelify](https://www.npmjs.com/package/hexo-renderer-babelify)**

C'est un package npm sous forme de plugin qu'il suffit d'installer sur son projet hexo et après un minimum de configuration, on peut coder en JS tout ce que babel sait transformer. En prime, les imports et exports es6 sont possibles !

Pour l'installer, rien de plus simple : 

```bash
npm i hexo-renderer-babelify
```

Question configuration, ça se passe dans le fichier `_config.yml` : 

```yml
babelify:
  presets:
    - '@babel/preset-env'
  sourceMaps: true
```

**/!\ Attention** : Aucun preset babel n'est installé par défaut. Pour que cette configuration fonctionne, il vous faudra également faire :

```bash
npm i @babel/presets-env
```

## Et au niveau des fichiers y'a rien de spécial à faire ?

Non ! Tous les fichiers js qui sont pris en compte par hexo (tous les fichiers ou dossiers qui ne commencent pas par un `_`) seront transformés via le plugin.

Il ne vous reste plus qu'à coder en es6, par exemple :

```js
// app.js
import hello from './_scripts/hello.js'

hello('World')
```

```js
// _scripts/hello.js
export default (name) => {
  console.log(`Hello, ${name}!`)
}
```

## Sans indiscrétion y a quoi sous le capot ?

En fait il y a 2 choses, et elles sont listées dans l'image là haut:

* **[browserify](http://browserify.org/)** : Un outil capable de gérer les `require` et `module.exports` et de créer un bundle final.
* **[babel](babeljs.io)** : Utilisé ici via [babelify](https://www.npmjs.com/package/babelify) qui transforme l'es6 en es5. Il traduit également les `import` en `require`, les `export default` en `module.exports`, et les `export` en `exports`...

## Bravo, et maintenant ?

Merci ! Bah maintenant le plus beau c'est que non seulement je peux écrire du JS plus récent dans mes sites hexo, mais tout le monde le peux. D'ailleurs le monde ne devrait plus tarder à le savoir car [j'ai fait une pull request](https://github.com/hexojs/site/pull/1043) à hexo pour ajouter mon plugin à la list des plugins sur leur site officiel.

Si ça vous intéresse, je vous invite à contribuer à ce plugin qui est présent [ici sur github](https://github.com/benavern/hexo-renderer-babelify) ou à laisser un commentaire ci-dessous pour me dire ce que vous en pensez. N'hésitez pas non plus à me suivre sur les réseaux et à me contacter via le [formulaire de contact](/contact).

À bientôt !
