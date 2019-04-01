const { numberManipulator, repeater, map } = require('../hof');

describe('testing all higher order functions', () => {
  it('numberManipulator doubles a number', () => {
    const mock = jest.fn(x => x * 2);
    const num = 3;
    const expected = 6;
    const result = numberManipulator(num, mock);

    expect(result).toEqual(expected);

  });

  it('gets called a number of times', () => {
    const mock = jest.fn(() => console.log('hello'));
    repeater(5, mock);

    expect(mock.mock.calls.length).toBe(5);
  });

  it('maps over an array and multiplies them by 2', () => {
    const mock = jest.fn(x => x * 2);
    const arr = [1, 2, 3];
    const expected = [2, 4, 6];

    const result = map(arr, mock);

    expect(result).toEqual(expected);
  });
});
