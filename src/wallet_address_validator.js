const currencies = require('./currencies');

let DEFAULT_CURRENCY_NAME = 'bitcoin';

module.exports = {
    validate: function (address, currencyNameOrSymbol, networkType) {
        const currency = currencies.getByNameOrSymbol(currencyNameOrSymbol || DEFAULT_CURRENCY_NAME);
        if (currency.validator) {
            return currency.validator.isValidAddress(address, currency, networkType);
        }
        throw new Error('Missing validator for currency: ' + currencyNameOrSymbol);
    },
    validator: function (address, currencyNameOrSymbol, networkType) {
        const currency = currencies.getByNameOrSymbol(currencyNameOrSymbol || DEFAULT_CURRENCY_NAME);

        if (currency.validator) {
            return currency.validator.isValidAddress(address, currency, networkType);
        }

        throw new Error('Missing validator for currency: ' + currencyNameOrSymbol);
    },
};
