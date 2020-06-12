import { User } from "../models";

const REGISTERED_USERS_KEY = "registeredUsers";

const getUsers = (): User[] => {
  const storedUsers: string | null = localStorage.getItem(REGISTERED_USERS_KEY);
  return storedUsers ? (JSON.parse(storedUsers) as User[]) : [];
};

export const saveUser = (user: User): void => {
  const registeredUsers: User[] = getUsers();
  registeredUsers.push(user);
  localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(registeredUsers));
};

export const areCredentialsValid = (user: User): boolean => {
  const registeredUsers: User[] = getUsers();
  const registeredUser: User | undefined = registeredUsers.find(
    (registeredUser) => user.email === registeredUser.email
  );
  if (!registeredUser) {
    console.log("wrong email");
    return false;
  }
  if (user.password !== registeredUser.password) {
    console.log("wrong password");
    return false;
  }
  return true;
};
