const { evens, firstEven } = require('../even');

describe('it tests even functionality', () => {
  it('returns only evens in arr', () => {
    const arr = [1, 2, 4, 5];
    const expected = [2, 4];
    const result = evens(arr);

    expect(result).toEqual(expected);
  });

  it('returns first even element in the array', () => {
    const arr = [2, 4, 6];
    const expected = 0;
    const result = firstEven(arr);

    expect(result).toEqual(expected);
  });
});
