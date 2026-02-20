<script setup lang="ts">
const colorMode = useColorMode()

const { getPage, getMedia } = useWordpress()

const { data: wpPage} = await getPage('home')


if (!wpPage.value) {
  throw createError({ statusCode: 404, statusMessage: 'Home page not found', fatal: true })
}

const headerData = computed(() => {
  return {
    logoId: wpPage.value?.acf?.logo,
    firstMenu: wpPage.value?.acf?.menu_1,
    secondMenu: wpPage.value?.acf?.menu_2,
    thirdMenu: wpPage.value?.acf?.menu_3,
    cta: wpPage.value?.acf?.cta
  }
})

const {data: logoMedia} = await getMedia(headerData.value.logoId)

const color = computed(() => colorMode.value === 'dark' ? '#171717' : 'white')

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/landing-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/landing-light.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp :toaster="{ expand: false }">
    <!-- <AppHeader /> -->
    <AppHeader v-if="headerData" :info="headerData" :logoUrl="logoMedia.source_url" />
    <UMain>
      <NuxtPage />
    </UMain>

    <AppFooter />
  </UApp>
</template>
