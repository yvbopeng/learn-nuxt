<template>
  <div class="page" @click="changeBg" />
</template>
<script setup>
const bg = ref("red");

const changeBg = () => {
  bg.value = bg.value === "red" ? "blue" : "red";
  if (bg.value === "red") {
    import("./readbg.scss");
  } else {
    console.log("blue");
    import("./bluebg.scss");
  }
};
</script>
<style lang="scss" scoped>
.page {
  width: 100px;
  height: 100px;
}
</style>
