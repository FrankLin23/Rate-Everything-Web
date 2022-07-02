<template>
  <div class="avatar-container">
    <n-dropdown trigger="click" :options="options" @select="handleSelect">
      <n-avatar round size="medium" :src="currentUser.avatar" />
    </n-dropdown>
  </div>
</template>

<script setup lang="ts">
  import { useSettingStore } from "@/store/modules/setting";
  import { useUserStore } from "@/store/modules/user";
  import { removeToken } from "@/utils/storage";
  import { useMessage } from "naive-ui";
  import { storeToRefs } from "pinia";
  import { useRouter } from "vue-router";

  const settingStore = useSettingStore();
  const userStore = useUserStore();
  const { currentUser } = storeToRefs(userStore);
  const router = useRouter();
  const message = useMessage();

  const options = [
    {
      label: "个人信息",
      key: "user info",
    },
    {
      label: "登出",
      key: "log out",
    },
  ];

  const handleSelect = (key: string) => {
    if (key === "user info") {
      router.push("/user");
    } else if (key === "log out") {
      removeToken();
      settingStore.$state.showAvatar = false;
      router.push("/");
      message.info("退出登录");
    }
  };
</script>
