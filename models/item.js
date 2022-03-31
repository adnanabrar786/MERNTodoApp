const mongoose = require("mongoose")
const connection =  require("../database/database")

const itemSchema = new mongoose.Schema({
    name: String,
});


const Item = connection.model('Item', itemSchema);

module.exports = Item ;