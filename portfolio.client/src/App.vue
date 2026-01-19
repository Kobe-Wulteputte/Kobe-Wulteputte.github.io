<script setup lang="ts">
import { provide, ref, onMounted } from "vue";
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import { useBlogStore } from "./stores/BlogStore";




// Preload all blog posts in the background
const blogStore = useBlogStore();
onMounted(() => {
  blogStore.preloadAllPosts();
});
</script>

<template>
  <div id="app">
    <Navbar />
    <RouterView />
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #ffffff;
}
</style>
