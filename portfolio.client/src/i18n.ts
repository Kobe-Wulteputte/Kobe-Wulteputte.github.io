import i18next from 'i18next'
import en from './locales/en.json'
import nl from './locales/nl.json'

const LANGUAGE_STORAGE_KEY = 'app-language'

const getSavedLanguage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'en'
  }
  return 'en'
}

i18next.init({
  lng: getSavedLanguage(),
  fallbackLng: 'en',
  resources: {
    en: { translation: en },
    nl: { translation: nl }
  },
  interpolation: {
    escapeValue: false
  }
})

export default i18next
