<template>
  <n-config-provider :theme="theme">
    <n-message-provider>
      <MessageContent />
      <slot name="default"></slot>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
  import { useSettingStore } from "@/store/modules/setting";
  import { darkTheme, GlobalTheme } from "naive-ui";
  import { ref } from "vue";
  import MessageContent from "../MessageContent/index.vue";

  const settingStore = useSettingStore();
  const theme = ref<GlobalTheme | null>(null);

  settingStore.$subscribe((mutation, state) => {
    if (state.darkThemeFlag) {
      theme.value = darkTheme;
    } else {
      theme.value = null;
    }
  });
</script>
