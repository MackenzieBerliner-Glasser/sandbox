const numberManipulator = (n, callback) => callback(n);

const repeater = (n, callback) => {
  for(let i = 0; i < n; i++) {
    callback();
  }
};

let newArr = [];
const map = (arr, callback) => {
  arr.forEach(i => {
    newArr.push(callback(i));
  });
  return newArr;
};

module.exports = {
  numberManipulator,
  repeater,
  map
};
