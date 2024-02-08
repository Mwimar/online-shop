const addToCartButtonElement = document.querySelector('#product-details button');

async function addToCart() {
    const productId = addToCartButtonElement.dataset.productid;
    fetch('/cart/items', {
        method: 'POST',
        body: JSON.stringify({
            productId: productId
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
}

addToCartButtonElement.addEventListener('click', addToCart);