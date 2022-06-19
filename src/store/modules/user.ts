import { login, register } from "@/api/login";
import {
  getCurrentUser,
  getToken,
  setCurrentUser,
  setToken,
} from "@/utils/storage";
import { defineStore } from "pinia";
import { getCurrentUserInfo } from "@/api/user";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      token: getToken(),
      currentUser: getCurrentUser(),
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
    async fetchCurrentUser() {
      return new Promise((resolve, reject) => {
        getCurrentUserInfo()
          .then((res) => {
            this.currentUser = res.data;
            setCurrentUser(res.data);
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});
