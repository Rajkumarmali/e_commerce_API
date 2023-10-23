const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
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
    },
    buyerId: {
        type: String,
        require: true,
    }
})
const Orders = mongoose.model("Orders", orderSchema);
module.exports = Orders