const cartItemUpdateFormElements = document.querySelectorAll('.cart-item-management');
const cartTotalPriceElement = document.getElementById('cart-total-price');
const cartBadge = document.querySelector('.nav-items .badge');

async function updateCartItem(event) {
    event.preventDefault();
    const form = event.target;
    const productId = form.dataset.productid;
    const quantity = form.firstElementChild.value;
    console.log(productId);

    let response;

    try {
         response = await fetch('/cart/items', {
            method: 'PATCH',
            body: JSON.stringify({
                productId: productId,
                quantity: quantity
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });       
    } catch (error) {
        alert('Something Went Wrong!');
        return;
    }
    
    if (!response.ok) {
        alert('Something Went Wrong!');
        return;
    }

    const responseData = await response.json();

    const cartItemTotalPriceElement = form.parentElement.querySelector('.cart-item.price');
    cartItemTotalPriceElement.textContent = responseData.updatedItemPrice.toFixed(2);

    cartTotalPriceElement.textContent = responseData.newTotalPrice.toFixed(2);

    cartBadge.textContent = responseData.newTotalQuantity;

for (const formElement of cartItemUpdateFormElements) {
    formElement.addEventListener('submit', updateCartItem)

  }
}
