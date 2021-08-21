const express = require('express')
const app = express()

/**
 * RUTAS
 */

app.use(require('../controllers/usuarios/usuario.route'))
app.use(require('../controllers/productos/producto.route'))
app.use(require('../controllers/categorias/categoria.route'))

module.exports = app
