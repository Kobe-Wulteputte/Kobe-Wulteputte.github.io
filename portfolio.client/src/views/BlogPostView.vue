<script setup lang="ts">
import { userKey } from '@/utilities/injection-keys';
import { useTranslation } from 'i18next-vue';
import { inject, computed, onMounted, type DirectiveBinding } from 'vue';
import { useRouter } from 'vue-router';
import { useBlogStore } from '@/stores/BlogStore';
import { useImageStore } from '@/stores/ImageStore';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps<{
    id: string;
}>();
const tr = useTranslation();
const router = useRouter();
const blogStore = useBlogStore();
const imageStore = useImageStore();

const currentLang = computed(() => {
    const lang = tr.i18next.language || 'en';
    return lang.startsWith('nl') ? 'nl' : 'en';
});

const postMetaData = computed(() => blogStore.getPost(props.id));
const postContent = computed(() => blogStore.getPostContent(props.id, currentLang.value));

const thumbnailUrl = computed(() => {
    if (!postMetaData.value?.thumbnail) return '';
    return imageStore.getImageUrl(postMetaData.value.thumbnail) || postMetaData.value.thumbnail;
});

onMounted(() => {
    window.scrollTo(0, 150);
});

</script>

<template>
    <main class="blog-post-view">
        <div v-if="postMetaData?.thumbnail && thumbnailUrl" class="hero-image">
            <img :src="thumbnailUrl" :alt="postMetaData.postTitle" />
        </div>
        <div class="container">
            <article class="blog-post">
                <header class="blog-post-header">
                    <div class="d-flex justify-content-between flex-row align-items-center flex-wrap">
                        <button class="back-button" @click="router.back()" aria-label="Go back">
                            <FontAwesomeIcon icon="arrow-left" /> {{ tr.t('blogPostView.backButton') }}
                        </button>
                        <h1 class="blog-post-title">{{ postMetaData?.postTitle || "Blog post" }}</h1>
                    </div>
                    <p class="blog-post-meta">{{ postMetaData?.createdDate?.toLocaleDateString() || "" }}</p>
                </header>
                <div class="blog-post-content" v-html="postContent">
                </div>
            </article>
        </div>
    </main>
</template>

<style scoped>
.blog-post-view {
    flex: 1;
    background-color: var(--color-background);
    padding-bottom: 4rem;
}

.hero-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
    background-color: var(--color-tertiary);
    animation: slideDownFadeIn var(--transition-normal) forwards;
}

.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.blog-post {
    max-width: 800px;
    margin: 0 auto;
    padding-top: 2rem;
}

.blog-post-header {
    margin-bottom: 2.5rem;
    animation: slideDownFadeIn var(--transition-normal) forwards;
}

.back-button {
    display: inline-block;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: transparent;
    border: 1px solid var(--color-tertiary);
    border-radius: 4px;
    color: var(--color-tertiary);
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.back-button:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
    background-color: rgba(255, 255, 255, 0.05);
}

.blog-post-title {
    font-size: 2rem;
    flex-grow: 1;
    font-weight: 600;
    color: var(--color-primary);
    line-height: 1.3;
    margin-bottom: 0;
    text-align: end;
}

.blog-post-meta {
    color: var(--color-tertiary);
    font-size: 0.95rem;
    text-align: end;
}

.blog-post-content {
    color: var(--color-secondary);
    line-height: 1.8;
    animation: slideUpFadeIn var(--transition-normal) 0.1s forwards;
    opacity: 0;
}

.blog-post-content :is(h1, h2, h3, h4, h5, h6) {
    color: var(--color-primary);
    margin: 1.5rem 0 0.75rem;
    line-height: 1.3;
}

.blog-post-content h1 {
    font-size: 2rem;
}

.blog-post-content h2 {
    font-size: 1.75rem;
}

.blog-post-content h3 {
    font-size: 1.5rem;
}

.blog-post-content h4 {
    font-size: 1.25rem;
}

.blog-post-content h5 {
    font-size: 1.125rem;
}

.blog-post-content h6 {
    font-size: 1rem;
}

.blog-post-content p {
    margin: 1rem 0;
}

.blog-post-content a {
    color: var(--color-accent);
    text-decoration: underline;
    text-underline-offset: 2px;
}

.blog-post-content a:hover {
    color: var(--color-accent-hover);
}

.blog-post-content img {
    max-width: 100%;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
}

.blog-post-content .aside-image {
    float: right;
    width: 300px;
    margin: 0 0 1rem 1.5rem;
}

.blog-post-content .aside-image img {
    width: 100%;
    margin: 0;
}

.blog-post-content ul,
.blog-post-content ol {
    padding-left: 1.5rem;
    margin: 1rem 0;
}

.blog-post-content li {
    margin: 0.25rem 0;
}

.blog-post-content blockquote {
    border-left: 3px solid var(--color-border);
    padding-left: 1rem;
    color: var(--color-tertiary);
    margin: 1rem 0;
}

.blog-post-content code {
    background: var(--color-muted);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    padding: 0.15rem 0.35rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 0.95em;
}

.blog-post-content pre {
    background: var(--color-muted);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: 1rem;
    overflow: auto;
    box-shadow: var(--shadow-xs);
}

.blog-post-content pre code {
    border: none;
    background: transparent;
    padding: 0;
}

.blog-post-content table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
}

.blog-post-content th,
.blog-post-content td {
    border: 1px solid var(--color-border);
    padding: 0.5rem 0.75rem;
}

.blog-post-content thead th {
    background: var(--color-muted);
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

<style>
.blog-post-content .aside-image {
    float: right;
    width: 300px;
    margin: 0 0 1rem 1.5rem;
}

.blog-post-content .aside-image img {
    width: 100%;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    margin: 0;
}

@media (max-width: 768px) {
    .blog-post-content .aside-image {
        float: none;
        width: 100%;
        margin: 1rem 0;
    }
}
</style>