const express = require('express')
const exphbs = require('express-handlebars')
const restList = require('./restaurants.json')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {

  res.render('index', { restaurant: restList.results })
})

app.get('/restaurants/:rest_id', (req, res) => {
  const restaurant = restList.results.filter(
    restaurant => restaurant.id == req.params.rest_id
  )
  res.render('show', { restaurant: restaurant[0] })
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})