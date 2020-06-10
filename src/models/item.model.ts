import { CurrencySymbol } from "./";


export interface Item {
  id: number;
  itemName: string;
  description: string;
  price: number;
  currency: CurrencySymbol;
}
