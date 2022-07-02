import { defineStore } from "pinia";
import { getToken } from "@/utils/storage";

export const useSettingStore = defineStore("setting", {
  state: () => {
    return {
      showLogin: false,
      showAvatar: !!getToken(),
      darkThemeFlag: false,
    };
  },
  getters: {},
  actions: {},
});
