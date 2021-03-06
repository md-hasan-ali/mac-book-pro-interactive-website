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
// get cupon button id
const cuponButton = document.getElementById('apply-cupon');

// update total price function for all buttons
function updatePrice() {
    const memoryPrice = parseFloat(memoryCost.innerText);
    const previousTotalPrice = parseFloat(bestPrice.innerText);
    const storagePrice = parseFloat(storageCost.innerText);
    const deliveryPrice = parseFloat(deliveryCost.innerText);

    const totalPrice = memoryPrice + previousTotalPrice + storagePrice + deliveryPrice;
    totalAmount.innerText = totalPrice;
    mainTotal.innerText = totalPrice;
}
// memory function 
function memoryPrice(number) {
    memoryCost.innerText = number;
    updatePrice();
}
// storage function
function storagePrice(number2) {
    storageCost.innerText = number2;
    updatePrice();
}
// addEvenlistener memory button and call function
memory1.addEventListener('click', function () {
    memoryPrice(0);
})
memory2.addEventListener('click', function () {
    memoryPrice(180);
})
// addEvenListener for storage button and call function
storage1.addEventListener('click', function () {
    storagePrice(0);
})
storage2.addEventListener('click', function () {
    storagePrice(100);
})
storage3.addEventListener('click', function () {
    storagePrice(180);
})
// addEvenListener added for delivery button
freeDelivery.addEventListener('click', function () {
    deliveryCost.innerText = '0';
    updatePrice();
})
chargeDelivery.addEventListener('click', function () {
    deliveryCost.innerText = '20';
    updatePrice();
})
// get promo button and call the promo code function 
cuponButton.addEventListener('click', function () {
    // get cupon field 
    const cuponField = document.getElementById('cupon-field');
    const allTotal = mainTotal.innerText;
    const discount = allTotal - ((allTotal * 20) / 100);
    if (cuponField.value == 'stevekaku') {
        if (mainTotal.innerText = discount) {
            cuponButton.setAttribute('disabled', true);
        }
    } else {
        alert('Wrong cupon code !!!');
    }
    // remove cuponField value
    cuponField.value = '';
})