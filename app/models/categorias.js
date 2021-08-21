const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categoriasSchema  = new Schema({
    idcategoria: {
        type: Number,
        required: [true, 'el campo categoria es obligatorio'],
        unique: true
    }, 

    nombre: {
        type: String
    },

    estado: {
        type: Boolean,
        default: 0

    }
},{
    timestamps: true,
    versionKey: false
})


module.exports = mongoose.model('Categorias', categoriasSchema, 'Categorias')