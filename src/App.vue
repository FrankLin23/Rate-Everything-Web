<template>
  <div id="app">
    <AppProvider>
      <router-view />
    </AppProvider>
  </div>
</template>

<script setup lang="ts">
  import { AppProvider } from "./components/Application";
</script>

<style>
  html,
  body,
  #app {
    margin: 0;
    padding: 0;
  }
</style>
