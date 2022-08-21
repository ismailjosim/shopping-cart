// ============> Select Element phone
const btnPhonePlus = document.querySelector('#btn-phone-plus');
const btnPhoneMinus = document.querySelector('#btn-phone-minus');
const inputPhone = document.querySelector('#phone-number-field');
const totalPhonePrice = document.querySelector('#phone-total');

// ============> Select Element case
const btnCasePlus = document.querySelector('#btn-case-plus');
const btnCaseMinus = document.querySelector('#btn-case-minus');
const inputCase = document.querySelector('#case-number-field');
const totalCasePrice = document.querySelector('#case-total');

// ==============> sub section
const subTotal = document.querySelector('#sub-total-amount');
const tax = document.querySelector('#tax-amount');
const finalTotal = document.querySelector('#final-total');

//============> Extra Work Remove item
const closeItemPhone = document.querySelector('#close-btn-phone');
const closeItemCase = document.querySelector('#close-btn-case');
const cartItemPhone = document.querySelector('#cart-item-phone');
const cartItemCase = document.querySelector('#cart-item-case');




//==============> common function
// Calculate Subtotal function
const getTotalValue = function (element) {
    const getValue = element.innerText;
    const convert = parseInt(getValue);
    return convert;
};

const calcSubtotal = function () {

    // calculate subtotal
    const caseTotal = getTotalValue(totalCasePrice);
    const phoneTotal = getTotalValue(totalPhonePrice);
    const totalAmount = caseTotal + phoneTotal;
    subTotal.innerText = totalAmount;

    // Calculate TAX
    const taxValue = (totalAmount * 0.10).toFixed(2);
    const taxAmount = parseFloat(taxValue);
    tax.innerText = taxAmount;

    // Final total value
    const finalTotalValue = totalAmount + taxAmount;
    finalTotal.innerText = finalTotalValue;

};


// Phone section
// convert string to number
const strToNumCasePhone = function (isIncrease) {
    const getValue = inputPhone.value;
    const convertNumber = parseInt(getValue);

    let newValue;
    if (isIncrease === true) {
        newValue = convertNumber + 1;
    } else {
        newValue = convertNumber - 1;
    }
    inputPhone.value = newValue;
    return newValue;
};

// Phone Plus button Function
btnPhonePlus.addEventListener('click', function () {
    const newPhoneNumber = strToNumCasePhone(true);
    phoneTotalNumber(newPhoneNumber);
    // sub total
    calcSubtotal();

});

// Phone Minus button Function
btnPhoneMinus.addEventListener('click', function () {
    const newPhoneNumber = strToNumCasePhone(false);
    phoneTotalNumber(newPhoneNumber);

    // sub total
    calcSubtotal();
});

// phone total Amount Function
const phoneTotalNumber = function (number) {
    const totalPrice = number * 1219;
    totalPhonePrice.innerText = totalPrice;
};


// =============================== Case Section
// convert string to number
const strToNumCase = function (isIncrease) {
    const getValue = inputCase.value;
    const convertNumber = parseInt(getValue);

    let newValue;
    if (isIncrease === true) {
        newValue = convertNumber + 1;
    } else {
        newValue = convertNumber - 1;
    }
    inputCase.value = newValue;
    return newValue;
};
// update total Amount Function
const caseTotalNumber = function (number) {
    const totalPrice = number * 59;
    totalCasePrice.innerText = totalPrice;
};

// Case Plus button Function
btnCasePlus.addEventListener('click', function () {
    const newCaseNumber = strToNumCase(true);
    caseTotalNumber(newCaseNumber);

    // sub total
    calcSubtotal();

});

// Case Minus button Function
btnCaseMinus.addEventListener('click', function () {
    const newCaseNumber = strToNumCase(false);
    caseTotalNumber(newCaseNumber);

    // sub total
    calcSubtotal();


});

//========> Function Close Button

closeItemPhone.addEventListener('click', function () {
    cartItemPhone.style.display = 'none';
});

closeItemCase.addEventListener('click', function () {
    cartItemCase.style.display = 'none';
});

