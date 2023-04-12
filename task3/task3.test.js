const Calculator = require('./task3');
describe('Add function', () => {
    const calc = new Calculator();
    test('5 + 2 = 7', () => {
        expect(calc.add(5, 2)).toBe(7);
    });
    test('1 + 0 = 1 ', () => {
        expect(calc.add(1, 0)).toBe(1);
    });
});