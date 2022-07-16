import service from "@/utils/request";

export const getMoments = () => {
  return service.get("/moment");
};

export const postMoment = (data: any) => {
  return service.post("/moment/post", data);
};
