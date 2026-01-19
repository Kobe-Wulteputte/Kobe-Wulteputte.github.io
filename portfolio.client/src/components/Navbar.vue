<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { getCurrentInstance } from "vue";
import { useTranslation } from "i18next-vue";
const tr = useTranslation();

const router = useRouter();
const currentRoute = useRoute();

// Filter out non visible routes
const routes = router.getRoutes().filter((e) => e.meta.nav);

function changeLanguage(lang: string) {
    tr.i18next.changeLanguage(lang);
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid mx-3">
      <a class="navbar-brand" href="#">
        <img src="@/assets/images/wordart.png" height="40" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav" v-for="route of routes" :key="route.path">
          <router-link :to="route.path" class="nav-item nav-link" :class="{ active: currentRoute.name == route.name }">
            {{ $t(`navigation.${String(route.name)}`) }}
          </router-link>
        </div>
        <div class="navbar-nav ms-auto">
          <button class="nav-link btn btn-link" @click="changeLanguage('en')" :class="{ active: $i18next.language === 'en' }">
            EN
          </button>
          <span class="nav-text"> / </span>
          <button class="nav-link btn btn-link" @click="changeLanguage('nl')" :class="{ active: $i18next.language === 'nl' }">
            NL
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-text {
  margin: 0 5px;
  cursor: default;
}
</style>
