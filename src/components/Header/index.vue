<template>
  <div class="header-container">
    <div class="logo">Rate Everything!</div>
    <div class="nav-menu">
      <n-menu
        v-model:value="activeKey"
        mode="horizontal"
        :options="menuOptions"
        :inverted="true"
      ></n-menu>
    </div>
    <div class="login" @click="onClickLogin">登录/注册</div>
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
  } from "@vicons/ionicons5";
  import { userStore } from "@/store/modules/user";

  const renderIcon = (icon: Component) => {
    return () => h(NIcon, null, { default: () => h(icon) });
  };

  const store = userStore();

  const activeKey = ref<string | null>(null);
  const menuOptions: MenuOption[] = [
    {
      label: "娱乐",
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
      margin-left: -50px;
    }
    .nav-menu {
      margin-left: -300px;
    }
    .login {
      color: #fff;
    }
  }
</style>
