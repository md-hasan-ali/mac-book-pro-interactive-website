// get memory button and price
const memory1 = document.getElementById('memory1');
const memory2 = document.getElementById('memory2');
const memoryCost = document.getElementById('memory-cost');

// get storage button and price
const storage1 = document.getElementById('storage1');
const storage2 = document.getElementById('storage2');
const storage3 = document.getElementById('storage3');
const storageCost = document.getElementById('storage-cost');

// get delivery button and price
const freeDelivery = document.getElementById('free-delivery');
const chargeDelivery = document.getElementById('charge-delivery');
const deliveryCost = document.getElementById('delivery-cost');

// get best price id
const bestPrice = document.getElementById('best-price');

// get total price id
const totalAmount = document.getElementById('total-amount');

// get main total price id
const mainTotal = document.getElementById('main-total');

function updatePrice() {
    const memoryPrice = parseFloat(memoryCost.innerText);
    const previousTotalPrice = parseFloat(bestPrice.innerText);
    const storagePrice = parseFloat(storageCost.innerText);
    const deliveryPrice = parseFloat(deliveryCost.innerText);

    const totalPrice = memoryPrice + previousTotalPrice + storagePrice + deliveryPrice;
    totalAmount.innerText = totalPrice;
    mainTotal.innerText = totalPrice;
}

// addEvenListener added for memory button
memory1.addEventListener('click', function () {
    memoryCost.innerText = '0';
    updatePrice()
});
memory2.addEventListener('click', function () {
    memoryCost.innerText = '20';
    updatePrice()
})
// addEvenListener added for storage button
storage1.addEventListener('click', function () {
    storageCost.innerText = '0';
    updatePrice()
})
storage2.addEventListener('click', function () {
    storageCost.innerText = '100';
    updatePrice()
})
storage3.addEventListener('click', function () {
    storageCost.innerText = '180';
    updatePrice()
})
// addEvenListener added for delivery button
freeDelivery.addEventListener('click',function() {
    deliveryCost.innerText = '0';
    updatePrice()
})
chargeDelivery.addEventListener('click',function() {
    deliveryCost.innerText = '20';
    updatePrice()
})