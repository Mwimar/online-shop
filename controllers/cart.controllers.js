class Cart {
    constructor(items =[]) {
        this.items = items;
    }

    addItem(product) {
        
        for (let i = 0; i < this.items.length; i++){
            const item = this.items[i];
            if (item.product.id === product.id) {
                
            }
        }
        this.items.push(product);
    }
}