const updateOrderFirmElements = document.querySelectorAll('.order-actions form');

async function updateOrder(event) {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    const newStatus = formData.get('status');
    const orderId = formData.get('orderid');

    let response;

    try {
        response = await fetch(`/admin/orders/${orderId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                newStatus: newStatus,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        alert('Something went wrong - could not update order status.');
        return;
    }

    const resposeData = await response.json();

    form.parentElement.parentElement.querySelector('.badge').textContent = resposeData.newStatus.toUpperCase();

}


for (const updateOrderFormElement of updateOrderFormElements) {
    updateOrderFormElement.addEventListener('submit', updateOrder);
}