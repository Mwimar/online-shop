class Cart {
    constructor(items = [], totalQuantity = 0, totalPrice = 0) {
        this.items = items;
        this.totalQuantity = totalQuantity;
        this.totalPrice = totalPrice;
    }

    addItem(product) {
        const cartItem = {
            product: product.id,
            quantity: 1,
            totalPrice: product.price,
        };

        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            if (item.product === product.id) {
                cartItem.quantity = item.quantity + 1;
                cartItem.totalPrice = item.totalPrice + product.price;
                this.items[i] = cartItem;

                this.totalQuantity++;
                this.totalPrice += product.price;
                return;
            }
        }
        this.items.push(cartItem);
        this.totalQuantity++;
        this.totalPrice += product.price;
    }

   updateItem(productId, newQuantity) {
    for (let i = 0; i < this.items.length; i++) {
        const item = this.items[i];

        if (item.product.id === productId) {
            if (newQuantity > 0) {
                const cartItem = { ...item };
                const quantityChange = newQuantity - item.quantity;
                cartItem.quantity = newQuantity;
                cartItem.totalPrice = newQuantity * item.product.price;
                this.items[i] = cartItem;

                this.totalQuantity += quantityChange;
                this.totalPrice += quantityChange * item.product.price;

                return { updatedItemPrice: cartItem.totalPrice };
            } else {
                this.items.splice(i, 1);

                this.totalQuantity -= item.quantity;
                this.totalPrice -= item.totalPrice;

                return { updatedItemPrice: 0 };
            }
        }
    }

    // If the product is not found in the cart
    throw new Error('Product not found in the cart.');
}

}

module.exports = Cart;
