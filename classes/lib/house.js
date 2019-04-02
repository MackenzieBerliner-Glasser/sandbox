class House {
  constructor(location, floors, bedrooms, bathrooms, price) {
    this.location = location;
    this.floors = floors;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.price = price;
  }

  currentPrice() {
    return `the price is ${this.price}`;
  }
}

module.exports = {
  House
};
