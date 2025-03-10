<script setup>
import ManusIntroduction from './components/ManusIntroduction.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/manus-logo.svg" width="65" height="65" />

    <h1 class="wrapper">What is manus</h1>
  </header>

  <main>
    <ManusIntroduction />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-width: 800px; /* 添加最大宽度 */
  margin: 0 auto; /* 居中对齐 */
  padding: 1rem; /* 添加内边距 */
}

.logo {
  display: block;
  margin: 0 auto 1rem; /* 减少底部留白 */
}

main {
  max-width: 1800px; /* 设置 main 的最大宽度 */
  margin: 0 auto; /* 居中对齐 */
  padding: 1rem; /* 添加内边距 */
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 1rem 0 0; /* 减少右侧留白 */
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
