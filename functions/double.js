const double = num => {
  return num * 2;
};

const doubleArr = arr => arr.map(i => double(i));

module.exports = {
  double,
  doubleArr
};
