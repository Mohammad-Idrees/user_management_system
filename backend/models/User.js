const mongoose = require("mongoose")

//Create user Schema and Model
//Schema
const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    phone: String,
    comments: String
})

//Model
const User = mongoose.model('users', userSchema)


module.exports = User