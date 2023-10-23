const mongoose = require('mongoose')
const catalogSchema = new mongoose.Schema({
    itemName: {
        type: String,
        require: true
    },
    itemPic: {
        type: String
    },
    price: {
        type: Number,
        require: true,
    },
    sellerId: {
        type: String,
        require: true,
    }
})
const Catalogs = mongoose.model("catalogs", catalogSchema);
module.exports = Catalogs;