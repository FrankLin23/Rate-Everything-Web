<template>
  <div class="home-container">
    <Header />
    <n-modal
      v-model:show="showLogin"
      class="custom-card"
      :style="bodyStyle"
      size="huge"
      :bordered="false"
      :segmented="segmented"
      @negative-click="showLogin = false"
    >
      <Login />
    </n-modal>
  </div>
</template>

<script setup lang="ts">
  import Header from "@/components/Header/index.vue";
  import { ref } from "vue";
  import Login from "@/components/Login/index.vue";
  import { userStore } from "@/store/modules/user";
  import { storeToRefs } from "pinia";

  const store = userStore();

  const { showLogin } = storeToRefs(store);

  const showModal = ref<boolean>(false);
  const bodyStyle = {
    width: "600px",
  };
  const segmented = {
    content: "soft",
    footer: "soft",
  };
</script>

<style scoped lang="scss">
  .home-container {
    width: 100vw;
    height: 100vh;
  }
</style>
