import { currencyFormatter } from "./currencyFormatter";

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