import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => {
    return {
      token: "",
      currentUser: null,
      showLogin: false,
    };
  },
  getters: {},
  actions: {},
});
