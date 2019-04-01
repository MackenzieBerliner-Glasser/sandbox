const power = require('../power');
describe('power', () => {
  it('powers a num', () => {
    const expected = 25;
    const result = power(5, 2);

    expect(expected).toEqual(result);
  });
});
