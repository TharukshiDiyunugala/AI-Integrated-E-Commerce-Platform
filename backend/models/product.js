const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  stock: Number,
  image: String,
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
