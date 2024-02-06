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
     res.status(201).json({
         message: 'Cart updated'
     })
 }
 
module.exports = {
    addCartItem: addCartItem
};