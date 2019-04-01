const numberManipulator = (n, callback) => callback(n);

const repeater = (n, callback) => {
  for(let i = 0; i < n; i++) {
    callback();
  }
};

module.exports = {
  numberManipulator,
  repeater
};