const express = require('express')
const app = express()

/**
 * RUTAS
 */


 app.use(require('../controllers/categorias/categoria.route'))

module.exports = app
