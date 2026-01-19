<script setup lang="ts">
import type PostDTO from '@/models/Post';

const props = withDefaults(defineProps<{
  post: PostDTO;
}>(), {
});
</script>

<template>
  <router-link class="post-card" :to="{ name: 'post', params: { id: post.id } }" :aria-label="post.postTitle">
    <div class="post-card-image-wrapper">
      <img :src="post.thumbnail" :alt="post.postTitle" class="post-card-image" loading="lazy" />
    </div>
    <div class="post-card-content">
      <div class="d-flex flex-row gap-2">
        <span class="post-card-tag" v-for="tag in post.tags" :key="tag">{{ tag }}</span>
      </div>
      <h3 class="post-card-title">{{ post.postTitle }}</h3>
      <time class="post-card-date">{{ new Date(post.createdDate).toLocaleDateString() }}</time>
      <p class="post-card-excerpt">{{ post.short }}</p>
      <span class="post-card-link">{{ $t('blog.continueReading') }} →</span>
    </div>
  </router-link>
</template>

<style scoped>
.post-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  background-color: var(--color-background);
  transition: all var(--transition-normal);
  height: 100%;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.post-card:hover {
  border-color: var(--color-accent);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.post-card:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 4px;
}

.post-card-image-wrapper {
  overflow: hidden;
  background-color: var(--color-background-subtle);
  aspect-ratio: 16 / 10;
}

.post-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform var(--transition-normal);
}

.post-card:hover .post-card-image {
  transform: scale(1.02);
}

.post-card-content {
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.post-card-tag {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: var(--color-accent);
  background-color: var(--color-accent-light);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-md);
  margin-bottom: var(--spacing-lg);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  width: fit-content;
}

.post-card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
  line-height: 1.4;
}

.post-card-date {
  font-size: 13px;
  color: var(--color-tertiary);
  margin-bottom: var(--spacing-lg);
  display: block;
}

.post-card-excerpt {
  color: var(--color-secondary);
  margin-bottom: var(--spacing-lg);
  flex-grow: 1;
  font-size: 0.95rem;
  line-height: 1.6;
}

.post-card-link {
  color: var(--color-accent);
  font-weight: 600;
  font-size: 0.95rem;
  transition: all var(--transition-normal);
  align-self: flex-start;
}

.post-card-link:hover {
  color: var(--color-accent-hover);
  padding-right: var(--spacing-sm);
}
</style>
