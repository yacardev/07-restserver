var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var productsSchema = new Schema({
    name: { type: String, required: [true, 'El nombre es obligatorio'] },
    unitPrice: { type: Number, required: [true, 'El precio Unitario es obligatorio'] },
    desc: { type: String, required: false },
    status: { type: Boolean, required: true, default: true },
    img: { type: String, required: false },
    category: { type: Schema.Types.ObjectId, ref: 'Categories', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});


module.exports = mongoose.model('Product', productsSchema);