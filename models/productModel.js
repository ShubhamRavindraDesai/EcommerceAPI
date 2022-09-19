const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [false, "a match must have a name"],
    trim: true,
  },
  description: String,
  images:[],
  price:Number,
  discountPercentage: Number,
  stock:{type: Number, default: 10},
  brand: {type: String, default: 'mi'},
  category: String,
  thumbnail: String,
  inCart: {
    type: Boolean,
    default: false
  },
  inWish: {
    type: Boolean,
    default: false
  },
  rating:{type: Number, 
    default: 4.5
  },
  description: String
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product