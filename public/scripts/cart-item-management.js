const cartItemUpdateFormElements = document.querySelectorAll('.cart-item-management');

async function updateCartItem(event) {
    event.preventDefault();

    const form = event.target;

    const productId = form.dataset.productid;
    const quantity = form.firstElementChild.value;
    let response;

    try {
         response = await fetch('/cart/items', {
             method: 'PATCH',
             body: JSON.stringify({
                 productId: productId,
                 quantity:quantity
             }),
             headers: {
                 'Content-Type': 'application/json'
             }
         })
        
    } catch (error) {
        alert('Something Went Wrong');
        return;
    }


    if (!response.ok) {
        alert('Something Went Wrong');
        return;
    }

    const responseData = await response.json();

    const cartItemTotalPriceElement = form.parentElement.querySelector('.cart-item-price');
    

}

for (const formElement of cartItemUpdateFormElements) {
    formElement.addEventListener('submit', updateCartItem);
}