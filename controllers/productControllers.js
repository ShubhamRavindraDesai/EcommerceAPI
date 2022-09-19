const axios = require("axios");
const Product = require("./../models/productModel");

exports.getAllProducts = async (req, res, next) => {
  try {
    console.log('heroku')
    // console.log(req.query);
    const products = await Product.find();

    res.status(200).json({
      status: "success",
      products,
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return next(res.status(404).json({
        status: 'fail',
        message: 'product not found'
      }));
    }
    res.status(200).json({
      status: "success",

      data: {
        product,
      },
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    console.log(newProduct)

    if (!newProduct) {
      return res.status(404).json({
        status: 'fail',
        message: 'product not found'
      });
    }

    res.status(201).json({
      status: "success",
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log(req.body)

    if (!product) {
      return res.status(404).json({
        status: 'fail',
        message: 'product not found'
      });
    }
    res.status(200).json({
      status: "success",
      message: " product has been updated"
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    console.log('product has been deleted')
    if (!product) {
      return res.status(404).json({
        status: 'fail',
        message: 'product not found'
      });
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};
