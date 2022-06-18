import service from "@/utils/request";

export const login = (data: LoginInfo) => {
  return service.post("/user/login", data);
};

export const register = (data: RegisterInfo) => {
  return service.post("/user/register", data);
};
