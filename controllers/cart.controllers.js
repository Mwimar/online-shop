class Cart {
    constructor(items =[]) {
        this.items = items;
    }

    addItem(product) {
        this.items.push(product);
    }
}