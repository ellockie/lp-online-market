import defaults from "../config/defaults.json";

const ACTIVE_USER_KEY = "activeUser";
const MAX_COOKIE_AGE_DAYS = defaults.MAX_COOKIE_AGE_DAYS;

const getActiveUserCookie = (): string | null => {
  const activeUserCookie: string | null =
    document.cookie
      .split(";")
      .find((row) => row.trim().startsWith(ACTIVE_USER_KEY)) || null;
  return activeUserCookie ? activeUserCookie.trim() : null;
};

export const getActiveUserFromCookie = (): string | null => {
  const activeUserCookie: string | null = getActiveUserCookie();
  if (!activeUserCookie) {
    return null;
  }
  const userId = activeUserCookie.split("=")[1];
  return userId ? userId : null;
};

export const setActiveUserCookie = (userId: string | null): void => {
  const _userId = userId ? userId : "";
  const maxAgeInSeconds = MAX_COOKIE_AGE_DAYS * 24 * 60 * 60;
  document.cookie = `${ACTIVE_USER_KEY}=${_userId} ;max-age=${maxAgeInSeconds}`;
};
