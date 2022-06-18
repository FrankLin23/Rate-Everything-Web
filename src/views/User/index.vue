<template>
  <n-layout class="user-info-container" embeded>
    <n-space justify="center" size="large" style="margin-top: 50px">
      <div class="user-avatar">
        <img src="@/assets/logo.png" alt="logo" />
        <n-button type="primary" @click="changeAvatar">更新头像</n-button>
      </div>
      <n-card class="user-info-box">
        <n-form ref="userInfoFormRef" :model="userInfoModel" :rules="rules">
          <n-form-item path="username" label="用户名">
            <n-input type="text" />
          </n-form-item>
          <n-form-item path="email" label="邮箱">
            <n-input type="text" />
          </n-form-item>
          <n-form-item path="profile" label="个人简介">
            <n-input type="text" />
          </n-form-item>
          <n-form-item>
            <n-button type="primary">更新信息</n-button>
          </n-form-item>
        </n-form>
      </n-card>
    </n-space>
  </n-layout>
</template>

<script setup lang="ts">
  import { FormInst } from "naive-ui";
  import { ref } from "vue";

  //TODO 修改图像
  const changeAvatar = () => {};

  const userInfoFormRef = ref<FormInst | null>(null);
  const userInfoModel = ref();
  const rules = [{}];
</script>

<style scoped>
  .user-info-container {
    width: 100%;
  }
  .user-avatar {
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .user-info-box {
    width: 500px;
    height: 500px;
    border: 1px solid black;
  }
</style>
