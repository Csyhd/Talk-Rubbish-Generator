const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTalkrubbish = require('./generate_talkrubbish')
const app = express()
const port = 3000

app.use(express.static('public'))
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const talkRubbish = generateTalkrubbish(options)
  res.render('index', { talkRubbish: talkRubbish, options: options })
})

app.listen(port, () => {
  console.log('satrt')
})