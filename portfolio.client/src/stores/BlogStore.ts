import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'
import { marked } from 'marked'
import { useImageStore } from './ImageStore'
import type Post from '@/models/Post'
import type Metadata from '@/models/Metadata'

export interface BlogPost extends Post {
  contentEn: string
  contentNl: string
}

// Helper function to process markdown images and resolve their paths
async function processMarkdownImages(markdown: string, postId: string): Promise<string> {
  const imageStore = useImageStore()
  const imageRegex = /!\[([^\]]*)\]\((?:\.\/)?([^):/]+\.[a-z]{3,4})\)/gi
  let processed = markdown
  const matches = [...markdown.matchAll(imageRegex)]
  console.debug(`Processing images for post ${postId}, found ${matches.length} images.`)

  for (const match of matches) {
    const [fullMatch, altText, imagePath] = match
    // Build the relative path for the image store
    const relativePath = `blogdata/${postId}/${imagePath}`

    // Get the image URL from the ImageStore
    const imageUrl = imageStore.getImageUrl(relativePath)

    if (imageUrl) {
      processed = processed.replace(fullMatch, `![${altText}](${imageUrl})`)
    } else {
      console.warn(`Failed to load image ${imagePath} for post ${postId}`)
    }
  }

  return processed
}

export const useBlogStore = defineStore('blog', () => {
  const posts = ref<Map<string, BlogPost>>(new Map())
  const isLoading = ref(false)
  const isLoaded = ref(false)

  const allPosts = computed(() =>
    Array.from(posts.value.values())
      .filter((post) => post.visible)
      .sort((a, b) => {
        return a.sequence - b.sequence
      })
  )

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
          sequence: meta.sequence,
          postTitle: meta.postTitle,
          createdDate: new Date(meta.createdDate),
          shortNl: meta.shortNl,
          shortEn: meta.shortEn,
          tags: meta.tags.split(';'),
          thumbnail: meta.thumbnail,
          visible: meta.visible,
          contentEn: '',
          contentNl: ''
        }

        if (!blogPost.visible) {
          // If the post is not visible, skip loading content
          posts.value.set(meta.id, blogPost)
          return
        }

        // Load English content
        try {
          const enModule = await import(`@/assets/blogdata/${meta.id}/en.md?raw`)
          let enContent = enModule.default as string
          enContent = await processMarkdownImages(enContent, meta.id)
          blogPost.contentEn = await marked.parse(enContent)
        } catch (e) {
          console.warn(`Failed to load EN content for post ${meta.id}`, e)
        }

        // Load Dutch content
        try {
          const nlModule = await import(`@/assets/blogdata/${meta.id}/nl.md?raw`)
          let nlContent = nlModule.default as string
          nlContent = await processMarkdownImages(nlContent, meta.id)
          blogPost.contentNl = await marked.parse(nlContent)
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
