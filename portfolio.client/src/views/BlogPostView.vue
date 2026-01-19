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

function vColor(el: HTMLElement, binding: DirectiveBinding) {
    el.style.color = binding.value;
}
</script>

<template>
    <main class="blog-post-view">
        <div class="container py-3xl">
            <article class="blog-post">
                <header class="blog-post-header">
                    <h1 class="blog-post-title">Blog post {{ id }}</h1>
                    <p class="blog-post-meta">By {{ user?.name || "Anonymous" }}</p>
                </header>
                <div class="blog-post-content">
                    <input ref="el" v-highlight class="blog-post-input" />
                </div>
            </article>
        </div>
    </main>
</template>

<style scoped>
.blog-post-view {
    flex: 1;
    background-color: var(--color-background);
    padding-top: 2rem;
}

.blog-post {
    max-width: 800px;
    margin: 0 auto;
}

.blog-post-header {
    margin-bottom: 2rem;
    animation: slideDownFadeIn var(--transition-normal) forwards;
}

.blog-post-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-primary);
    line-height: 1.3;
    margin-bottom: 0.5rem;
}

.blog-post-meta {
    color: var(--color-tertiary);
    font-size: 0.95rem;
}

.blog-post-content {
    color: var(--color-secondary);
    line-height: 1.8;
    animation: slideUpFadeIn var(--transition-normal) 0.1s forwards;
    opacity: 0;
}

.blog-post-input {
    width: 100%;
    padding: var(--spacing-md);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius-md);
    font-family: var(--font-family-base);
    font-size: 1rem;
    transition: all var(--transition-normal);
}

.blog-post-input:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
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

@keyframes slideUpFadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .blog-post-title {
        font-size: 1.875rem;
    }
}
</style>