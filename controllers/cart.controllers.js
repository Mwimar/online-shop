const Product = require('../models/product.model');

 async function addCartItem(req, res) {
    let product;
    try {
        product = await Product.findById(req.body.productId);        
    } catch (error) {
        next(error);
        return;
    }
 }
 
module.exports = {
    addCartItem: addCartItem
};