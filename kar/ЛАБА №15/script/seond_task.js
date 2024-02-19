let productName = document.getElementById("productName");
let userData = document.getElementById("userData");
let userEmail = document.getElementById("userEmail");
let userAddress = document.getElementById("userAddress");
let res = document.getElementById("res");
let submitButton = document.getElementById("submit");
let orderForm = document.getElementById("orderForm");

submitButton.onclick = function(event) {

    let productNameValue = productName.value;
    let userDataValue = userData.value;
    let userEmailValue = userEmail.value;
    let userAddressValue = userAddress.value;

    res.innerText = "Выбранный товар: " + productNameValue;
    res1.innerText = "ФИО: " + userDataValue;
    res2.innerText = "Email: " + userEmailValue;
    res3.innerText = "Адрес доставки: " + userAddressValue;
    

    event.preventDefault();
};