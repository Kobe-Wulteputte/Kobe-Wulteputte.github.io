import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'
import { marked } from 'marked'
import type Post from '@/models/Post'
import type Metadata from '@/models/Metadata'

export interface BlogPost extends Post {
  contentEn: string
  contentNl: string
}

export const useBlogStore = defineStore('blog', () => {
  const posts = ref<Map<string, BlogPost>>(new Map())
  const isLoading = ref(false)
  const isLoaded = ref(false)

  const allPosts = computed(() => Array.from(posts.value.values()))

  async function preloadAllPosts() {
    if (isLoaded.value || isLoading.value) return

    isLoading.value = true

    try {
      // Load metadata
      const metadataModule = await import('@/assets/blogdata/metadata.json')
      const metadata = metadataModule.default as Array<Metadata>

      // Preload all posts in both languages
      const loadPromises = metadata.map(async (meta) => {
        const blogPost: BlogPost = {
          id: meta.id,
          postTitle: meta.postTitle,
          createdDate: new Date(meta.createdDate),
          shortNl: meta.shortNl,
          shortEn: meta.shortEn,
          tags: meta.tags.split(';'),
          thumbnail: meta.thumbnail,
          contentEn: '',
          contentNl: ''
        }

        // Load English content
        try {
          const enModule = await import(`@/assets/blogdata/${meta.id}/en.md?raw`)
          blogPost.contentEn = await marked.parse(enModule.default as string)
        } catch (e) {
          console.warn(`Failed to load EN content for post ${meta.id}`, e)
        }

        // Load Dutch content
        try {
          const nlModule = await import(`@/assets/blogdata/${meta.id}/nl.md?raw`)
          blogPost.contentNl = await marked.parse(nlModule.default as string)
        } catch (e) {
          console.warn(`Failed to load NL content for post ${meta.id}`, e)
        }

        posts.value.set(meta.id, blogPost)
      })

      await Promise.all(loadPromises)
      isLoaded.value = true
    } catch (error) {
      console.error('Failed to preload blog posts', error)
    } finally {
      isLoading.value = false
    }
  }

  function getPost(id: string): BlogPost | undefined {
    return posts.value.get(id)
  }

  function getPostContent(id: string, language: 'en' | 'nl'): string {
    const post = posts.value.get(id)
    if (!post) return '<p>Post not found.</p>'

    const content = language === 'nl' ? post.contentNl : post.contentEn
    return content || post.contentEn || post.contentNl || '<p>Content not available.</p>'
  }

  return {
    posts,
    isLoading,
    isLoaded,
    allPosts,
    preloadAllPosts,
    getPost,
    getPostContent
  }
})

// Hot module replacement for stores
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBlogStore, import.meta.hot))
}
