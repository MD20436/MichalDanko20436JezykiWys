
const rates = {
    USD: 4.0,
    EUR: 4.5,
    GBP: 5.3,
    CHF: 4.2,
    JPY: 0.035
};

function roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
}

exports.convertToPLN = function(amount, currency) {
    const rate = rates[currency];
    if (!rate) {
        throw new Error("Unsupported currency");
    }
    return roundTwoDecimals(amount * rate);
};
