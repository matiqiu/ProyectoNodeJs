const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productosSchema = new Schema({

    idProducto: {
        type: Number,
        required: [true, 'el campo idProducto es obligatorio'],
        unique: true
    },
    nombre: {
        type: String
    },
    precio: {
        type: Number
    },
    idCategoria: {
        type: Number,
        required: [true, 'el campo idCategoria es obligatorio']
    },
    estado: {
        type: String,
        emun: ['NUEVO', 'USADO'],
        default: 'NUEVO'
    },
    imagen: {
        type: String
    },
    descripcion: {
        type: String
    }
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Productos', productosSchema, 'Productos')