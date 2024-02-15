const updateOrderFirmElements = document.querySelectorAll('.order-actions form');

async function updateOrder(event) {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    const newStatus = formData.get('status');
    const orderId = formData.get('orderid');
}