// Mock data for now
let message = {
    currencyMessage: "1 US Dollar costs 1 US Dollar"
};

let convertButton = document.getElementById("convertCurrencyButton");
let currencyConversionMessage = document.getElementById("currencyMessage");

currencyConversionMessage.innerHTML = `<p> ${message.currencyMessage} </p>`