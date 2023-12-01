const addtoCartButtonElement = document.querySelector('#product-details button');
const cartBadgeElement=document.querySelector('.nav-items .badge')

async function addToCart() { 
    const productId = addtoCartButtonElement.dataset.productid;

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
        alert('Something went wrong')
    }

    if (!response.ok) {
        alert('Something went wrong!');
        return;
    }
    const responseData = await response.json();

    const newTotalQuantity = responseData.newTotalItems;
    cartBadgeElement.textContent = newTotalQuantity;
    
}

addtoCartButtonElement.addEventListener('click', addToCart);