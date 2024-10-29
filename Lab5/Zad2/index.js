

const readline = require('readline');
const math1 = require('./myMathModule1');
const MyMathModule = require('./myMathModule2');
let math2 = new MyMathModule();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Podaj pierwszą liczbę: ", (num1) => {
    rl.question("Podaj drugą liczbę: ", (num2) => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        console.log(`Dodawanie (math1): ${math1.add(a, b)}`);
        console.log(`Odejmowanie (math1): ${math1.subtract(a, b)}`);
        console.log(`Mnożenie (math1): ${math1.multiply(a, b)}`);
        console.log(`Dzielenie (math1): ${math1.divide(a, b)}`);
        console.log(`Potęgowanie (math2): ${math2.power(a, b)}`);

        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nDziękuję! Do zobaczenia!");
    process.exit(0);
});
