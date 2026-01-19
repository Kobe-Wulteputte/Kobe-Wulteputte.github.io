import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'
import i18next from '@/i18n'

const LANGUAGE_STORAGE_KEY = 'app-language'

export const useLanguageStore = defineStore('language', () => {
  // Initialize from localStorage or default to 'en'
  const getSavedLanguage = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'en'
    }
    return 'en'
  }

  const currentLanguage = ref<string>(getSavedLanguage())

  const setLanguage = (lang: string) => {
    currentLanguage.value = lang
    i18next.changeLanguage(lang)
    
    // Persist to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
    }
  }

  const initializeLanguage = () => {
    const savedLanguage = getSavedLanguage()
    currentLanguage.value = savedLanguage
    i18next.changeLanguage(savedLanguage)
  }

  return {
    currentLanguage: computed(() => currentLanguage.value),
    setLanguage,
    initializeLanguage
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLanguageStore, import.meta.hot))
}
