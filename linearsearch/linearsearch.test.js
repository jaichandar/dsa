const { linearSearch } = require('./linearsearch');

describe('linearSearch', () => {
    test('should return the found element when it exists in the array', () => {
        expect(linearSearch([1, 2, 3, 4, 5], 3)).toBe(3);
        expect(linearSearch([10, 20, 30, 40], 20)).toBe(20);
    });

    test('should return -1 when the element is not found', () => {
        expect(linearSearch([1, 2, 3, 4, 5], 10)).toBe(-1);
    });

    test('should throw an error for invalid input (empty array)', () => {
        expect(() => linearSearch([], 3)).toThrow('Invalid input');
    });

    test('should throw an error when value is missing', () => {
        expect(() => linearSearch([1, 2, 3, 4, 5])).toThrow('Invalid input');
    });

    test('should throw an error when array is not provided', () => {
        expect(() => linearSearch()).toThrow('Invalid input');
    });
});
