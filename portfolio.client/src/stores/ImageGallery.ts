import { ref } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useImageGalleryStore = defineStore('ImageGallery', () => {
  const previousImage = ref<string>('https://picsum.photos/200/300')

  const states = { previousImage }
  function nextImage() {
    previousImage.value = `https://picsum.photos/id/${Math.round(Math.random() * 220)}/200/300`
    return previousImage.value
  }

  const actions = { nextImage }

  const getters = {}

  return { ...states, ...actions, ...getters }
})

// Stukje code om hot module replacement te laten werken voor stores
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useImageGalleryStore, import.meta.hot))
}
