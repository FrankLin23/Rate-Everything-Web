<template>
  <n-card>
    <n-tabs
      class="card-tabs"
      default-value="login"
      size="large"
      animated
      pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
    >
      <n-tab-pane name="login" tab="登录">
        <n-form ref="loginFormRef" :model="loginForm" :rules="loginRules">
          <n-form-item-row label="用户名" path="username">
            <n-input
              v-model:value="loginForm.username"
              @keydown.enter.prevent
            />
          </n-form-item-row>
          <n-form-item-row label="密码" path="username">
            <n-input
              v-model:value="loginForm.password"
              type="password"
              @keydown.enter.prevent
            />
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block secondary strong @click="handleLogin">
          登录
        </n-button>
      </n-tab-pane>
      <n-tab-pane name="register" tab="注册">
        <n-form
          ref="registerFormRef"
          :model="registerForm"
          :rules="registerRules"
        >
          <n-form-item-row label="用户名" path="username">
            <n-input
              v-model:value="registerForm.username"
              @keydown.enter.prevent
            />
          </n-form-item-row>
          <n-form-item-row label="密码" path="password">
            <n-input
              v-model:value="registerForm.password"
              type="password"
              @keydown.enter.prevent
            />
          </n-form-item-row>
          <n-form-item-row label="邮箱" path="email">
            <n-input
              v-model:value="registerForm.email"
              type="text"
              @keydown.enter.prevent
            />
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block secondary strong @click="handleRegister">
          注册
        </n-button>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { FormInst, FormRules, useMessage } from "naive-ui";
  import { useUserStore } from "@/store/modules/user";
  import { useSettingStore } from "@/store/modules/setting";

  const settingStore = useSettingStore();
  const userStore = useUserStore();
  const message = useMessage();

  const loginFormRef = ref<FormInst | null>(null);
  const loginForm = ref<LoginInfo>({
    username: "",
    password: "",
  });

  const registerFormRef = ref<FormInst | null>(null);
  const registerForm = ref<RegisterInfo>({
    username: null,
    password: null,
    email: null,
  });

  const loginRules: FormRules = {
    username: [
      {
        required: true,
        message: "请输入用户名",
      },
    ],
    password: [
      {
        required: true,
        message: "请输入密码",
      },
    ],
  };

  const registerRules: FormRules = {
    username: [
      {
        required: true,
        message: "请输入用户名",
      },
    ],
    password: [
      {
        required: true,
        message: "请输入密码",
      },
    ],
    email: [
      {
        required: true,
        message: "请输入邮箱",
      },
    ],
  };

  const handleLogin = () => {
    loginFormRef.value?.validate((errors) => {
      if (!errors) {
        userStore
          .login(loginForm.value)
          .then(() => {
            settingStore.showLogin = false;
            settingStore.showAvatar = true;
            userStore
              .fetchCurrentUser()
              .then((res) => {
                console.log(res);
              })
              .catch((error) => console.log(error));
            message.success("登录成功");
          })
          .catch((error) => {
            message.error("登录失败");
            console.log(error);
          });
      } else {
        console.log(errors);
      }
    });
  };

  const handleRegister = () => {
    registerFormRef.value?.validate((errors) => {
      if (!errors) {
        userStore
          .register(registerForm.value)
          .then(() => {
            message.info("注册成功");
            settingStore.showLogin = false;
          })
          .catch((error) => {
            console.log("login error", error);
            message.info("注册失败");
          });
      } else {
        console.log(errors);
      }
    });
  };
</script>

<style scoped>
  .card-tabs .n-tabs-nav--bar-type {
    padding-left: 4px;
  }
</style>
