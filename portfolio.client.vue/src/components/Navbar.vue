<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const currentRoute = useRoute();
// Filter out non visible routes
const routes = router.getRoutes().filter((e) => e.meta.nav);
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid mx-3">
      <a class="navbar-brand" href="#">
        <img src="src\assets\images\wordart.png" height="40" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav" v-for="route of routes" :key="route.path">
          <router-link
            :to="route.path"
            class="nav-item nav-link"
            :class="{ active: currentRoute.name == route.name }"
            >{{ route.name }}</router-link
          >
          <!-- <a class="nav-link ${row.isActive ? 'active' : ''}" ${row.isActive ? 'aria-current="page"' : ''} href.bind="row.href">${row.title}</a> -->
        </div>
      </div>
    </div>
  </nav>
</template>
