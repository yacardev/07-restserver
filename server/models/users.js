const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let validateProfiles = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un perfil valido.'
}

let Schema = mongoose.Schema;

let usuarioSch = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false

    },
    profile: {
        type: String,
        required: false,
        default: 'USER_ROLE',
        enum: validateProfiles
    },
    status: {
        type: Boolean,
        required: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

usuarioSch.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
}

usuarioSch.plugin(uniqueValidator, { message: '{PATH} debe ser unico.' })

module.exports = mongoose.model('User', usuarioSch);