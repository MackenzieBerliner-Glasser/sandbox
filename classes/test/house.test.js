const { House } = require('../lib/house');

describe('testing for the house class', () => {
  const house = new House('123 elm st.', 4, 3, 6, '200,000');
  it('tests that house has a location property', () => {
    expect(house.location).toEqual('123 elm st.');
  });

  it('tests that house has a new floor property', () => {
    expect(house.floors).toEqual(4);
  });

  it('tests that house has a bedroom property', () => {
    expect(house.bedrooms).toEqual(3);
  });

  it('tests that house has a new bathroom property', () => {
    expect(house.bathrooms).toEqual(6);
  });
  it('tests that houses price method returns a random price', () => {
    expect(house.currentPrice()).toEqual('the price is 200,000');
  });
});
