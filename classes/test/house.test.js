const { House } = require('../lib/house');

describe('testing for the house class', () => {
  it('tests that house has a location property', () => {
    const house = new House('123 elm st.', 4, 3, 6);
    expect(house.location).toEqual('123 elm st.');
  });
});
