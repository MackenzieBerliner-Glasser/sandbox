let miles = 0;
class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.miles = miles;
  }

  static makes() {
    const makes = ['toyota', 'honda', 'mazda'];
    return makes;
  }

  drive(drivenMiles) {
    return (this.miles += drivenMiles);
  }
}

module.exports = {
  Car
};
