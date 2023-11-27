const deleteProductButtonElements = document.querySelectorAll('.product-item button');

async function deleteProduct(event) {
    const buttonElement = event.target;
    const productId = buttonElement.dataset.productid;

    const response= await fetch('/admin/products/' + productId,{
        method: 'DELETE',
    })

    if (!response.ok) {
        alert('Something went wrong');
        return;
    }

}
for (const deleteProductButtonElement of deleteProductButtonElements) {
    deleteProductButtonElement.addEventListener('click')
}