const { double, doubleArr } = require('../double');

describe('double', () => {
  it('returns a num doubled', () => {
    const expected = 4;
    const result = double(2);
    expect(expected).toEqual(result);
  });

  it('returns an array with indexes doubled', () => {
    const arr = [2, 3, 4];
    const expected = [4, 6, 8];
    const result = doubleArr(arr);
    expect(expected).toEqual(result);
  });
});
