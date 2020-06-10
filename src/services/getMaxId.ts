import { Item } from "../models";

export const getMaxId = (listings: Item[]): number => {
  return listings.reduce((maxId, item) => Math.max(maxId, item.id), 0);
};
