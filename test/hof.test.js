const { numberManipulator, repeater } = require('../hof');

describe('testing all higher order functions', () => {
  it('doubles all items in an array', () => {
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
});
