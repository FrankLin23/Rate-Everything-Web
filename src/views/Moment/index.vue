<template>
  <div class="moment-wrapper" v-for="item in arr">
    <MomentCard class="moment-card" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import MomentCard from "@/components/MomentCard/index.vue";

  const arr = ref(new Array(10));
</script>

<style scoped>
  .moment-wrapper {
    width: 100%;
  }
  .moment-card {
    margin: 20px auto;
  }
</style>
