import { CurrencySymbol } from "./";


export interface Listing {
  id: number;
  itemName: string;
  description: string;
  price: number;
  currency: CurrencySymbol;
}
