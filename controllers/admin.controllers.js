const Product = require('../models/product.model');

async function getProducts(req, res, next) {
    try {
        const products = await Product.findAll();
        res.render('admin/products/all-products', {products:products})
    } catch (error) {
        next(error);
        return;
    }
 }

function getNewProduct(req, res) {
    res.render('admin/products/new-product');
 }

async function createNewProduct(req, res, next) { 
    const product = new Product({
        ...req.body,
        image: req.file.filename
    });

    try {
        await product.save();        
    } catch (error) {
        next(error);
        return;
    }
    
    res.redirect('/admin/products')

}

async function getUpdateProduct(req, res, next) { 
    try {
        const product = await Product.findById(req.params.id);
        
        res.render('admin/products/update-product', {product:product})
     } catch (error) {
        next(error);
       
    }
}

async function updateProduct(req, res, next) {
    const product = new Product({
        ...req.body,
        _id: req.params.id
    });

    if (req.file) {
        product.replaceImage(req.file.filename);
    }

    try {
        await product.save();
        console.log(product);
    } catch (error) {
        next(error); 
    }
    res.redirect('/admin/products');
}
    
async function deleteProduct(req, res, next) {
    let product;
    try { 
        product = await Product.findById(req.params.id);
        await product.remove();

    } catch (error) {
        return next(error)
    }
    res.status(200).json({ message: 'Deleted Product Successfully' })
}

// async function deleteProduct(req, res) {
//   const productId = req.params.productId;

//   try {
//     const product = await ProductModel.findById(productId);

//     if (!product) {
//       throw new Error('Product not found');
//     }

//     // Delete the product or perform other actions

//     res.status(200).json({ message: 'Product deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(404).json({ error: 'Could not find product with that id' });
//   }
// }


module.exports = {
    getProducts:getProducts,
    getNewProduct: getNewProduct,
    createNewProduct: createNewProduct,  
    getUpdateProduct: getUpdateProduct,
    updateProduct: updateProduct,
    deleteProduct:deleteProduct, 
}