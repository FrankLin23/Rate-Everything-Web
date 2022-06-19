<template>
  <div class="avatar-container">
    <n-dropdown trigger="click" :options="options" @select="handleSelect">
      <n-avatar
        round
        size="medium"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
    </n-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store/modules/user";
import { removeToken } from "@/utils/storage";
import { useMessage } from "naive-ui";
import { useRouter } from "vue-router";

const store = useUserStore();
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
    store.$state.showAvatar = false;
    router.push("/");
    message.info("退出登录");
  }
};
</script>
