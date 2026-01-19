<script setup lang="ts">
import { provide, ref } from "vue";
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import { userKey } from "./utilities/injection-keys";
import type User from "./models/User";

// Voorbeeld van user die globaal beschikbaar moet zijn
const activeUser = ref<User>({
  id: 1,
  name: "Kobe",
  settings: []
})

// Provide voorziet de child components van de user -> app.ts heeft dus alles als child, dus globaal
provide(userKey, activeUser.value);


</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style></style>
