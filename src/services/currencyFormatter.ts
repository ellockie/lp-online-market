import { CurrencySymbol } from "../models";

export const currencyFormatter = (
  symbol: CurrencySymbol
): ((value: number) => string) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: symbol,
  }).format;

export const numberFormatter = (value: number): string => {
  return new Intl.NumberFormat("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};
