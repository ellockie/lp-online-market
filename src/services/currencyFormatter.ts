import { CurrencySymbol } from "../models";

export const currencyFormatter = (symbol: CurrencySymbol): ((value: number) => string) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: symbol,
  }).format;
