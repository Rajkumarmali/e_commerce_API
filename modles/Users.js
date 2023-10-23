const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    role: {
        type: String,
        require: true,
        enum: ["buyers", "sellers"],
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true
    },
    addresss: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true,
    },


})


const Users = mongoose.model("Users", UserSchema);
module.exports = Users;