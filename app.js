const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

const routes = require('./routers')
const errorHandler = require('./middleware/errorhandler')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)
app.use(errorHandler)

app.listen(port, _ => {
  console.log('Listening on port', port)
})