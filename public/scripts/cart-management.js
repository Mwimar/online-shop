const addToCartButtonElement = document.querySelector('#product-details button');

async function addToCart() {
    const productId = addToCartButtonElement.dataset.productid;
    const response = await fetch('/cart/items', {
        method: 'POST',
        body: JSON.stringify({
            productId: productId
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        alert('something went wrong!');
        return;
    }
    
}

addToCartButtonElement.addEventListener('click', addToCart);