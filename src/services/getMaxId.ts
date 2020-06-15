import { Listing } from "../models";

export const getMaxId = (listings: Listing[]): number => {
  return listings.reduce((maxId, item) => Math.max(maxId, item.id), 0);
};
