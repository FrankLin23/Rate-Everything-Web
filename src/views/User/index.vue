<template>
  <n-layout class="user-info-container" embeded>
    <n-space justify="center" size="large" style="margin-top: 50px">
      <div class="user-avatar">
        <img src="@/assets/logo.png" alt="logo" />
        <n-button type="primary" @click="changeAvatar">更新头像</n-button>
      </div>
      <n-layout>
        <n-card class="user-info-box" title="个人信息">
          <n-form ref="userInfoFormRef" :model="userInfoModel" :rules="rules">
            <n-form-item path="username" label="用户名">
              <n-input
                type="text"
                v-model:value="userInfoModel.nickname"
                @keydown.enter.prevent
              />
            </n-form-item>
            <n-form-item path="email" label="邮箱">
              <n-input
                type="text"
                v-model:value="userInfoModel.email"
                @keydown.enter.prevent
              />
            </n-form-item>
            <n-form-item path="profile" label="个人简介">
              <n-input
                type="text"
                v-model:value="userInfoModel.profile"
                @keydown.enter.prevent
              />
            </n-form-item>
            <n-form-item>
              <n-button
                type="primary"
                size="large"
                style="width: 100%"
                @click="updateInfo"
                >更新信息</n-button
              >
            </n-form-item>
          </n-form>
        </n-card>
        <n-card title="账户安全">
          <n-form-item>
            <n-tag checkable
              >修改密码
              <template #icon>
                <n-icon :component="LockClosedOutline" />
              </template>
            </n-tag>
          </n-form-item>
        </n-card>
      </n-layout>
    </n-space>
  </n-layout>
</template>

<script setup lang="ts">
import { FormInst } from "naive-ui";
import { ref } from "vue";
import { LockClosedOutline } from "@vicons/ionicons5";
import { useUserStore } from "@/store/modules/user";
import { storeToRefs } from "pinia";

const store = useUserStore();
const { currentUser } = storeToRefs(store);

//TODO
const changeAvatar = () => {};

const userInfoFormRef = ref<FormInst | null>(null);
const userInfoModel = ref({
  nickname: currentUser.value.nickname,
  email: currentUser.value.email,
  profile: currentUser.value.profile,
});
//TODO
const rules = [{}];
const updateInfo = () => {};
</script>

<style scoped>
.user-info-container {
  width: 100%;
}
.user-avatar {
  width: 300px;
  height: 300px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.user-info-box {
  width: 800px;
}
</style>
