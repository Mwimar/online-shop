const Product = require('../models/product.model');

 async function addCartItem(req, res) {
    let product;
    try {
        product = await Product.findById(req.body.productId);        
    } catch (error) {
        next(error);
        return;
    }
     
     res.locals.cart.addItem(product);
     req.session.cart = res.locals.cart;
     req.session.save();
 }
 
module.exports = {
    addCartItem: addCartItem
};