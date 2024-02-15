const Order = require('../models/order.model');
const User = require('../models/user.model');

async function addOrder(req, res,next) {
    const cart = res.locals.cart;
    let userDocument;
    try {
        userDocument = await User.findById(res.locals.uid);
    } catch (error) {
        return next(error);
    }
    const order = new Order(cart, userDocument);
    try {
        order.save();
    } catch (error) {
        return next(error);
     }
        
    }

module.exports = {
    addOrder:addOrder
}