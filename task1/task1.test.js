const stringLength = require('./task1');

test('"hello" should be 5', () => {
    expect(stringLength('hello')).toBe(5);
});
test('"enobong" should be 4', () => {
    expect(stringLength('gift')).toBe(4);
});
test('more than expected', () => {
    expect(() => {
        stringLength('ocdsasadqwtopus');
    }).toThrow();
});
test('empty', () => {
    expect(() => {
        stringLength('');
    }).toThrow();
});
    
  