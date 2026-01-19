<script setup lang="ts">
import { provide, ref } from "vue";
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import { userKey } from "./utilities/injection-keys";
import type User from "./models/User";

const activeUser = ref<User>({
  id: 1,
  name: "Kobe",
  settings: []
})

provide(userKey, activeUser.value);
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
