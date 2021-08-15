require("./app/config/config")
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')

const app = express()

app.use(cors())
app.use(helmet())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('common'))

const PORT = process.env.PORT || 3000

app.use(require('./app/routes/routes'))

mongoose.connect(process.env.Mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(resp => {
    console.log("Conexión realizada correctamente")
}).catch(resp => {
    console.log("Error en la conexión")
})

app.listen(PORT, () => {
    console.log('Servidor en ejecución en el puerto: ' + {PORT})
})