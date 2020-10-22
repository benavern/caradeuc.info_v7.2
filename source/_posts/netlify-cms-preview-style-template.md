---
title: netlify CMS preview style & template
author: Benjamin Caradeuc
date: 2019-08-22T21:50:16.459Z
tags:
  - netlify
  - cms
  - tips
featured_image: /images/uploads/avant-apres-netlify-cms.jpg
thumbnail: /images/uploads/capture-d’écran-de-2019-08-22-23-29-24.png
---
Vous le savez peut-être, il y a quelques temps j'ai décidé d'utiliser un générateur de sites statiques ([hexo](https://hexo.io)) pour mon site et blog. Ce site je l'héberge sur [Netlify](https://www.netlify.com/) qui est un très bon hébergeur gratuit.

Le problème avec les sites statiques, c'est qu'il faut toujours avoir son projet sur son PC et éditer son contenu sur son éditeur de code... Mais ça c'était avant que [Netlify CMS](https://www.netlifycms.org/) n'arrive. Avec Netlify CMS, on est capables de se connecter à une interface qui, si elle est bien configurée, permet d'éditer certains contenus d'un site.

Dans un premier temps, si on suit la plupart des tutoriels, on arrive rapidement à éditer certaines informations et surtout le contenu de ses articles de blog. En prime, il y a un volet de prévisualisation de l'article qui ne fait que reprendre les informations entrées dans le formulaire et met plus ou moins en forme la partie markdown.

![Avant](/images/uploads/capture-d’écran-de-2019-08-22-23-30-25.png "Netlify CMS preview avant")

Pratique me direz-vous... Au début c'est ce que je pensais aussi mais assez vite je me suis retrouvé à revenir à la solution éditeur de text qui me permet d'avoir un vrai aperçu de l'article avec le vrai design du site.

Et puis un jour, en passant par hasard sur le site de Netlify CMS, j'ai été faire un tour dans la doc. C'est là que j'ai découvert que cette preview pouvait être personnalisée via 2 méthodes du CMS.

## CMS.registerPreviewStyle

Pour intégrer le style de votre site dans le volet de preview, c'est très simple. Vous n'avez qu'à intégrer vos feuilles de style dedans.

Pour cela, sur le fichier html de la page admin, ajoutez cette ligne de JS.

```js
CMS.registerPreviewStyle('/css/style.css')
```

N'oubliez pas de modifier le chemin vers votre fichier css. Si vous en avez plusieurs, dupliquez la ligne en mettant les différents chemins.

![Pendant](/images/uploads/capture-d’écran-de-2019-08-22-23-28-46.png "preview with styles")

On constate maintenant que notre style a changé (la police, les couleurs, etc...) mais la structure htlm n'étant pas la même c'est encore loin d'être ressemblant!

C'est ici que la deuxième méthode entre en action:

## CMS.registerPreviewTemplate

Toujours dans le fichier html de la page admin, ajoutez cette ligne:

```js
CMS.registerPreviewTemplate('posts', postPreviewTemplate)
```
Elle permet de modifier la structure html en lui passant un template. Le CMS étant écrit en react, il faudra que ce template soit un composant react. Heureusement le CMS nous donne suffisamment d'outils pour ça:

### `createClass`

Une fonction qui prend en paramètre un objet sous la forme d'un composant react. Cet objet doit comprendre une méthode `render` qui retournera la version react du template.

### `props entry`

Pour récupérer les informations entrées dans le formulaire, vous devez utiliser la propriétés du composant `this.props.entry` qui expose une méthode `get`.

Par exemple pour récupérer le titre, il faut faire:

```js
const entry = this.props.entry
const title = entry.get([data, 'title'])

```

###  `h`

Ici, pas de  bundler très compliqué ou autres, impossible d'utiliser JSX. Il faut donc créer le template noeud par noeud avec la methode `h`qui prend au moins 2 paramètres:

- Le nom du tag html (ex: `'div'`)
- La liste des attributs à ajouter au tag. **ATTENTION** : en react on mettra `className` plutôt que `class`.
- ensuite c'est la liste des tags ou texts qui seront à mettre à l'intérieur du tag.

Pour mon site, mon template d'article de bolg ressemble à ça :

```js
const postPreviewTemplate = createClass({
  render: function () {
    const entry = this.props.entry

    // header
    const img = entry.getIn(['data', 'featured_image'])
    const featured_img = this.props.getAsset(img) || ''
    const title = entry.getIn(['data', 'title'])
    const author = entry.getIn(['data', 'author'])
    const date = entry.getIn(['data', 'date'])
    const tags = entry.getIn(['data', 'tags']) || []

    return h('div', { className: 'content' },

      // header de la page
      h('header', { id: 'page-header' },
        h('div', { className: 'header-background', style: { backgroundImage: `url(${featured_img.toString()})` } }),

        h('div', {className: 'container'},
          h('div', {},
            h('h1', {}, title),

            h('div', {}, h('small', {}, h('b', {}, author))),

            h('div', {}, h('small', {}, `le ${moment(date).format('DD/MM/YYYY')}`))
          ),

          h('div', {},
            tags.map(tag => h('a', { className: 'btn btn-sm btn-border border-primary color-primary' }, tag))
          )
        )
      ),

      // contenu de l'article'
      h('div', { id: 'post', className: 'has-triangle' },
        // décoration
        h('svg', { className: 'triangle', viewBox: "0 0 100 100", preserveAspectRatio: "none" },
          h('polygon', { fill: 'var(--white)', points: "0,100 0,75 25,100 50,25 75,50 100,0 100,100" })
        ),

        h('div', { className: 'container' },

          // contenu
          h('article', { className: 'post-content', style: { margin: '.25rem', padding: '.5rem' } }, this.props.widgetFor('body'))
        )
      )
    )
  }
})
```

![Après](/images/uploads/capture-d’écran-de-2019-08-22-23-29-24.png "preview avec style et forme")

Vous pouvez maintenant écrire votre article directement depuis votre site, et avec une preview qui reflète bien mieux la réalité.

Plein d'autres choses sont possibles sur ce CMS, pour en savoir plus rendez-vous sur [la doc](https://www.netlifycms.org/docs/customization). Vous verrez que c'est vraiment très bien fait.
