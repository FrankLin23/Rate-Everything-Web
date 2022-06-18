<template>
  <div class="header-container">
    <div class="logo" @click="goBackHome">Rate Everything!</div>
    <div class="nav-menu">
      <n-menu
        v-model:value="activeKey"
        mode="horizontal"
        :options="menuOptions"
        :inverted="true"
      ></n-menu>
    </div>
    <n-button class="login" quaternary @click="onClickLogin" v-if="!showAvatar"
      >登录/注册</n-button
    >
    <Avatar v-else />
  </div>
</template>

<script setup lang="ts">
  import { MenuOption, NIcon } from "naive-ui";
  import { Component, h, ref } from "vue";
  import {
    TvOutline as TvIcon,
    CompassOutline as CompassIcon,
    FastFoodOutline as GoodsIcon,
    GitNetworkOutline as NetIcon,
    LogoWechat as WechatIcon,
  } from "@vicons/ionicons5";
  import { userStore } from "@/store/modules/user";
  import { storeToRefs } from "pinia";
  import Avatar from "../Avatar/index.vue";

  const renderIcon = (icon: Component) => {
    return () => h(NIcon, null, { default: () => h(icon) });
  };

  const store = userStore();

  const { showAvatar } = storeToRefs(store);

  const goBackHome = () => {};

  const activeKey = ref<string | null>(null);
  const menuOptions: MenuOption[] = [
    {
      label: "文娱",
      key: "Entertainment",
      icon: renderIcon(TvIcon),
    },
    {
      label: "地点",
      key: "Destination",
      icon: renderIcon(CompassIcon),
    },
    {
      label: "商品",
      key: "Goods",
      icon: renderIcon(GoodsIcon),
    },
    {
      label: "网络",
      key: "Internet",
      icon: renderIcon(NetIcon),
    },
    {
      label: "论坛",
      key: "BBS",
      icon: renderIcon(WechatIcon),
    },
  ];

  const onClickLogin = () => {
    store.$state.showLogin = true;
  };
</script>

<style scoped lang="scss">
  .header-container {
    width: 100%;
    background-color: #000;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .logo {
      color: #fff;
      text-align: center;
      font-size: 20px;
    }

    .login {
      color: #fff;
    }
  }
</style>
