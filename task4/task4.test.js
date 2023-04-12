const capitalize = require('./task4')

test('"hello" should be "Hello"', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('"gift" should be "Gift"', () => {
    expect(capitalize('gift')).toBe('Gift');
});