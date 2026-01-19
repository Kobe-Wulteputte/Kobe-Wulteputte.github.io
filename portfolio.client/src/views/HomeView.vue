<script setup lang="ts">
</script>

<template>
  <main class="home-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-image">
            <img 
              src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg"
              :alt="$t('common.profilePicture')"
              loading="lazy" />
          </div>
          <div class="hero-content">
            <h1 class="hero-title">Kobe Wulteputte</h1>
            <p class="hero-description">{{ $t('home.intro') }}</p>
            <div class="social-links">
              <a href="http://www.google.be" class="social-link" aria-label="Instagram" title="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.069 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.646-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z"/>
                </svg>
              </a>
              <a href="http://www.google.be" class="social-link" aria-label="LinkedIn" title="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
              <a href="http://www.google.be" class="social-link" aria-label="Strava" title="Strava">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M15.387 2.173l-12 20.326h3.039L6.57 14.5h5.016l-1.143-2.174H7.41l3.976-6.885 3.077 5.337h2.262L15.387 2.173z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Work Experience Section -->
    <section class="experience-section">
      <div class="container">
        <h2 class="section-title">{{ $t('home.workExperience') }}</h2>
        
        <div class="experience-timeline">
          <!-- Experience Item -->
          <div class="experience-item">
            <div class="experience-header">
              <h3 class="experience-title">{{ $t('home.internship') }}</h3>
            </div>
            <div class="experience-body">
              <p>{{ $t('home.internshipDescription') }}</p>
            </div>
          </div>

          <!-- Experience Item -->
          <div class="experience-item">
            <div class="experience-header">
              <h3 class="experience-title">{{ $t('home.thesis') }}</h3>
            </div>
            <div class="experience-body">
              <p>{{ $t('home.thesisDescription') }}</p>
            </div>
          </div>

          <!-- Experience Item -->
          <div class="experience-item">
            <div class="experience-header">
              <h3 class="experience-title">{{ $t('home.project') }}</h3>
            </div>
            <div class="experience-body">
              <p>{{ $t('home.projectDescription') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home-view {
  flex: 1;
}

/* Hero Section */
.hero-section {
  padding: 4rem 0;
  background-color: var(--color-background);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-image {
  position: relative;
  animation: slideUpFadeIn var(--transition-normal) forwards;
}

.hero-image img {
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: var(--border-radius-lg);
}

.hero-content {
  animation: slideUpFadeIn var(--transition-normal) 0.1s forwards;
  opacity: 0;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1.2;
  margin-bottom: 1.5rem;
  letter-spacing: -0.01em;
}

.hero-description {
  font-size: 1.125rem;
  color: var(--color-secondary);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  display: inline-flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-lg);
  transition: all var(--transition-normal);
  background-color: var(--color-background);
}

.social-link:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
  background-color: var(--color-accent-light);
  transform: translateY(-2px);
}

/* Experience Section */
.experience-section {
  padding: 4rem 0;
  background-color: var(--color-background-subtle);
}

.section-title {
  text-align: center;
  font-size: 2rem;
  color: var(--color-primary);
  margin-bottom: 3rem;
}

.experience-timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.experience-item {
  background-color: var(--color-background);
  border-left: 3px solid var(--color-accent);
  padding: 2rem;
  border-radius: var(--border-radius-lg);
  transition: all var(--transition-normal);
  animation: slideUpFadeIn var(--transition-normal) forwards;
}

.experience-item:nth-child(1) { animation-delay: 0s; }
.experience-item:nth-child(2) { animation-delay: 0.1s; }
.experience-item:nth-child(3) { animation-delay: 0.2s; }

.experience-item:hover {
  box-shadow: var(--shadow-md);
  transform: translateX(4px);
  border-left-color: var(--color-accent-hover);
}

.experience-header {
  margin-bottom: 1rem;
}

.experience-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-primary);
  margin: 0;
}

.experience-body p {
  margin: 0;
  color: var(--color-secondary);
  line-height: 1.7;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    padding: 2.5rem 0;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .experience-section {
    padding: 2.5rem 0;
  }

  .section-title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
}

/* Animations */
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
</style>
