const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:false }))

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/openai', require('./routes/openaiRoutes'))

app.listen(port, ()=>console.log(`Server start on port ${port}`))
