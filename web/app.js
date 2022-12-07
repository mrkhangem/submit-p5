const nunjucks = require('nunjucks')
const express = require('express')

const app = express()x

nunjucks.configure('views', {
  express: app,
  autoescape: false,
  noCache: true
})

app.set('view engine', 'njk')
app.use(express.static('public'))

app.locals.title = process.env.web_TITLE || 'husky'
app.locals.image = process.env.web_IMAGE || 'husky-1.jpg'
app.locals.version =
  process.env.web_VERSION || require('./package.json').version

app.get('/', async (req, res) => {
  res.render('index')
})

app.get('/healthcheck', (req, res) => {
  res.json({ uptime: process.uptime() })
})

module.exports = app
