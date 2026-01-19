<script setup lang="ts">
import type PostDTO from "@/models/PostDTO";
import PostCard from "@/components/PostCard.vue";
import { ref } from "vue";
import { useImageGalleryStore } from "@/stores/ImageGallery";

var postList = ref<PostDTO[]>([]);
const { nextImage, previousImage } = useImageGalleryStore();

postList.value.push(
  {
    id: 1,
    postTitle: "Post 1",
    createdDate: new Date(),
    short: "This is a short description of the post",
    blogType: "Test",
    thumbnail: nextImage()
  },
  {
    id: 2,
    postTitle: "Post 2",
    createdDate: new Date(),
    short: "This is the post",
    blogType: "Test",
    thumbnail: nextImage()
  });

function handleClick() {
  postList.value.push({
    id: postList.value.length + 1,
    postTitle: "Post " + (postList.value.length + 1).toString(),
    createdDate: new Date(),
    short: "This is a short description of the post",
    blogType: "Test",
    thumbnail: nextImage()
  });
}

</script>

<template>
  <main class="blog-view">
    <div class="container py-3xl">
      <div class="blog-header">
        <h1 class="blog-title">{{$t('blogpage.title')}}</h1>
        <p class="blog-description">{{$t('blogpage.description')}}</p>
      </div>

      <div class="posts-grid">
        <div v-for="post of postList" :key="post.id">
          <PostCard :post="post" :is-main="post.id === 1"></PostCard>
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

/* Animations */
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

/* Responsive Design */
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