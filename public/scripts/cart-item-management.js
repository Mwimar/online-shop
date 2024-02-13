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
    console.log(responseData);

    const cartItemTotalPriceElement = form.parentElement.querySelector('.cart-item-price');
    cartItemTotalPriceElement.textContent = responseData.updatedCartData.updatedItemPrice.toFixed(2);

    const cartTotalElement = document.getElementById('cart-total-price');
    cartItemTotalPriceElement.textContent = responseData.updatedCartData.newTotalPrice.toFixed(2);

    const cartBadge = document.querySelector('.nav-items .badge');
    cartBadge.textContent = responseData.updatedCartData.newTotalQuantity;


}

for (const formElement of cartItemUpdateFormElements) {
    formElement.addEventListener('submit', updateCartItem);
}