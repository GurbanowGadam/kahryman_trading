require('dotenv').config()
const express = require('express')
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(process.env.PORT, ()=>{
    console.log('listening => ',process.env.PORT)
})

require('./Server/Routers/RouterManager')(app)