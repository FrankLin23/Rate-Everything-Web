<template>
  <div class="home-container">
    <Header />
    <n-modal
      v-model:show="showLogin"
      class="custom-card"
      :style="bodyStyle"
      size="huge"
      :bordered="false"
      @negative-click="showLogin = false"
    >
      <Login />
    </n-modal>
    <n-layout class="content-container">
      <router-view />
    </n-layout>
  </div>
</template>

<script setup lang="ts">
  import Header from "@/components/Header/index.vue";
  import Login from "@/components/Login/index.vue";
  import { userStore } from "@/store/modules/user";
  import { storeToRefs } from "pinia";

  const store = userStore();

  const { showLogin } = storeToRefs(store);

  const bodyStyle = {
    width: "600px",
  };
</script>

<style scoped lang="scss">
  .home-container {
    width: 100vw;
    height: 100vh;
  }
  .content-container {
    width: 100%;
    height: calc(100vh - 55px);
  }
</style>
