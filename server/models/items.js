const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    name : String,
    description : String
})

const ItemModel = mongoose.model("items", ItemSchema)
module.exports = ItemModel