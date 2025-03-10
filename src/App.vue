<script setup>
import ManusIntroduction from './components/ManusIntroduction.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/manus-logo.svg" width="65" height="65" />

    <h1  class="wrapper">What is manus</h1>
  </header>

  <main>
    <ManusIntroduction />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
