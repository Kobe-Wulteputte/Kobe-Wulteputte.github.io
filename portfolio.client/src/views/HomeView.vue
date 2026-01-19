<script setup lang="ts">

</script>

<template>
  <main>
    <div class="container col-xxl-9 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg"
            class="d-block mx-lg-auto img-fluid" :alt="$t('common.profilePicture')" width="700" height="500" loading="lazy" />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">Kobe Wulteputte</h1>
          <p class="lead">
            {{ $t('home.intro') }}
          </p>
          <a href="http://www.google.be" class="me-lg-4 me-2"><font-awesome-icon class="display-6 text-dark"
              :icon="['fab', 'instagram']"></font-awesome-icon></a>
          <a href="http://www.google.be" class="me-lg-4 me-2">
            <font-awesome-icon class="display-6 text-dark" :icon="['fab', 'linkedin']"></font-awesome-icon></a>
          <a href="http://www.google.be" class="me-lg-4 me-2">
            <font-awesome-icon class="display-6 text-dark" :icon="['fab', 'strava']"></font-awesome-icon></a>
        </div>
      </div>
    </div>
    <div class="b-example-divider"></div>
    <div class="container col-xxl-9 py-5">
      <div class="row flex-lg-row align-items-center justify-content-center g-5 py-5">
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-center">
            {{ $t('home.workExperience') }}
          </h1>
        </div>
      </div>
      <div class="row flex-lg-row align-items-center g-5 py-1">
        <div class="col-lg-3">
          <h3 class="display-6 lh-1 mb-3 text-end">{{ $t('home.internship') }}</h3>
        </div>
        <div class="col-lg-8">
          <p>
            {{ $t('home.internshipDescription') }}
          </p>
        </div>
      </div>
      <hr />
      <div class="row flex-lg-row-reverse align-items-center g-5 py-1">
        <div class="col-lg-3">
          <h3 class="display-6 lh-1 mb-3 text-start">{{ $t('home.thesis') }}</h3>
        </div>
        <div class="col-lg-8 text-end">
          <p>
            {{ $t('home.thesisDescription') }}
          </p>
        </div>
      </div>
      <hr />

      <div class="row flex-lg-row align-items-center g-5 py-1">
        <div class="col-lg-3">
          <h3 class="display-6 lh-1 mb-3 text-end">{{ $t('home.project') }}</h3>
        </div>
        <div class="col-lg-8">
          <p>
            {{ $t('home.projectDescription') }}
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>
