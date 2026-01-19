<script setup lang="ts">
import { userKey } from '@/utilities/injection-keys';
import { inject, onMounted, ref, type DirectiveBinding } from 'vue';

const props = defineProps<{
    id: string;
}>();
const el = ref<HTMLInputElement | null>(null)
const user = inject(userKey);

onMounted(() => {
    el.value?.focus();
});

// Custom directive
function vColor(el: HTMLElement, binding: DirectiveBinding) {
    el.style.color = binding.value;
}
</script>


<template>
    <div>
        <h1 v-color="'blue'">Blog post {{ id }}</h1>
    </div>
    <p>Hello {{ user?.name || "anon" }}</p>
    <input ref="el" v-highlight />
</template>