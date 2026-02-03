<script setup lang="ts">
</script>

<template>
  <main class="home-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-image">
            <img src="@/assets/images/portret.png" :alt="$t('common.profilePicture')" loading="lazy" />
          </div>
          <div class="hero-content">
            <h1 class="hero-title">Kobe Wulteputte</h1>
            <p class="hero-description">{{ $t('home.intro') }}</p>
            <div class="social-links">
              <a href="https://github.com/Kobe-Wulteputte" data-umami-event="Github link" target="_blank" class="social-link" aria-label="Github"
                title="Github">
                <FontAwesomeIcon :icon="['fab', 'github']" />
              </a>
              <a href="https://www.linkedin.com/in/kobe-w/" data-umami-event="LinkedIn link" target="_blank" class="social-link" aria-label="LinkedIn"
                title="LinkedIn">
                <FontAwesomeIcon :icon="['fab', 'linkedin']" />
              </a>
              <a href="https://www.strava.com/athletes/18349314" data-umami-event="Strava link" target="_blank" class="social-link" aria-label="Strava"
                title="Strava">
                <FontAwesomeIcon :icon="['fab', 'strava']" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Work Experience Section -->
    <section class="experience-section">
      <div class="container experience-timeline">
        <h2 class="section-title">{{ $t('home.workExperience') }}</h2>


        <!-- Experience Item -->
        <div class="experience-item">
          <div class="talking-point-header">
            <h3 class="experience-title talking-point-title">{{ $t('home.orbid.title') }}</h3>
          </div>
          <div class="experience-body">
            <p>{{ $t('home.orbid.description') }}</p>
          </div>
        </div>

        <!-- Experience Item -->
        <div class="experience-item">
          <div class="talking-point-header">
            <h3 class="experience-title talking-point-title">{{ $t('home.internship.title') }}</h3>
          </div>
          <div class="experience-body">
            <p>{{ $t('home.internship.description') }}</p>
          </div>
        </div>

        <!-- Experience Item -->
        <div class="experience-item">
          <div class="talking-point-header">
            <h3 class="experience-title talking-point-title">{{ $t('home.education.title') }}</h3>
          </div>
          <div class="experience-body">
            <p>{{ $t('home.education.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="free-time-section">
      <div class="container experience-timeline">
        <h2 class="section-title">{{ $t('home.freeTime.title') }}</h2>

        <div class="free-time-item">
          <div class="talking-point-header">
            <h3 class="talking-point-title">{{ $t('home.freeTime.title') }}</h3>
          </div>
          <div class="experience-body">
            <p>{{ $t('home.freeTime.description') }}</p>
          </div>
        </div>

        <div class="free-time-item">
          <div class="talking-point-header">
            <h3 class="talking-point-title">{{ $t('home.eventOrganiser.title') }}</h3>
          </div>
          <div class="experience-body">
            <p>{{ $t('home.eventOrganiser.description') }}</p>
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

.experience-section {
  padding: 4rem 0;
  background-color: var(--color-background-subtle);
}

.free-time-section {
  padding: 4rem 0;
  background-color: var(--color-background);
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

.free-time-item {
  background-color: var(--color-background-subtle);
  border-right: 3px solid var(--color-accent);
  padding: 2rem;
  border-radius: var(--border-radius-lg);
  transition: all var(--transition-normal);
  animation: slideUpFadeIn var(--transition-normal) forwards;
}

.experience-item:nth-child(1) {
  animation-delay: 0s;
}

.experience-item:nth-child(2) {
  animation-delay: 0.1s;
}

.experience-item:nth-child(3) {
  animation-delay: 0.2s;
}

.experience-item:hover {
  box-shadow: var(--shadow-md);
  transform: translateX(4px);
  border-left-color: var(--color-accent-hover);
}

.talking-point-header {
  margin-bottom: 1rem;
}

.talking-point-title {
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
