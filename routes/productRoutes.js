const express = require("express");
const productControllers = require("../controllers/productControllers");
const authController = require('./../controllers/authController')
const axios = require("axios")

const router = express.Router();

router.get("/test", async (req, res, next) => {
  try {

    const query = req.query

console.log(query)
    const data = await axios.get("https://dog.ceo/api/breeds/image/random")
    console.log(data)

    if(!data){
      res.status(400).json({
        status: "fail",
        message: "data not found"
      })
    }

    res.status(200).json({
      status: "success",
      data : data.data
    })

    next()
    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: "fail",
      message: "something went wrong"
    })
  }
  
})

router
  .route("/")
  .get(productControllers.getAllProducts)
  .post(productControllers.createProduct);
router
  .route("/:id")
  .get(productControllers.getProduct)
  .patch(productControllers.updateProduct)
  .delete(productControllers.deleteProduct);

module.exports = router;
