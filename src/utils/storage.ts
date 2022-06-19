import Cookies from "js-cookie";

const TokenKey = "User-Token";
const UserKey = "Current-User";

const defaultUser: CurrentUser = {
  username: null,
  nickname: null,
  email: null,
  profile: null,
  avatar: null,
};

export const getToken = () => {
  return Cookies.get(TokenKey);
};

export const setToken = (token: string) => {
  return Cookies.set(TokenKey, token);
};

export const removeToken = () => {
  return Cookies.remove(TokenKey);
};

export const getCurrentUser = () => {
  const user = Cookies.get(UserKey);
  return user === undefined ? defaultUser : JSON.parse(user);
};

export const setCurrentUser = (currentUser: CurrentUser) => {
  return Cookies.set(UserKey, JSON.stringify(currentUser));
};

export const removeCurrentUser = () => {
  Cookies.remove(UserKey);
};
