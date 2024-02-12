const cartItemUpdateFormElements = document.querySelectorAll('.cart-item-management');

function updateCartItem(event) {
    event.preventDefault();
}

for (const formElement of cartItemUpdateFormElements) {
    formElement.addEventListener('submit');
}