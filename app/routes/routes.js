const express = require('express')
const app = express()

/**
 * RUTAS
 */

app.use(require('../controllers/usuarios/usuario.route'))
app.use(require('../controllers/productos/producto.route'))

module.exports = app
