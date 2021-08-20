const express = require('express')
const { check } = require('express-validator')
const app = express()
const { GetUsuarios, GetUsuario, NewUsuario, UpdateUsuario } = require('./usuario')

async function getUsuarios(req, res) {
    try {
        let respuesta = await GetUsuarios()
        res.send(respuesta)
    } catch (e) {
        res.send("Error en la busqueda de usuarios")
    }
}

async function getUsuario(req, res) {
    try {
        let id = req.params.usuario
        let respuesta = await GetUsuario(id)
        res.send(respuesta)
    } catch (e) {
        res.send("Error en la busqueda del usuario")
    }
}

async function newUsuario(req, res) {
    try {
        let user = req.body
        let respuesta = await NewUsuario(user)
        res.send(respuesta)
    } catch (e) {
        res.send("Error al ingresar Usuario")
    }
}

async function updateUsuario(req, res) {
    let usuario = req.params.usuario
    let user = req.body
    let respuesta = await UpdateUsuario(usuario, user)
    res.send(respuesta)
}

//GET
app.get("/api/usuarios", getUsuarios)
app.get("/api/usuarios/:usuario", getUsuario)
//POST
app.post("/api/usuarios", newUsuario)
//PUT
app.put("/api/usuarios/:usuario", updateUsuario)

module.exports = app