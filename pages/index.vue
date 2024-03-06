<template>
  <div class="container">
    <button class="button" @click="count++">
      {{ count }}
    </button>
    <div>{{ captchaId }}</div>
  </div>
</template>

<script setup>
const count = ref(0);
const url = "https://test-passport.zhuoyuyun.com/api/v1/passport/captcha";
const captchaId = ref("");

const { data } = await useFetch(url, { server: false });
console.log(data);
if (data.value) {
  captchaId.value = data.value.data.captcha_id;
  console.log(data.value.data.captcha_id);
}
</script>

<style lang="scss" scoped>
.container {
}
.button {
  background-color: white;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  padding: 0 10px;
  cursor: pointer;
}
</style>
