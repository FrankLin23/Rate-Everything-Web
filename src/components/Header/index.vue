<template>
  <div class="header-container">
    <n-button text class="logo" @click="goBackHome">Rate Everything!</n-button>
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
    <n-switch v-model:value="darkThemeFlag" :rail-style="railStyle">
      <template #checked-icon>
        <n-icon :component="Moon" />
      </template>
      <template #unchecked-icon>
        <n-icon :component="Sunny" />
      </template>
    </n-switch>
  </div>
</template>

<script setup lang="ts">
  import { MenuOption, NIcon } from "naive-ui";
  import { Component, CSSProperties, h, ref } from "vue";
  import {
    TvOutline as TvIcon,
    CompassOutline as CompassIcon,
    FastFoodOutline as GoodsIcon,
    GitNetworkOutline as NetIcon,
    LogoWechat as WechatIcon,
    Moon,
    Sunny,
  } from "@vicons/ionicons5";
  import { storeToRefs } from "pinia";
  import Avatar from "../Avatar/index.vue";
  import { RouterLink, useRouter } from "vue-router";
  import { useSettingStore } from "@/store/modules/setting";

  const router = useRouter();

  const renderIcon = (icon: Component) => {
    return () => h(NIcon, null, { default: () => h(icon) });
  };

  const store = useSettingStore();
  const { darkThemeFlag } = storeToRefs(store);

  const { showAvatar } = storeToRefs(store);

  const goBackHome = () => {
    router.push("/");
  };

  const activeKey = ref<string | null>(null);
  const menuOptions: MenuOption[] = [
    {
      label: () =>
        h(
          RouterLink,
          {
            to: {
              path: "/entertainment",
            },
          },
          {
            default: () => "文娱",
          }
        ),
      key: "Entertainment",
      icon: renderIcon(TvIcon),
    },
    {
      label: () =>
        h(
          RouterLink,
          {
            to: {
              path: "/entertainment",
            },
          },
          {
            default: () => "地点",
          }
        ),
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

  const railStyle = () => {
    const style: CSSProperties = {};
    if (darkThemeFlag.value) {
      style.background = "#000000";
    } else {
      style.background = "#ffffff";
    }
    return style;
  };
</script>

<style scoped lang="scss">
  .header-container {
    width: 100%;
    background-color: #222;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .logo {
      color: gray;
      text-align: center;
      font-size: 20px;
    }
    .logo:hover {
      color: #fff;
      text-align: center;
      font-size: 20px;
    }
    .login {
      color: #fff;
    }
  }
</style>
