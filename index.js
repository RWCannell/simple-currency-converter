const exchangeRateApiKey = 'someApiKey'; // You need your own API key, which you can get for free from https://exchangeratesapi.io/
const baseUrl = 'http://api.exchangeratesapi.io/v1/latest';

let convertButton = document.getElementById("convertCurrencyButton");
let currencyConversionMessage = document.getElementById("currencyMessage");

let amountInput = document.getElementById("currencyFromAmountInput");
let selectedCurrencyFrom = document.getElementById("currencyFromSelect");
let selectedCurrencyTo = document.getElementById("currencyToSelect");

let amountInputValue = parseInt(amountInput.value, 10);
let selectedCurrencyFromValue = selectedCurrencyFrom.options[selectedCurrencyFrom.selectedIndex].value; // This is the 'base' parameter in the API request
let selectedCurrencyToValue = selectedCurrencyTo.options[selectedCurrencyTo.selectedIndex].value; // This is the 'symbols' parameter in the API request

let selectedCurrencyFromText = selectedCurrencyFrom.options[selectedCurrencyFrom.selectedIndex].label;
let selectedCurrencyToText = selectedCurrencyTo.options[selectedCurrencyTo.selectedIndex].label;

let requestUrl = `${baseUrl}?access_key=${exchangeRateApiKey}&symbols=${selectedCurrencyToValue}&format=1`;

amountInput.addEventListener('input', (evt) => {
    amountInputValue = parseInt(evt.target.value, 10);
  });

selectedCurrencyFrom.addEventListener('change', (evt) => {
    selectedCurrencyFromValue = evt.target.value;
    selectedCurrencyFromText = evt.target.textContent;
  });

selectedCurrencyTo.addEventListener('change', (evt) => {
    selectedCurrencyToValue = evt.target.value;
    selectedCurrencyToText = evt.target.options[evt.target.selectedIndex].label;
    requestUrl = `${baseUrl}?access_key=${exchangeRateApiKey}&symbols=${selectedCurrencyToValue}&format=1`;
  });

convertButton.addEventListener("click", evt => {
    fetch(requestUrl)
    .then(res => res.json())
    .then(data => {
        let convertedCurrency = parseFloat(data.rates[selectedCurrencyToValue]).toFixed(2);
        currencyConversionMessage.innerHTML = `<p> ${amountInputValue} ${selectedCurrencyFromText} equals ${amountInputValue * convertedCurrency} ${selectedCurrencyToText}</p>`;
    });
});
