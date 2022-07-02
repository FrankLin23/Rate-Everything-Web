<template>
  <n-layout class="moment-wrapper">
    <n-layout
      class="card-container"
      v-for="item in arr"
      :content-style="contentStyle"
      :native-scrollbar="false"
    >
      <n-card :title="item.title" :bordered="true">
        {{ item.content }}
      </n-card>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const contentStyle = {
    padding: "20px",
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
  };

  const arr = ref([
    {
      title: "sasda",
      content: "sadfgdfgfd",
    },
    {
      title: "sasda",
      content: "sadfgdfgfd",
    },
    {
      title: "sasda",
      content: "sadfgdfgfd",
    },
    {
      title: "sasda",
      content: "sadfgdfgfd",
    },
    {
      title: "sasda",
      content: "sadfgdfgfd",
    },
    {
      title: "sasda",
      content: "sadfgdfgfd",
    },
    {
      title: "sasda",
      content: "sadfgdfgfd",
    },
    {
      title: "sasda",
      content: "sadfgdfgfd",
    },
    {
      title: "sasda",
      content: "sadfgdfgfd",
    },
    {
      title: "sasda",
      content: "sadfgdfgfd",
    },
  ]);
</script>

<style scoped>
  .moment-wrapper {
    width: 100%;
  }
  .n-card {
    max-width: 600px;
  }
</style>
