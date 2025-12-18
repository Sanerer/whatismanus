<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router'; 
import ManusIntroduction from './components/ManusIntroduction.vue';

const route = useRoute();

watch(route, (to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = 'what is manus'; // 设置默认标题
  }
});
</script>

<template>
      <header>
        <img alt="Vue logo" class="logo" src="./assets/manus-logo.svg" width="65" height="65" />
        <h1 class="wrapper">What is manus</h1>
      </header>

      <nav>
        <ul>
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/about">关于我们</router-link></li>
        </ul>
      </nav>
    
    <main class="content">
      <ManusIntroduction />
    </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 1rem;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav li {
  margin: 0.5rem 0;
}

.content {
  padding: 1rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    background-color: red;
  }

  .logo {
    margin: 0 1rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
