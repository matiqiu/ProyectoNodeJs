const Usuarios = require('../models/usuarios')

const existeEmailUsuario = async (email) => {
    let usuario = await Usuarios.findOne({ email: email })
    if (usuario) {
        throw new Error('El email:' + email + 'ya está ingresado')
        //throw new Error(`El nombre ${nombre} ya esta ingresado`)
    }
}

module.exports = {
    existeEmailUsuario
}