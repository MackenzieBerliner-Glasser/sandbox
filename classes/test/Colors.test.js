const { Colors } = require('../lib/Colors');

describe('colors class tests', () => {
  const colors = new Colors();
  it('adds a color to the favorites array', () => {
    expect(colors.addColor('green')).toEqual(['green']);
  });

  it('checks to see if colors are in the favorites array', () => {
    expect(colors.hasColor('green')).toEqual(true);
    expect(colors.hasColor('red')).toEqual(false);
  });
});
