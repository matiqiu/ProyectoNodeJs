const Usuario = require('../../models/usuarios')

async function GetUsuarios() {
    let data = await Usuario.find({})
    return data
}

async function GetUsuario(id) {
    let data = await Usuario.findOne({ usuario: id })
    return data
}

async function NewUsuario(user) {
    const { usuario, email, clave, rol } = user

    let data = await Usuario.create({ usuario, email, clave, rol })

    return data
}

async function UpdateUsuario(usuario, user) {
    const usuarioEncontrado = await GetUsuario(usuario)
    let prueba = await Usuario.findOne({ usuario: usuario })
    //if (usuarioEncontrado) {
        console.log({usuario: usuario})
        let data = await Usuario.updateOne({usuario: usuario}, {$set:{email: user.email}})
        return data
    /* } else {
        console.log("No se encontró ningun registro")
    }     */
}

module.exports = {
    GetUsuarios,
    GetUsuario,
    NewUsuario,
    UpdateUsuario
}

//test
