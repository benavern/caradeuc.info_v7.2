export default createClass({
  render: function () {
    const entry = this.props.entry

    // header
    const img = entry.getIn(['data', 'featured_image'])
    const featured_img = this.props.getAsset(img) || ''
    const title = entry.getIn(['data', 'title'])

    return h('div', { className: 'content' },

      // header de la page
      h('header', { id: 'page-header' },
        h('div', { className: 'header-background', style: { backgroundImage: `url(${featured_img.toString()})` } }),

        h('div', {className: 'container'},
          h('div', {},
            h('h1', { style: { textTransform: 'capitalize' } }, title)
          )
        )
      ),

      // contenu de la page
      h('div', { id: 'page', className: 'has-triangle' },
        // décoration
        h('svg', { className: 'triangle', viewBox: "0 0 100 100", preserveAspectRatio: "none" },
          h('polygon', { fill: 'var(--white)', points: "0,100 0,75 25,100 50,25 75,50 100,0 100,100" })
        ),

        // contenu de la page
        h('div', { className: 'container' }, this.props.widgetFor('body'))
      )
    )
  }
})
