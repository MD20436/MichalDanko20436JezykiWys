const slug = require('slug');


function describe(description, result) {
    console.log(`${description}: ${result}`);
}


describe("Slug dla 'I ♥ Unicode'", slug('I ♥ Unicode'));
describe("Slug z separatorem '_' dla 'I ♥ Unicode'", slug('I ♥ Unicode', '_'));
describe("Slug z małymi literami dla 'Telephone-Number'", slug('Telephone-Number', { lower: true }));
