const Producto = require('../../models/productos')
const {generaJWT} = require('../../helpers/generarToken')

async function GetProductos () {

    let data = await Producto.find(
        {}
    );

    return data;

}

async function GetProducto (producto) {

    let data = await Producto.findOne(
        { 
            idProducto: producto 
        }
    );

    return data;

}

async function NewProducto (prod) {

    const { idProducto, nombre, precio, idCategoria, estado, imagen, descripcion } = prod;

    let data = await Producto.create(
        { 
            idProducto, 
            nombre, 
            precio, 
            idCategoria, 
            estado, 
            imagen, 
            descripcion 
        }
    );

    return data;

}

async function UpdateProducto (producto, prod) {

    const productoEncontrado = await GetProducto(producto);

    if (productoEncontrado) {

        let data = await Producto.updateOne(
            {
                idProducto: producto 
            }, 
            { 
                $set: 
                { 
                    nombre: prod.nombre, 
                    precio: prod.precio, 
                    idCategoria: prod.idCategoria, 
                    estado: prod.estado, 
                    imagen: prod.imagen, 
                    descripcion: prod.descripcion 
                } 
            }
        );

        return data;

    } else {
        return ("No se encontró ningun registro");
    }

}

async function DeleteProducto (producto) {

    const productoEncontrado = await GetProducto(producto);

    if (productoEncontrado) {

        let data  = await Producto.deleteOne(
            {
                idProducto: producto
            }
        );

        return data;

    } else {
        return ("No se encontró ningun registro")
    }

}

module.exports = {
    GetProductos,
    GetProducto,
    NewProducto,
    UpdateProducto,
    DeleteProducto
}