const express = require('express')
const app = express()

/**
 * RUTAS
 */

app.use(require('../controllers/usuarios/usuario.route'))


module.exports = app
