const addToCartButtonElement = document.querySelector('#product-details button');

async function addToCart() {
    const productId = addToCartButtonElement.dataset.productid;
    try {
        
        const response = await fetch('/cart/items', {
            method: 'POST',
            body: JSON.stringify({
                productId: productId
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        alert('something went Wrong!');
        return;
    }

    if (!response.ok) {
        alert('something went wrong!');
        return;
    }
    
}

addToCartButtonElement.addEventListener('click', addToCart);