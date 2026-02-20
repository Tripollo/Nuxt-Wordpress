<script setup lang="ts">

const { getPage, getMedia } = useWordpress()

const { data: wpPage} = await getPage('home')


if (!wpPage.value) {
  throw createError({ statusCode: 404, statusMessage: 'Home page not found', fatal: true })
}

const hero = computed(() => wpPage.value?.acf?.hero)
const {data: heroMedia} = await getMedia(hero.value.image)
useSeoMeta({
  title: wpPage.value.title?.rendered || 'Home',
})
</script>

<template>
  <div v-if="wpPage" class="relative">
    <HeroSection v-if="hero" :hero="hero" :imgUrl="heroMedia?.source_url"/>
  </div>
</template>
