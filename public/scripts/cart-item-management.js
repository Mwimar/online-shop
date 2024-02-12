const cartItemUpdateFormElements = document.querySelectorAll('.cart-item-management');

function updateCartItem(event) {
    event.preventDefault();

    const form = event.target;

    const productId = form.dataset.productid;
    const quantity = form.firstElementChild.value;
}

for (const formElement of cartItemUpdateFormElements) {
    formElement.addEventListener('submit', updateCartItem);
}