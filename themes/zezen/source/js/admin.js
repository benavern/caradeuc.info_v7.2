import CMS from 'netlify-cms'
import NativeColorWidget from "netlify-cms-widget-native-color"
import postPreviewTemplate from './_admin/post-preview'
import pagePreviewTemplate from './_admin/page-preview'

// custom widgets
CMS.registerWidget("color", NativeColorWidget.Control)

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
