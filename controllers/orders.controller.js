const stripe = require('stripe');

const Order = require('../models/order.model');
const User = require('../models/user.model');
const stripeObj = stripe('sk_test_51OlUvHKziNBk6KU21Pi6VGisnskdETuyZiOTG1kyyM9sHc2CqHsYO6rjqzsp5OtNuLg8VNz8Z5YnNvQzemYIyo2f007PInKUp9');

async function getOrders(req, res,next) {
    try {
        const orders = await Order.findAllForUser(res.locals.uid);
        res.render('customer/orders/all-orders', {
            orders:orders
        });
    } catch (error) {
        next(error);
    }
}

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
        await order.save();
    } catch (error) {
        return next(error);
    }
    req.session.cart = null;
    res.redirect('/orders')
        
    }

module.exports = {
    addOrder: addOrder,
    getOrders:getOrders
}