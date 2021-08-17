const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuariosSchema = new Schema({
    usuario: {
        type: Number,
        required: [true, 'el campo usuario es obligatorio'],
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    clave: {
        type: String
    },
    rol: {
        type: String,
        emun: ['ADMIN', 'VENDEDOR', 'CLIENTE'],
        default: 'CLIENTE'
    }
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Usuarios', usuariosSchema, 'Usuarios')