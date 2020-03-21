const express = require('express')
const routes = require('./routes')
const Mongoose = require('mongoose')
const bodyParserMiddleware = require('body-parser')
const cors = require('cors')

const { MONGO_DB_URI } = process.env

const app = express()

// Add middleware
app.use('*', cors())
app.use(bodyParserMiddleware.json())
app.use(bodyParserMiddleware.urlencoded({ extended: true }))

app.use((req, res, next) => {
  req.body = { ...req.body, ...req.params, ...req.query }
  next()
})

// Add the routes
routes(app)

app.listen(process.env.PORT, () => {
  console.log('Your node js server is running on PORT: ', process.env.PORT)
})

Mongoose.connect(MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('DB Connected!'))
  .catch(err => {
    console.log(Error, err.message)
  })
