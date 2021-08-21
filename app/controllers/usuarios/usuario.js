const Usuario = require('../../models/usuarios')
const {generaJWT} = require('../../helpers/generarToken')

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
    if (usuarioEncontrado) {
        console.log({ usuario: usuario })
        let data = await Usuario.updateOne({ usuario: usuario }, { $set: { email: user.email } })
        return data
    } else {
        return ("No se encontró ningun registro")
    }
}

async function DeleteUsuario (usuario) {
    const usuarioEncontrado = await GetUsuario(usuario)
    if(usuarioEncontrado) {
        let data  = await Usuario.deleteOne({usuario})
        return data
    } else {
        return ("No se encontró ningun registro")
    }
}

const LoginUsuario = async (req,res)=>{
    const {email, clave} = req.body
    const user = await Usuario.findOne({email,clave})
    if(!user){
        return res.status(400).json({
            mensaje:"Login Incorrecto"
        })
    }
    const token = await generaJWT(user.email)
    res.json({
        usuario:user.email,
        token
    })
}

module.exports = {
    GetUsuarios,
    GetUsuario,
    NewUsuario,
    UpdateUsuario,
    DeleteUsuario,
    LoginUsuario
}

//test
