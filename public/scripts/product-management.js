const deleteProductButtonElements = document.querySelectorAll('.product-item button');

async function deleteProduct(event) {
    const buttonElement = event.target;
    const productId = buttonElement.dataset.productid;
    // console.log(productId)

    const response = await fetch('/admin/products/' + productId, {
        method: 'DELETE'
    });
    console.log(response);
    if (!response.ok) {
        // console.log( buttonElement.parentElement.parentElement.parentElement.parentElement)
        alert('Something went wrong');
        return;
    }

    buttonElement.parentElement.parentElement.parentElement.parentElement.remove();

}


for (const deleteProductButtonElement of deleteProductButtonElements) {
    deleteProductButtonElement.addEventListener('click', deleteProduct)
}