const { Car } = require('../lib/Car');

describe('tests for the car class', () => {
  const car = new Car('toyota', 'prius', 2018, 'white');
  it('tests that car has all correct properties', () => {
    expect(car.make).toEqual('toyota');
    expect(car.model).toEqual('prius');
    expect(car.year).toEqual(2018);
    expect(car.color).toEqual('white');
    expect(car.miles).toEqual(0);
  });
});
