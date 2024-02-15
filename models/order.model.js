const db = require('../data/database');

class Order{
    //Status = pending, filfilled, cancelled
    constructor(cart, userData, status = 'pending', date, orderId) {
        this.productData = cart;
        this.userData = userData;
        this.status = status;
        this.date = new Date(date);
        if (this.date) {
            this.formattedDate = this.date.toLocaleDateString('en-US', {
                weekday: 'short',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                
            });
        }
        this.id = orderId;
    }


    static transformOrderDocument(orderDoc) {
        return new Order(
            orderDoc.productData,
            orderDoc.userData,
            orderDoc.status,
            orderDoc.date,
            orderDoc._id
        );
    }

    static transformOrderDocuments(orderDocs) {
        return orderDocs.map(this.transformOrderDocument);
    }

    static async findAll() {
        const orders = await db.getDb.collection('orders').find().toArray();

        return this.transformOrderDocuments(orders);
    }

    static async findAllForUser(userId) {
        const orders = await db.getDb.collection('orders').find({ 'userData._id': uid }).sort({ _id: -1 }).toArray();
        
        return this.transformOrderDocuments(orders)
    }


    save() {
        if (this.id) {
            
        } else {
            const orderDocument = {
                userData: this.userData,
                productData: this.productData,
                date: new Date(),
                status: this.status
                
            };
            return db.getDb().collection('orders').insertOne(orderDocument);
        }
    }
}

module.exports = Order;