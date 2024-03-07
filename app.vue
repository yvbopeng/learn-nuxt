<template>
  <AppFps /><AppHeader /><NuxtPage /><span>{{ add(1, 2) }}</span>
</template>
<script setup>
console.log(sort([1, 2, 9, 3, 0, 5, 8]));
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
