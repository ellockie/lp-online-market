import { Currency } from "./currency.model";


export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: Currency;
}
