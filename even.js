const isEven = n => n % 2 === 0;

const evens = arr => arr.filter(isEven);

const firstEven = arr => arr.findIndex(i => isEven(i));

const allEvens = arr => arr.every(i => isEven(i));

module.exports = {
  evens,
  firstEven,
  allEvens
};
