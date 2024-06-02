const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name:String,
    menuId:Number
})


const Category =  mongoose.model("category",categorySchema);
module.exports = Category;