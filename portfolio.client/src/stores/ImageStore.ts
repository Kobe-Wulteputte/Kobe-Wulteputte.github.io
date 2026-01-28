import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'

// Eagerly import all images from assets folder using glob
const imageModules = import.meta.glob('@/assets/**/*.{png,jpg,jpeg,gif,svg,webp}', {
  eager: true,
  import: 'default'
})

export const useImageStore = defineStore('image', () => {
  const imageMap = ref<Map<string, string>>(new Map())
  const isLoaded = ref(false)

  // Initialize the image map with all loaded images
  function initializeImages() {
    if (isLoaded.value) return

    for (const [path, url] of Object.entries(imageModules)) {
      // Extract the relative path from assets folder
      // Path format: /src/assets/images/filename.jpg -> images/filename.jpg
      const relativePath = path.replace(/^.*\/assets\//, '')
      imageMap.value.set(relativePath, url as string)
    }

    isLoaded.value = true
  }

  // Get image URL by relative path
  function getImageUrl(imagePath: string): string | null {
    if (!isLoaded.value) {
      initializeImages()
    }

    // Handle absolute URLs
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath
    }

    return imageMap.value.get(imagePath) || null
  }

  // Initialize on store creation
  initializeImages()

  return {
    getImageUrl,
    imageMap: computed(() => imageMap.value),
    isLoaded: computed(() => isLoaded.value)
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useImageStore, import.meta.hot))
}
