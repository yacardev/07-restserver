const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let categSchema = new Schema({
    desc: { type: String, unique: true, required: [true, 'La descripcion es obligatoria.'] },
    user: { type: Schema.Types.ObjectId, ref: 'User' }

});

module.exports = mongoose.model('Categories', categSchema);