const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
require('dotenv').config()
const router = require('./routes')
const errorHandler = require('./utils/errorHandler')

//Esta es nuestra aplicacion
const app = express()

//* Middlewares

app.use(express.json()) //Me pertmite enviar el bodi en formato json
app.use(helmet()) // Me ayuda a proteger nuestra app contra ataques enviando unos encabezados
app.use(cors()) // Maneja los cors

//* rutas
app.get('/', (req, res) => {
    return res.send('Welcome to node')
})
app.use('/api/v1', router)

//* Middlewares despues de las rutas
app.use(errorHandler)

module.exports = app