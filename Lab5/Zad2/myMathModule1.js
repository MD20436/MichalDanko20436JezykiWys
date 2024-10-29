

module.exports.add = (a, b) => a + b;
module.exports.subtract = (a, b) => a - b;
module.exports.multiply = (a, b) => a * b;
module.exports.divide = (a, b) => b !== 0 ? a / b : 'Cannot divide by zero';
module.exports.power = (a, b) => Math.pow(a, b);
