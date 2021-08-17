const Usuario = require('../../models/usuarios')

async function GetUsuarios() {
    let data = await Usuario.find({})
    return data
}

async function GetUsuario(usuario) {
    let data = await Usuario.findOne({ usuario: usuario })
    return data
}

async function NewUsuario(user) {
    const { usuario, email, clave, rol} = user

    let data = await Usuario.create({ usuario, email, clave, rol})

    return data
}

module.exports = {
    GetUsuarios,
    GetUsuario,
    NewUsuario
}

//test
