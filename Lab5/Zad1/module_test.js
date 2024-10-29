
const currency1 = require('./currency1');

console.log("Using currency1 module:");
console.log("100 USD to PLN:", currency1.convertToPLN(100, "USD"));
console.log("100 EUR to PLN:", currency1.convertToPLN(100, "EUR"));
console.log("100 GBP to PLN:", currency1.convertToPLN(100, "GBP"));
console.log("100 CHF to PLN:", currency1.convertToPLN(100, "CHF"));
console.log("100 JPY to PLN:", currency1.convertToPLN(100, "JPY"));

const Currency = require('./currency2');
let currency2 = new Currency();

console.log("\nUsing currency2 module:");
console.log("100 USD to PLN:", currency2.convertToPLN(100, "USD"));
console.log("100 EUR to PLN:", currency2.convertToPLN(100, "EUR"));
console.log("100 GBP to PLN:", currency2.convertToPLN(100, "GBP"));
console.log("100 CHF to PLN:", currency2.convertToPLN(100, "CHF"));
console.log("100 JPY to PLN:", currency2.convertToPLN(100, "JPY"));
