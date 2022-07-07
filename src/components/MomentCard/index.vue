<template>
  <div class="card-container">
    <n-card :bordered="true" :embedded="false">
      <template #header>
        <div class="card-header">
          <Avatar />
          <span class="card-nickname">{{ currentUser.nickname }}</span>
        </div>
      </template>
      <template #header-extra>
        <div class="card-time">3分钟前</div>
      </template>
      我喜欢电影
      <template #action>
        <div class="card-action">
          <div class="card-icon">
            <n-icon size="25"> <Heart /> </n-icon>
            <div>赞</div>
          </div>
          <div class="card-icon">
            <n-icon size="25">
              <Chatbox />
            </n-icon>
            <div>评论</div>
          </div>
          <div class="card-icon">
            <n-icon size="25">
              <Star />
            </n-icon>
            <div>收藏</div>
          </div>
        </div>
      </template>
    </n-card>
  </div>
</template>

<script setup lang="ts">
  import { useUserStore } from "@/store/modules/user";
  import { storeToRefs } from "pinia";
  import Avatar from "../Avatar/index.vue";
  import {
    StarOutline as Star,
    ChatboxOutline as Chatbox,
    HeartOutline as Heart,
  } from "@vicons/ionicons5";
  const userStore = useUserStore();
  const { currentUser } = storeToRefs(userStore);
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
