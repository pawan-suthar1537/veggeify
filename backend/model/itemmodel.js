const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
});

const commentSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const moreSchema = new mongoose.Schema({
  prep_time: {
    type: String,
    required: true,
  },
  cook_time: {
    type: String,
    required: true,
  },
  serving: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
});

const itemSchema = new mongoose.Schema({
  menuId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  thumbnail_image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  instruction: {
    type: String,
    required: true,
  },
  tags: [String],
  ingredients: {
    type: [ingredientSchema],
    required: true,
  },
  comments: {
    type: [commentSchema],
    required: true,
  },
  more: {
    type: [moreSchema],
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
