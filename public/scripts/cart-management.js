const addToCartButtonElement = document.querySelector('#product-details button');
const cartBadgeElement = document.querySelector('.nav-items .badge');

async function addToCart() {
    const productId = addToCartButtonElement.dataset.productid;
    let response;
    try {
        
        response = await fetch('/cart/items', {
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

    const responseData = await response.json();
    const newTotalQuantity = responseData.newTotalItems;
    
}

addToCartButtonElement.addEventListener('click', addToCart);