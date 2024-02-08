const addToCartButtonElement = document.querySelector('#product-details button');

async function addToCart() {
    const productId = addToCartButtonElement.dataset.productid;
    fetch('/cart/items', {
        method: 'POST',
        body: JSON.stringify({
            productId: productId
        }),
    })
    
}

addToCartButtonElement.addEventListener('click', addToCart);