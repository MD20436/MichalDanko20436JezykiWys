const slug = require('slug');

// Funkcja do wypisywania opisów
function describe(description, result) {
    console.log(`${description}: ${result}`);
}

// Użycie funkcji slug
describe("Slug dla 'I ♥ Unicode'", slug('I ♥ Unicode')); // Oczekiwany wynik: i-love-unicode
describe("Slug z separatorem '_' dla 'I ♥ Unicode'", slug('I ♥ Unicode', '_')); // Oczekiwany wynik: i_love_unicode
describe("Slug z małymi literami dla 'Telephone-Number'", slug('Telephone-Number', { lower: true })); // Oczekiwany wynik: telephone-number
