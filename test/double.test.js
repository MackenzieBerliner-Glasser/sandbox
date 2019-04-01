const double = require('../double');

describe('double', () => {
  it('returns a num doubled', () => {
    const expected = 4;
    const result = double(2);
    expect(expected).toEqual(result);
  });
});
