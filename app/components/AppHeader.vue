<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

const props = defineProps<{
    info: {
      logoId: number
      firstMenu: {
        label: string
        link: string | null
      }
      secondMenu: {
        label: string
        link: string | null
      }
      thirdMenu: {
        label: string
        link: string | null
      }
      cta: {
        label: string
        link: string | null
      }
    }
    logoUrl: string
}>()

const items = computed(() => [{
  label: props.info.firstMenu.label,
  to: '#',
  active: activeHeadings.value.includes(props.info.firstMenu.label) && !activeHeadings.value.includes(props.info.secondMenu.label)
}, {
  label: props.info.secondMenu.label,
  to: '#',
  active: activeHeadings.value.includes(props.info.secondMenu.label)
}, {
  label: props.info.thirdMenu.label,
  to: '/contact',
  active: activeHeadings.value.includes(props.info.thirdMenu.label) && !activeHeadings.value.includes(props.info.secondMenu.label)
}])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector(`#${props.info.firstMenu.label}`),
    document.querySelector(`#${props.info.secondMenu.label}`),
    document.querySelector(`#${props.info.thirdMenu.label}`)
  ].filter(Boolean) as Element[])
})
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <AppLogo class="w-auto h-6 shrink-0" :logoUrl="logoUrl"/>
      </NuxtLink>
    </template>

    <template #right>
      <UNavigationMenu
        :items="items"
        variant="link"
        class="hidden lg:block uppercase"
      />

      <UButton
        :label="info.cta.label"
        variant="solid"
        class="hidden lg:block bg-[#ed2330] uppercase"
      />

      <!-- <UColorModeButton /> -->
    </template>

    <!-- <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
      <UButton
        class="mt-4"
        label="Download App"
        variant="subtle"
        block
      />
    </template> -->
  </UHeader>
</template>
