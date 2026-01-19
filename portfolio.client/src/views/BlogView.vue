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
  <button class="btn btn-primary" @click="handleClick()">{{ $t('blog.addPost') }}</button>
  <div class="container py-2 px-2">
    <div class="row">
      <div class="col-xl-4 col-md-6 py-3" v-for="post of postList">
        <PostCard :post="post" :is-main="post.id === 1"></PostCard>
      </div>
    </div>
  </div>
</template>

<style scoped></style>