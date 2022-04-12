require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(morgan('dev'))
app.use(cors())

app.use('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(process.env.PORT, () => {
    console.log('listening => ', process.env.PORT)
})

require('./Server/Routers/RouterManager')(app)