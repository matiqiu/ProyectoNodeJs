const express = require("express");
const app = express();
const {
  GetCategorias,
  GetCategoria,
  NewCategoria,
  UpdateCategoria,
  DeleteCategoria,
} = require("./categoria");

async function getCategorias(req, res) {
  try {
    let respuesta = await GetCategorias();
    res.send(respuesta);
  } catch (e) {
    res.send("Error en la busqueda de categorias");
  }
}

async function getCategoria(req, res) {
  try {
    let id = req.params.idcategoria;
    let respuesta = await GetCategoria(id);
    res.send(respuesta);
  } catch (e) {
    res.send("Error en la busqueda de categoria");
  }
}

async function newCategoria(req, res) {
  try {
    let id = req.body;
    let respuesta = await NewCategoria(id);
    res.send(respuesta);
  } catch (e) {
    res.send("Error al ingresar Categoria");
  }
}

async function updateCategoria(req, res) {
  try {
    let id = req.params.idcategoria;
    let categoria = req.body;
    let respuesta = await UpdateCategoria(id, categoria);
    res.send(respuesta);
  } catch (e) {
    res.send("Error al editar Categoria");
  }
}

async function deleteCategoria(req, res) {
  try {
    let id = req.params.idcategoria;
    let categoria = req.body;
    let respuesta = await DeleteCategoria(id, categoria);
    res.send(respuesta);
  } catch (e) {
    res.send("Error al eliminar categoria");
  }
}

//GET
app.get("/api/categorias", getCategorias);
app.get("/api/categorias/:idcategoria", getCategoria);

//POST
app.post("/api/categorias", newCategoria);

//PUT
app.put("/api/categorias/:idcategoria", updateCategoria);

//DELETE
app.delete("/api/categorias/:idcategoria", deleteCategoria);

module.exports = app;
