import CMS from 'netlify-cms'
import postPreviewTemplate from './_admin/post-preview'

// styles
CMS.registerPreviewStyle('/css/style.css')

// templates
CMS.registerPreviewTemplate('posts', postPreviewTemplate)
