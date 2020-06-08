import { CurrencySymbol } from "../models";

export const currencyFormatter = (symbol: CurrencySymbol) => (new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: symbol,
})).format;
