import { login, register } from "@/api/login";
import { getToken, setToken } from "@/utils/storage";
import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => {
    return {
      token: getToken(),
      currentUser: null,
      showLogin: false,
      showAvatar: getToken() ? true : false,
    };
  },
  getters: {},
  actions: {
    async login(userInfo: LoginInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then((res) => {
            console.log("store login", res);
            setToken(res.data);
            this.token = res.data;
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    async register(userInfo: RegisterInfo) {
      return new Promise((resolve, reject) => {
        register(userInfo)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});
