const express = require("express");

const productsController = require('../controllers/product.controllers');

const router = express.Router();

router.get('/products', productsController.getAllProducts )



module.exports = router;
