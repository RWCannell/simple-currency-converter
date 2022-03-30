# Simple Currency Converter
This is a simple application which showcases how by simply using `html`, `css`, and `Javascript`, one can build an application which could potentially serve real world purposes. No powerful frameworks (such as Angular) or powerful libraries (such as React.js) have been used.  

The application makes an API call to the `Exchange Rates API` (https://exchangeratesapi.io/). This is an example of how the response would look like:  
```json
{
    "success": true,
    "timestamp": 1519296206,
    "base": "EUR",
    "date": "2021-03-17",
    "rates": {
        "AUD": 1.566015,
        "CAD": 1.560132,
        "CHF": 1.154727,
        "CNY": 7.827874,
        "GBP": 0.882047,
        "JPY": 132.360679,
        "USD": 1.23396,
    }
}  
```  
The "base" is the currency to which all others are being compared. In the above example, it is the `Euro`. Even though the user interface is built in such a way that any currency can be chosen as the base currency, for this project the `Euro` is set as the base. This is because the free plan of the `Exchange Rates API` does not permit changing the base currency.  

Not much effort has been put into the `css` styling (i.e. alignments and margins, etc), since styling is not the goal of this little project.  

This repository is public and anybody should feel free to clone it and build upon it for personal improvements. For example, a beginner web developer may attempt to add a `date` field and make an API request to get the exchange rates on that particular date. Furthermore, validations can be added, such as "What would happen if someone sets a non-existent date, like 32 July?", or "What about 29 February in a year which is NOT a leap year?".  