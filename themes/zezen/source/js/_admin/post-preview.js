import moment from 'moment'

export default createClass({
  render: function () {
    const entry = this.props.entry

    // header
    const img = entry.getIn(['data', 'featured_image'])
    const featured_img = this.props.getAsset(img)
    const title = entry.getIn(['data', 'title'])
    const author = entry.getIn(['data', 'author'])
    const date = entry.getIn(['data', 'date'])
    const tags = entry.getIn(['data', 'tags'])

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

          // contenu de la recette
          h('article', { className: 'post-content', style: { margin: '.25rem', padding: '.5rem' } }, this.props.widgetFor('body'))
        )
      )
    )
  }
})
