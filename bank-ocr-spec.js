var ocr = require('./bank-ocr');

describe('ocr', function () {

  it('recognizes zero', function () {
    expect(ocr.convert(
        " _ \n" +
        "| |\n" +
        "|_|\n" +
        "   "
    )).toBe('0 ERR');
  });

  it('recognizes one', function () {
    expect(ocr.convert(
        "   \n" +
        "  |\n" +
        "  |\n" +
        "   "
    )).toBe('1 ERR');
  });

  it('converts a line of zeroes', function () {
    expect(ocr.convert(
        " _  _  _  _  _  _  _  _  _ \n" +
        "| || || || || || || || || |\n" +
        "|_||_||_||_||_||_||_||_||_|\n" +
        "                           "
    )).toBe('000000000');
  });

  it('can parse multiple entries', function () {
    expect(ocr.convert(
        "                           \n" +
        "  |  |  |  |  |  |  |  |  |\n" +
        "  |  |  |  |  |  |  |  |  |\n" +
        "                           \n" +
        " _  _  _  _  _  _  _  _  _ \n" +
        " _| _| _| _| _| _| _| _| _|\n" +
        "|_ |_ |_ |_ |_ |_ |_ |_ |_ \n" +
        "                           \n" +
        " _  _  _  _  _  _  _  _  _ \n" +
        " _| _| _| _| _| _| _| _| _|\n" +
        " _| _| _| _| _| _| _| _| _|\n" +
        "                           \n" +
        "                           \n" +
        "|_||_||_||_||_||_||_||_||_|\n" +
        "  |  |  |  |  |  |  |  |  |\n" +
        "                           \n" +
        " _  _  _  _  _  _  _  _  _ \n" +
        "|_ |_ |_ |_ |_ |_ |_ |_ |_ \n" +
        " _| _| _| _| _| _| _| _| _|\n" +
        "                           \n" +
        " _  _  _  _  _  _  _  _  _ \n" +
        "|_ |_ |_ |_ |_ |_ |_ |_ |_ \n" +
        "|_||_||_||_||_||_||_||_||_|\n" +
        "                           \n" +
        " _  _  _  _  _  _  _  _  _ \n" +
        "  |  |  |  |  |  |  |  |  |\n" +
        "  |  |  |  |  |  |  |  |  |\n" +
        "                           \n" +
        " _  _  _  _  _  _  _  _  _ \n" +
        "|_||_||_||_||_||_||_||_||_|\n" +
        "|_||_||_||_||_||_||_||_||_|\n" +
        "                           \n" +
        " _  _  _  _  _  _  _  _  _ \n" +
        "|_||_||_||_||_||_||_||_||_|\n" +
        " _| _| _| _| _| _| _| _| _|\n" +
        "                           "
    )).toBe(
      "111111111 ERR\n" +
      "222222222 ERR\n" +
      "333333333 ERR\n" +
      "444444444 ERR\n" +
      "555555555 ERR\n" +
      "666666666 ERR\n" +
      "777777777 ERR\n" +
      "888888888 ERR\n" +
      "999999999 ERR");
  });

  it('can validate an account number', function () {
    expect(ocr.isValid('345882865')).toBe(true);
  });

  it('can detect an invalid account number', function () {
    expect(ocr.isValid('987654321')).toBe(false);
  });

  it('prints ILL when an account number has an invalid pattern', function () {
    expect(ocr.convert(
        "    _  _  _  _  _  _     _ \n" +
        "|_||_|| || ||_   |  |  | _ \n" +
        "  | _||_||_||_|  |  |  | _|\n" +
        "                           "
    )).toBe('49006771? ILL');
  });

  it('prints ERR when an account number is not valid', function () {
    expect(ocr.convert(
        "                           \n" +
        "  |  |  |  |  |  |  |  |  |\n" +
        "  |  |  |  |  |  |  |  |  |\n" +
        "                           "
    )).toBe('111111111 ERR');
  });
});
