const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [false, "a match must have a name"],
    trim: true,
  },
  image: {
    type: String,
  },
  price:Number,
  description: String
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product