<template>
  <div class="container">
    <button class="button" @click="count++">
      {{ count }}
    </button>
    <div @click="updateCaptcha">
      {{ captchaId }}
    </div>
    <el-button @click="updateCaptcha"> updateCaptcha </el-button>
  </div>
</template>

<script setup>
console.log("setup");
const count = ref(0);
const url = "https://test-passport.zhuoyuyun.com/api/v1/passport/captcha";
const captchaId = ref("");
onMounted(() => {
  console.log("onMounted");
});
async function updateCaptcha() {
  const res = await $fetch(url);
  captchaId.value = res.data.captcha_id;
  // const {data } = await useFetch(url, { server: false });
  // captchaId.value = data.value.data.captcha_id
}

const { data } = await useFetch(url, { server: true });
console.log(data);
if (data.value) {
  captchaId.value = data.value.data.captcha_id;
  console.log(data.value.data.captcha_id);
}
</script>

<style lang="scss" scoped>
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
