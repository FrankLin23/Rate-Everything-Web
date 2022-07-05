import service from "@/utils/request";

export const getCurrentUserInfo = () => {
  return service.get("/user/me");
};

export const updateUserInfo = () => {
  return service.post("/user/update_info");
};

export const changeAvater = (data: FormData) => {
  return service.post("/user/update_avatar", data);
};
