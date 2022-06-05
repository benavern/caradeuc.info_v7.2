import CMS from 'netlify-cms'
import postPreviewTemplate from './_admin/post-preview'
import pagePreviewTemplate from './_admin/page-preview'


// styles
CMS.registerPreviewStyle('/css/style.css')

// templates
CMS.registerPreviewTemplate('posts', postPreviewTemplate)

CMS.registerPreviewTemplate('about', pagePreviewTemplate)
CMS.registerPreviewTemplate('contact', pagePreviewTemplate)
CMS.registerPreviewTemplate('contact-success', pagePreviewTemplate)
CMS.registerPreviewTemplate('tags', pagePreviewTemplate)
CMS.registerPreviewTemplate('not_found', pagePreviewTemplate)
CMS.registerPreviewTemplate('foodbouffe', pagePreviewTemplate)
