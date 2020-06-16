import { currencyFormatter, numberFormatter } from "./currencyFormatter";

describe('currencyFormatter', () => {

  test('it should exist', () => {
    const formatter = currencyFormatter("AED")(1);

    expect(formatter).toBeDefined();
  });

  test('it should return correct string for GBP currency', () => {
    const formatter = currencyFormatter("GBP")(123);

    expect(formatter).toBe("£123.00");
  });

  test('it should return correct string for JPY currency', () => {
    const formattedCurrency = currencyFormatter("JPY")(44);

    expect(formattedCurrency).toBe("¥44");
  });

  test('it should return correct string for EUR currency', () => {
    const formattedCurrency = currencyFormatter("EUR")(88.8888);

    expect(formattedCurrency).toBe("€88.89");
  });
});


describe('numberFormatter', () => {

  test('it should exist', () => {
    const formatter = numberFormatter(1);

    expect(formatter).toBeDefined();
  });

  test('it should return correct string for 12345.67 value', () => {
    const formatter = numberFormatter(12345.678);

    expect(formatter).toBe("12,345.68");
  });

  test('it should round correctly the value of 44.0049', () => {
    const formattedCurrency = numberFormatter(0.0049);

    expect(formattedCurrency).toBe("0.00");
  });

  test('it should round correctly the value of 44.005', () => {
    const formattedCurrency = numberFormatter(0.005);

    expect(formattedCurrency).toBe("0.01");
  });
});