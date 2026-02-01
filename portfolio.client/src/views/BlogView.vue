<script setup lang="ts">
import PostCard from "@/components/PostCard.vue";
import { computed } from "vue";
import { useBlogStore } from "@/stores/BlogStore";

const blogStore = useBlogStore();
const postList = computed(() => blogStore.allPosts);


</script>

<template>
  <main class="blog-view">
    <div class="container py-3xl">
      <div class="blog-header">
        <h1 class="blog-title">{{ $t('blogpage.title') }}</h1>
        <p class="blog-description">{{ $t('blogpage.description') }}</p>
      </div>

      <div class="posts-grid">
        <div v-for="post of postList" :key="post.id">
          <PostCard :post="post"></PostCard>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.blog-view {
  flex: 1;
  background-color: var(--color-background);
}

.blog-header {
  margin-bottom: 3rem;
  animation: slideDownFadeIn var(--transition-normal) forwards;
}

.blog-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.blog-description {
  font-size: 1.125rem;
  color: var(--color-secondary);
  margin-bottom: 1.5rem;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

@keyframes slideDownFadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .blog-header {
    margin-bottom: 2rem;
  }

  .blog-title {
    font-size: 1.875rem;
  }

  .posts-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>