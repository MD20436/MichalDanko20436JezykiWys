
class Currency {
    constructor() {
        this.rates = {
            USD: 4.0,
            EUR: 4.5,
            GBP: 5.3,
            CHF: 4.2,
            JPY: 0.035
        };
    }

    roundTwoDecimals(amount) {
        return Math.round(amount * 100) / 100;
    }

    convertToPLN(amount, currency) {
        const rate = this.rates[currency];
        if (!rate) {
            throw new Error("Unsupported currency");
        }
        return this.roundTwoDecimals(amount * rate);
    }
}

module.exports = Currency;
