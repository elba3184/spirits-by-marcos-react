const mongoose     = require("mongoose");
const Schema       = mongoose.Schema;

const liquorSchema = new Schema ({

    brand: String,
    type: String,
    vendor: {type: Schema.Types.ObjectId, ref: 'User'},
    description: String,
    size: String,
    quantity: Number,
    cost: Number,
    price: Number,
    image: {type: Schema.Types.ObjectId, ref: 'Picture'}

});

const Liquor = mongoose.model('Liquor', liquorSchema);

module.exports = Liquor;