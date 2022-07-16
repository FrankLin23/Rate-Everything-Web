<template>
  <div class="card-container">
    <n-card :bordered="true" :embedded="false">
      <template #header>
        <div class="card-header">
          <n-avatar round :src="props.moment.avatar"></n-avatar>
          <span class="card-nickname">{{ props.moment.nickname }}</span>
        </div>
      </template>
      <template #header-extra>
        <div class="card-time">{{ timeGo(props.moment.createdTime) }}</div>
      </template>
      <div>{{ props.moment.content }}</div>
      <template #action>
        <div class="card-action">
          <div class="card-icon">
            <n-icon size="25" :component="Heart"></n-icon>
          </div>
          <div class="card-icon">
            <n-icon size="25">
              <Chatbox />
            </n-icon>
          </div>
          <div class="card-icon">
            <n-icon size="25">
              <Star />
            </n-icon>
          </div>
        </div>
      </template>
    </n-card>
  </div>
</template>

<script setup lang="ts">
  import {
    StarOutline as Star,
    ChatboxOutline as Chatbox,
    HeartOutline as Heart,
  } from "@vicons/ionicons5";
  import { timeGo } from "@/utils/time";

  const props = defineProps({
    moment: null,
  });
</script>

<style scoped>
  .card-container {
    width: 50%;
  }
  .card-header {
    display: flex;
    width: 100%;
  }
  .card-nickname {
    margin-left: 20px;
    margin-top: 3px;
  }
  .card-action {
    display: flex;
    justify-content: space-around;
  }
  .card-icon {
    display: flex;
  }
</style>
