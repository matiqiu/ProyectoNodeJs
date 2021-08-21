const Categoria = require("../../models/categorias");

async function GetCategorias() {
  let data = await Categoria.find({});

  return data;
}

async function GetCategoria(id) {
  let data = await Categoria.findOne({ idcategoria: id });
  return data;
}

async function NewCategoria(id) {
  const { idcategoria, nombre, estado } = id;

  let data = await Categoria.create({ idcategoria, nombre, estado });

  return data;
}

async function UpdateCategoria(id, categoria) {
  const categoriaEncontrada = await GetCategoria(id);
  if (categoriaEncontrada) {
    let data = await Categoria.updateOne(
      { idcategoria: id },
      { $set: { nombre: categoria.nombre }, $set: { estado: categoria.estado } }
    );
    console.log(data);
    return data;
  } else {
    return "No se encontró ningun registro";
  }
}

async function DeleteCategoria(id) {
  const categoriaEncontrada = await GetCategoria(id);
  if (categoriaEncontrada) { 

    let data = await Categoria.deleteOne({idcategoria: id});
    return data;
  } else {
    console.log("No encontró ningún registro")
  } 
}

module.exports = {
  GetCategorias,
  GetCategoria,
  NewCategoria,
  UpdateCategoria,
  DeleteCategoria
};
