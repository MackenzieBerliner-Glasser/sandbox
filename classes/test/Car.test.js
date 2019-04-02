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

  it('has a drive method that increments the miles', () => {
    const drivenMiles = 10;
    expect(car.drive(drivenMiles)).toEqual(10);
  });

  it('has a static method makes that returns an array of possible makes', () => {
    expect(Car.makes()).toEqual(['toyota', 'honda', 'mazda']);
  });
});
