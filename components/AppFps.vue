<template>
  <div class="fps">FPS:{{ fps }}</div>
</template>

<script setup>
import { useFps } from "@vueuse/core";
const fps = useFps();
</script>

<style scoped>
.fps {
  position: fixed;
  right: 20px;
  top: 20px;
}
</style>
