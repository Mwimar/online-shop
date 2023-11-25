class Product {
    constructor(productData) {
        this.title = productData.title;
        this.summary = productData.summary;
        this.price = productData.price;
        this.description = productData.description;
        this.image = productData.image;//name of image file
        this.imagePath = `product-data/images/${productData.image}`;
        this.imageUrl = `/products/assets/images/${productData.image}`;
    }
}

module.exports = Product;