<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { useTranslation } from "i18next-vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useLanguageStore } from "@/stores/LanguageStore";

const tr = useTranslation();
const router = useRouter();
const currentRoute = useRoute();
const isMenuOpen = ref(false);
const langStore = useLanguageStore();

const routes = router.getRoutes().filter((e) => e.meta.nav);

function changeLanguage(lang: string) {
  langStore.setLanguage(lang);
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <a class="navbar-brand" href="#">
        <img src="@/assets/images/wordart.png" alt="Logo" />
      </a>
      <button 
        class="navbar-toggler" 
        type="button" 
        @click="isMenuOpen = !isMenuOpen"
        aria-controls="navMenu" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        <span class="navbar-toggler-icon"></span>
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-nav" :class="{ active: isMenuOpen }">
        <router-link 
          v-for="route of routes" 
          :key="route.path"
          :to="route.path" 
          class="nav-link"
          :class="{ active: currentRoute.name == route.name }"
          @click="isMenuOpen = false">
          {{ $t(`navigation.${String(route.name)}`) }}
        </router-link>
        <div class="navbar-spacer"></div>
        <div class="language-selector">
          <button 
            class="lang-btn" 
            @click="changeLanguage('en')" 
            :class="{ active: $i18next.language === 'en' }">
            EN
          </button>
          <button 
            class="lang-btn" 
            @click="changeLanguage('nl')" 
            :class="{ active: $i18next.language === 'nl' }">
            NL
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.04);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-container {
  margin: 0;
  flex-grow: 1;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: nowrap;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.navbar-brand img {
  height: 36px;
  width: auto;
}

.navbar-brand:hover {
  opacity: 0.8;
}

.navbar-nav {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0;
  flex-grow: 1;
  margin-left: 0;
}

.navbar-nav.active {
  transform: translateX(0);
}

.nav-link {
  color: var(--color-secondary);
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.nav-link:hover {
  color: var(--color-accent);
  border-bottom-color: var(--color-accent);
}

.nav-link.active {
  color: var(--color-accent);
  border-bottom-color: var(--color-accent);
}

.navbar-spacer {
  flex-grow: 1;
}

.navbar-toggler {
  display: none;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
  z-index: 101;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
}

.navbar-toggler:focus {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
  border-radius: 2px;
}

.navbar-toggler-icon {
  width: 24px;
  height: 2px;
  background-color: var(--color-primary);
  border-radius: 1px;
  transition: all 0.3s ease;
  display: block;
}

.language-selector {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-left: auto;
  padding-left: 2rem;
  border-left: 1px solid var(--color-border);
}

.lang-btn {
  background: none;
  border: none;
  padding: 0.25rem 0.5rem;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-tertiary);
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.lang-btn:hover {
  color: var(--color-primary);
}

.lang-btn.active {
  color: var(--color-accent);
  background-color: var(--color-accent-light);
}

/* MOBILE STYLES */
@media (max-width: 768px) {
  .navbar-container {
    padding: 0 1rem;
    justify-content: space-between;
    gap: 0;
  }

  .navbar-toggler {
    display: flex;
  }

  .navbar-nav {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-background);
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    margin-left: 0;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    border-top: 1px solid var(--color-border);
    overflow-y: auto;
    padding: 1rem 0;
    display: flex;
  }

  .nav-link {
    padding: 0.75rem 1.5rem;
    border-bottom: none;
    border-left: 3px solid transparent;
  }

  .nav-link:hover,
  .nav-link.active {
    background-color: var(--color-background-subtle);
    border-left-color: var(--color-accent);
    border-bottom-color: transparent;
  }

  .navbar-spacer {
    display: none;
  }

  .language-selector {
    margin-left: 0;
    padding-left: 1.5rem;
    border-left: none;
    border-top: 1px solid var(--color-border);
    padding-top: 1rem;
    margin-top: auto;
    padding-bottom: 1rem;
    justify-content: flex-start;
  }

}
</style>
