<script setup lang="ts">
import type PostDTO from '@/models/PostDTO';
import { onMounted } from 'vue';

// Effe, hoe lelijk is deze default waarde zetten???
const props = withDefaults(defineProps<{
  post: PostDTO;
  isMain?: boolean;
}>(), {
  isMain: false,
});
// Een andere manier om props te definieren, maar even lelijk
// const props = defineProps({
//   post: {
//     type: Object as PropType<PostDTO>,
//     required: true,
//   },
//   isMain: {
//     type: Boolean,
//     required: false,
//     default: false,
//   },
// })

// Kleine note bij default waarde van boolean props: 
// Deze zal default false zijn, en als de prop meegegeven worden (zelfs zonder waarde) wordt deze true.
// De default is hier dus niet nodig, maar voor de duidelijkheid toch toegevoegd.

// De variant van attached
onMounted(() => {
  console.log('mounted');
});


</script>

<template>
  <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
    <div class="p-4 d-flex flex-column position-static" :class="{ 'col-6': !isMain, 'col-8': isMain }">
      <strong class="d-inline-block mb-2 text-success">{{ post.blogType }}</strong>
      <h3 class="mb-0">{{ post.postTitle }}</h3>
      <div class="mb-1 text-muted">{{ post.createdDate }}</div>
      <p class="mb-auto">{{ post.short }}</p>

      <router-link :to="{ name: 'blogpost', params: { id: post.id } }"> <a class="stretched-link">Continue
          reading</a></router-link>
    </div>
    <div class="d-lg-block" :class="{ 'col-6': !isMain, 'col-4': isMain }">
      <img style="object-fit: cover; height: 100%;" :src="post.thumbnail" alt="thumbnail" focusable="false" />
    </div>
  </div>
</template>
