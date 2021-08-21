const express = require('express')
const { check } = require('express-validator')
const app = express()
const { GetProductos, GetProducto, NewProducto, UpdateProducto, DeleteProducto } = require('./producto')
const {validacionesCampos} = require('../../middlewares/validaciones')
const {validaJWT} = require('../../middlewares/validaJWT')

async function getProductos (req, res) {

    try {

        let respuesta = await GetProductos();
        res.send(respuesta);

    } catch (e) {
        res.send("Error en la busqueda de productos!!");
    }

}

async function getProducto (req, res) {

    try {

        let producto = req.params.idProducto;
        let respuesta = await GetProducto(producto);
        res.send(respuesta);

    } catch (e) {
        res.send("Error en la busqueda del producto!!");
    }

}

async function newProducto (req, res) {

    try {

        let prod = req.body;
        let respuesta = await NewProducto(prod);
        res.send(respuesta);

    } catch (e) {
        res.send("Error al ingresar Producto!!");
    }

}

async function updateProducto (req, res) {

    let producto = req.params.idProducto;
    let prod = req.body;
    let respuesta = await UpdateProducto(producto, prod);
    res.send(respuesta);

}

async function deleteProducto (req,res) {

    let producto = req.params.idProducto;
    let prod = req.body;
    let respuesta = await DeleteProducto(producto, prod);
    res.send(respuesta);

}

//Get
app.get("/api/productos", getProductos);
app.get("/api/productos/:idProducto", getProducto);
//Post
app.post("/api/productos", [
    check('idProducto', 'El id es obligatorio').not().isEmpty(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre', 'Ingrese nombre superior a 3 caracteres').isLength({ min: 4 }),
    validacionesCampos
], newProducto)

//PUT
app.put("/api/productos/:idProducto", updateProducto)
//DEL
app.delete("/api/productos/:idProducto", deleteProducto)

module.exports = app;