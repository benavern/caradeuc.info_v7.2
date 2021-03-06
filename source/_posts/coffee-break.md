---
title: Coffee Break
author: Benjamin Caradeuc
date: 2018-09-22 00:51:52
tags:
  - vuejs
  - test
  - vuido
  - lazy
  - labo
featured_image: https://github.com/benavern/coffee-break/raw/master/screenshots/CoffeeTime.jpeg
thumbnail: https://github.com/benavern/coffee-break/raw/master/screenshots/CoffeeTime.jpeg
---

En tant que **développeur web**, on nous prend souvent pour des *"programmeurs"* capables de coder un peu tout, et surtout des "logiciels"...

Le problème c'est qu'on s'est tellement habitués à notre confort dans le monde du web que, bien souvent, on a oublié comment développer des applications natives. Les langages bien plus bas niveau que ceux dont on a l'habitude peuvent également être un frein...

## Mais où veux-tu en venir ?

Aujourd'hui, j'aimerais vous présenter un projet qui rend le développement de telles applications possible, tout en utilisant des concepts que nous (développeurs web) connaissons.

En tant que **grand fan de [VueJs](https://vuejs.org/)**, c'est sans hésiter que je me suis intéressé à [Vuido](https://vuido.mimec.org/).

La promesse de cette librairie est de nous permettre de créer des **applications natives pour PC**, et de les compiler pour Mac, Linux et Windows. Tout ceci, en écrivant du code Vue, sans l'inconvénient du poids conséquent d'une application electron.

## C'est génial ça, mais on peut faire quoi avec ?

Comme je l'ai déjà dit, de **vraies applications natives**!

Je me suis donc amusé un peu avec et voici un petit *projet assez simple*, que j'ai fait : **[coffee-break](https://github.com/benavern/coffee-break/releases/tag/v1.0.0)**

![Settings](https://github.com/benavern/coffee-break/raw/master/screenshots/Settings.jpeg)
![CoffeeTime](https://github.com/benavern/coffee-break/raw/master/screenshots/CoffeeTime.jpeg)

Pour l'essayer, téléchargez simplement l'archive correspondant à votre OS, dézippez et lancez l'exécutable.

## Tu nous montre un peu plus comment ça marche Vuido ?

Biensûr! Si vous connaissez déjà VueJs c'est facile! Pour les autres, sachez que l'apprentissage de VueJs est très simple, vous n'aurez aucun mal à suivre...

Une chose quand même à retenir quand on utilise Vuido: On ne fait ni html, ni css. Les seuls éléments utilisables, sont ceux fournis par la librairie.

### Créer un projet vuido

On va utiliser [vue-cli 3](https://cli.vuejs.org/) pour générer un projet `vuido-helloworld`

``` bash
# installer vue-cli
npm i -g @vue/cli @vue/cli-init

# générer le projet
vue init mimecorg/vuido-webpack-template vuido-helloworld

# puis suivez les instructions...s
```

### Premier lancement

```bash
# build de l'application puis lancement
npm run build && npm start
```

> Et Bim!

![Premier lancement](/images/uploads/premier_lancement.jpeg)

### Personnaliser

A chaque fois que vous changez le code, il faut faire `ctrl+C` et relancer :

```bash
# build de l'application puis lancement
npm run build && npm start
```

Pour modifier la fenetre, ouvrir le fichier `src/MainWindow.vue` puis par exemple :

```html
<template>
  <Window title="Example" width="400" height="100" margined v-on:close="exit">
    <Box padded>
      <Text>Bienvenue ici {{ name }}!</Text>

      <TextInput v-model="name"/>

      <Button @click="exit">Quitter</Button>
    </Box>
  </Window>
</template>

<script>
export default {
  data () {
    return {
      name: "Nobody"
    }
  },
  methods: {
    exit () {
      this.$exit();
    }
  }
}
</script>
```

Comme vous l'avez surement remarqué, dans le template il y a uniquement des composants fournis par vuido, **aucun tag html ne peut être utilisé**.

![modif1](/images/uploads/modif1.jpeg)


## Conclusions

#### Pros:

* Très simple à utiliser grâce à VueJs
* Beaucoup plus léger qu'une application Electron
* Bonne documentation

#### Cons

* Non personnalisable en terme de styles
* Pas encore de version 1.0 (version courante: 0.2.0)

---

**Vuido** est un projet qui vient de démarrer et qui n'est pas prêt pour la production. Il utilise la librairie [libui](https://github.com/andlabs/libui), grâce à laquelle il est capable de compiler les composants en interface native via les bindings [libui-node](https://github.com/parro-it/libui-node).

Pour aller plus loin, n'hésitez pas à aller voir la [documentation](https://vuido.mimec.org/introduction) qui est très bien faite. Il n'y a pas encore beaucoup de possibilités, mais le projet commence toute de même à prendre forme.

J'ai déjà soumis plusieurs issues sur le projet et le développeur est très réactif, je pense essayer de contribuer bientôt ;)
