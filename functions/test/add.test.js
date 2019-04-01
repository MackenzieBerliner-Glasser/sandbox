const { addArr } = require('../add');

describe('add array elements', () => {
  it('returns a sum of all elements in an array', () => {
    const arr = [1, 2, 3];
    const expected = 6;
    const result = addArr(arr);
    
    expect(result).toEqual(expected);
  });
});
