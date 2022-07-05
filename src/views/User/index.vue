<template>
  <n-layout class="user-info-container" embeded>
    <n-space justify="center" size="large" style="margin-top: 50px">
      <n-layout>
        <n-card>
          <n-space align="center" vertical>
            <img
              :src="currentUser.avatar"
              alt="logo"
              style="width: 250px; height: 250px"
            />
            <n-upload
              :show-file-list="false"
              @before-upload="beforeUpload"
              @change="handleChange"
            >
              <n-button type="primary" size="large">更新头像</n-button>
            </n-upload>
          </n-space>
        </n-card>
      </n-layout>
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
            <n-tag checkable @click="updatePassword"
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
  import { FormInst, UploadFileInfo, useMessage } from "naive-ui";
  import { ref } from "vue";
  import { LockClosedOutline } from "@vicons/ionicons5";
  import { useUserStore } from "@/store/modules/user";
  import { storeToRefs } from "pinia";
  import { changeAvater } from "@/api/user";

  const message = useMessage();

  const store = useUserStore();
  const { currentUser } = storeToRefs(store);

  const beforeUpload = async (data: {
    file: UploadFileInfo;
    fileList: UploadFileInfo[];
  }) => {
    if (!data.file.file?.type.includes("image")) {
      message.error("只能上传图片文件，请重新上传！");
      return false;
    }
    return true;
  };
  const handleChange = (options: { file: UploadFileInfo }) => {
    const formData = new FormData();
    formData.append(options.file.name, options.file.file as File);
    changeAvater(formData)
      .then(() => {
        store
          .fetchCurrentUser()
          .then(() => {
            message.success("更换头像成功");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        message.error("更换头像失败！");
        console.log(error);
      });
  };

  const userInfoFormRef = ref<FormInst | null>(null);
  const userInfoModel = ref({
    nickname: currentUser.value.nickname,
    email: currentUser.value.email,
    profile: currentUser.value.profile,
  });
  //TODO
  const rules = [{}];
  const updateInfo = () => {};
  const updatePassword = () => {};
</script>

<style scoped>
  .user-info-container {
    width: 100%;
  }
  .user-avatar {
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .user-info-box {
    width: 800px;
  }
</style>
