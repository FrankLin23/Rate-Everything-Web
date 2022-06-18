<template>
  <n-config-provider :theme="theme">
    <n-message-provider>
      <MessageContent />
      <slot name="default"></slot>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
  import { darkTheme, useOsTheme } from "naive-ui";
  import { computed } from "vue";
  import MessageContent from "../MessageContent/index.vue";

  const osThemeRef = useOsTheme();
  const theme = computed(() => {
    return osThemeRef.value === "dark" ? darkTheme : null;
  });
</script>
