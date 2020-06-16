import { Listing } from "../models";

const REGISTERED_USERS_KEY = "ITEMS";

interface StoredListings {
  [user: string]: Listing[];
}

const getAllListings = (): StoredListings => {
  const storedListingsRaw: string | null = localStorage.getItem(
    REGISTERED_USERS_KEY
  );
  return storedListingsRaw
    ? (JSON.parse(storedListingsRaw) as StoredListings)
    : {};
};

export const saveUserListings = (userListings: Listing[], user: string): void => {
  const allListings = getAllListings();
  allListings[user] = userListings;
  localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(allListings));
}

export const getUserListings = (user: string): Listing[] => {
  const allListings = getAllListings();
  const userListings: Listing[] = allListings[user] || [];
  return userListings;
};

export const saveListing = (listing: Listing, user: string): void => {
  const userListings: Listing[] = getUserListings(user);
  userListings.push(listing);
  saveUserListings(userListings, user);
};

export const deleteListing = (listingId: number, user: string): void => {
  let userListings: Listing[] = getUserListings(user);
  userListings = userListings.filter(listing => listing.id !== listingId);
  saveUserListings(userListings, user);
};

export const exampleUserListings: Listing[] = [
    {
      id: 1,
      itemName: "Amazing Product",
      description:
        "Prepopulated listing, only for demo purposes. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 123,
      currency: "GBP",
    },
    {
      id: 2,
      itemName: "Fantastic Item",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 44,
      currency: "JPY",
    },
    {
      id: 3,
      itemName: "Wonderful Thing",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 723,
      currency: "EUR",
    },
  ];