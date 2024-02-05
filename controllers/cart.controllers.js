class Cart {
    constructor(items =[]) {
        this.items = items;
    }

    addItem(product) {
        for (let i = 0; i < this.items.length; i++){
            const item = this.items[i];
        }
        this.items.push(product);
    }
}